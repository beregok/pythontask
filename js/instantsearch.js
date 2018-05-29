/*! instantsearch.js 2.5.1 | © Algolia Inc. and other contributors; Licensed MIT | github.com/algolia/instantsearch.js */ ! function(e, t) {
    "object" === typeof exports && "object" === typeof module ? module.exports = t() : "function" === typeof define && define.amd ? define([], t) : "object" === typeof exports ? exports.instantsearch = t() : e.instantsearch = t()
}("undefined" !== typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 208)
    }([function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e) {
            var t = "string" === typeof e,
                n = void 0;
            if (n = t ? document.querySelector(e) : e, !o(n)) {
                var r = "Container must be `string` or `HTMLElement`.";
                throw t && (r += " Unable to find " + e), new Error(r)
            }
            return n
        }

        function o(e) {
            return e instanceof window.HTMLElement || Boolean(e) && e.nodeType > 0
        }

        function s(e) {
            return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        function u(e) {
            return function(t, n) {
                return t && !n ? e + "--" + t : t && n ? e + "--" + t + "__" + n : !t && n ? e + "__" + n : e
            }
        }

        function c(e) {
            var t = e.transformData,
                n = e.defaultTemplates,
                r = e.templates,
                i = e.templatesConfig,
                a = l(n, r);
            return x({
                transformData: t,
                templatesConfig: i
            }, a)
        }

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = (0, I.default)([].concat(i((0, L.default)(e)), i((0, L.default)(t))));
            return (0, j.default)(n, function(n, r) {
                var i = e[r],
                    a = t[r],
                    o = void 0 !== a && a !== i;
                return n.templates[r] = o ? a : i, n.useCustomCompileOptions[r] = o, n
            }, {
                templates: {},
                useCustomCompileOptions: {}
            })
        }

        function f(e) {
            var t = e.templates,
                n = e.templateKey,
                r = e.compileOptions,
                i = e.helpers,
                a = e.data,
                o = t[n],
                s = "undefined" === typeof o ? "undefined" : R(o),
                u = "string" === s,
                c = "function" === s;
            if (!u && !c) throw new Error("Template must be 'string' or 'function', was '" + s + "' (key: " + n + ")");
            if (c) return o(a);
            var l = p(i, r, a);
            return z.default.compile(o, r).render(x({}, a, {
                helpers: l
            }))
        }

        function p(e, t, n) {
            return (0, B.default)(e, function(e) {
                return (0, q.default)(function(r) {
                    var i = this,
                        a = function(e) {
                            return z.default.compile(e, t).render(i)
                        };
                    return e.call(n, r, a)
                })
            })
        }

        function d(e, t, n, r, i) {
            var a = {
                    type: t,
                    attributeName: n,
                    name: r
                },
                o = (0, F.default)(i, {
                    name: n
                }),
                s = void 0;
            if ("hierarchical" === t) {
                var u = e.getHierarchicalFacetByName(n),
                    c = r.split(u.separator);
                a.name = c[c.length - 1];
                for (var l = 0; void 0 !== o && l < c.length; ++l) o = (0, F.default)(o.data, {
                    name: c[l]
                });
                s = (0, k.default)(o, "count")
            } else s = (0, k.default)(o, 'data["' + a.name + '"]');
            var f = (0, k.default)(o, "exhaustive");
            return void 0 !== s && (a.count = s), void 0 !== f && (a.exhaustive = f), a
        }

        function h(e, t, n) {
            var r = n && t.query && t.query.trim() ? [{
                type: "query",
                name: t.query,
                query: t.query
            }] : [];
            return (0, O.default)(t.facetsRefinements, function(n, i) {
                (0, O.default)(n, function(n) {
                    r.push(d(t, "facet", i, n, e.facets))
                })
            }), (0, O.default)(t.facetsExcludes, function(e, t) {
                (0, O.default)(e, function(e) {
                    r.push({
                        type: "exclude",
                        attributeName: t,
                        name: e,
                        exclude: !0
                    })
                })
            }), (0, O.default)(t.disjunctiveFacetsRefinements, function(n, i) {
                (0, O.default)(n, function(n) {
                    r.push(d(t, "disjunctive", i, b(n), e.disjunctiveFacets))
                })
            }), (0, O.default)(t.hierarchicalFacetsRefinements, function(n, i) {
                (0, O.default)(n, function(n) {
                    r.push(d(t, "hierarchical", i, n, e.hierarchicalFacets))
                })
            }), (0, O.default)(t.numericRefinements, function(e, t) {
                (0, O.default)(e, function(e, n) {
                    (0, O.default)(e, function(e) {
                        r.push({
                            type: "numeric",
                            attributeName: t,
                            name: "" + e,
                            numericValue: e,
                            operator: n
                        })
                    })
                })
            }), (0, O.default)(t.tagRefinements, function(e) {
                r.push({
                    type: "tag",
                    attributeName: "_tags",
                    name: e
                })
            }), r
        }

        function m(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = e;
            return n && (r = r.setQuery("")), (0, M.default)(t) ? (r = r.clearTags(), r = r.clearRefinements()) : ((0, O.default)(t, function(e) {
                r = "_tags" === e ? r.clearTags() : r.clearRefinements(e)
            }), r)
        }

        function v(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.setState(m(e.state, t, n)).search()
        }

        function g(e, t) {
            if (t) return (0, D.default)(t, function(t, n) {
                return e + n
            })
        }

        function y(e) {
            return "number" === typeof e && e < 0 && (e = String(e).replace(/^-/, "\\-")), e
        }

        function b(e) {
            return String(e).replace(/^\\-/, "-")
        }

        function _(e, t) {
            if (void 0 === e || "function" !== typeof e) throw new Error(t)
        }

        function w(e) {
            return "object" === ("undefined" === typeof e ? "undefined" : R(e)) && null !== e && e.$$typeof === K
        }

        function P(e, t) {
            var n = !1;
            return function() {
                return n || (n = !0, console.warn("[InstantSearch.js]: " + t)), e.apply(void 0, arguments)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.deprecate = t.isReactElement = t.checkRendering = t.unescapeRefinement = t.escapeRefinement = t.prefixKeys = t.clearRefinementsAndSearch = t.clearRefinementsFromState = t.getRefinements = t.isDomElement = t.isSpecialClick = t.renderTemplate = t.prepareTemplateProps = t.bemHelper = t.getContainerNode = void 0;
        var R = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            x = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            S = n(18),
            j = r(S),
            C = n(14),
            O = r(C),
            E = n(11),
            F = r(E),
            N = n(59),
            k = r(N),
            T = n(27),
            M = r(T),
            A = n(7),
            L = r(A),
            H = n(385),
            I = r(H),
            U = n(177),
            D = r(U),
            V = n(178),
            B = r(V),
            Q = n(386),
            q = r(Q),
            W = n(387),
            z = r(W);
        t.getContainerNode = a, t.bemHelper = u, t.prepareTemplateProps = c, t.renderTemplate = f, t.isSpecialClick = s, t.isDomElement = o, t.getRefinements = h, t.clearRefinementsFromState = m, t.clearRefinementsAndSearch = v, t.prefixKeys = g, t.escapeRefinement = y, t.unescapeRefinement = b, t.checkRendering = _, t.isReactElement = w, t.deprecate = P;
        var K = "function" === typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                function r() {
                    return null
                }

                function i(e) {
                    var t = e.nodeName,
                        n = e.attributes;
                    e.attributes = {}, t.defaultProps && w(e.attributes, t.defaultProps), n && w(e.attributes, n)
                }

                function a(e, t) {
                    var n, r, i;
                    if (t) {
                        for (i in t)
                            if (n = W.test(i)) break;
                        if (n) {
                            r = e.attributes = {};
                            for (i in t) t.hasOwnProperty(i) && (r[W.test(i) ? i.replace(/([A-Z0-9])/, "-$1").toLowerCase() : i] = t[i])
                        }
                    }
                }

                function o(e, t, n) {
                    var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
                    r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
                    for (var i = t.childNodes.length; i--;) t.childNodes[i] !== r && t.removeChild(t.childNodes[i]);
                    var a = Object(U.render)(e, t, r);
                    return t && (t._preactCompatRendered = a && (a._component || {
                        base: a
                    })), "function" === typeof n && n(), a && a._component || a
                }

                function s(e, t, n, r) {
                    var i = Object(U.h)(G, {
                            context: e.context
                        }, t),
                        a = o(i, n),
                        s = a._component || a.base;
                    return r && r.call(s, a), s
                }

                function u(e) {
                    var t = e._preactCompatRendered && e._preactCompatRendered.base;
                    return !(!t || t.parentNode !== e) && (Object(U.render)(Object(U.h)(r), e, t), !0)
                }

                function c(e) {
                    return h.bind(null, e)
                }

                function l(e, t) {
                    for (var n = t || 0; n < e.length; n++) {
                        var r = e[n];
                        Array.isArray(r) ? l(r) : r && "object" === typeof r && !g(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = h(r.type || r.nodeName, r.props || r.attributes, r.children))
                    }
                }

                function f(e) {
                    return "function" === typeof e && !(e.prototype && e.prototype.render)
                }

                function p(e) {
                    return S({
                        displayName: e.displayName || e.name,
                        render: function() {
                            return e(this.props, this.context)
                        }
                    })
                }

                function d(e) {
                    var t = e[Q];
                    return t ? !0 === t ? e : t : (t = p(e), Object.defineProperty(t, Q, {
                        configurable: !0,
                        value: !0
                    }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, Object.defineProperty(e, Q, {
                        configurable: !0,
                        value: t
                    }), t)
                }

                function h() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    return l(e, 2), m(U.h.apply(void 0, e))
                }

                function m(e) {
                    e.preactCompatNormalized = !0, _(e), f(e.nodeName) && (e.nodeName = d(e.nodeName));
                    var t = e.attributes.ref,
                        n = t && typeof t;
                    return !X || "string" !== n && "number" !== n || (e.attributes.ref = y(t, X)), b(e), e
                }

                function v(e, t) {
                    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
                    if (!g(e)) return e;
                    var i = e.attributes || e.props,
                        a = Object(U.h)(e.nodeName || e.type, i, e.children || i && i.children),
                        o = [a, t];
                    return n && n.length ? o.push(n) : t && t.children && o.push(t.children), m(U.cloneElement.apply(void 0, o))
                }

                function g(e) {
                    return e && (e instanceof $ || e.$$typeof === B)
                }

                function y(e, t) {
                    return t._refProxies[e] || (t._refProxies[e] = function(n) {
                        t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
                    })
                }

                function b(e) {
                    var t = e.nodeName,
                        n = e.attributes;
                    if (n && "string" === typeof t) {
                        var r = {};
                        for (var i in n) r[i.toLowerCase()] = i;
                        if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                            var a = r.oninput || "oninput";
                            n[a] || (n[a] = F([n[a], n[r.onchange]]), delete n[r.onchange])
                        }
                    }
                }

                function _(e) {
                    var t = e.attributes || (e.attributes = {});
                    re.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", re)
                }

                function w(e, t) {
                    for (var n = arguments, r = 1, i = void 0; r < arguments.length; r++)
                        if (i = n[r])
                            for (var a in i) i.hasOwnProperty(a) && (e[a] = i[a]);
                    return e
                }

                function P(e, t) {
                    for (var n in e)
                        if (!(n in t)) return !0;
                    for (var r in t)
                        if (e[r] !== t[r]) return !0;
                    return !1
                }

                function R(e) {
                    return e && e.base || e
                }

                function x() {}

                function S(e) {
                    function t(e, t) {
                        O(this), A.call(this, e, t, z), N.call(this, e, t)
                    }
                    return e = w({
                        constructor: t
                    }, e), e.mixins && C(e, j(e.mixins)), e.statics && w(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps()), x.prototype = A.prototype, t.prototype = w(new x, e), t.displayName = e.displayName || "Component", t
                }

                function j(e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                        var r = e[n];
                        for (var i in r) r.hasOwnProperty(i) && "function" === typeof r[i] && (t[i] || (t[i] = [])).push(r[i])
                    }
                    return t
                }

                function C(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = F(t[n].concat(e[n] || Z), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
                }

                function O(e) {
                    for (var t in e) {
                        var n = e[t];
                        "function" !== typeof n || n.__bound || q.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
                    }
                }

                function E(e, t, n) {
                    if ("string" === typeof t && (t = e.constructor.prototype[t]), "function" === typeof t) return t.apply(e, n)
                }

                function F(e, t) {
                    return function() {
                        for (var n, r = arguments, i = this, a = 0; a < e.length; a++) {
                            var o = E(i, e[a], r);
                            if (t && null != o) {
                                n || (n = {});
                                for (var s in o) o.hasOwnProperty(s) && (n[s] = o[s])
                            } else "undefined" !== typeof o && (n = o)
                        }
                        return n
                    }
                }

                function N(e, t) {
                    k.call(this, e, t), this.componentWillReceiveProps = F([k, this.componentWillReceiveProps || "componentWillReceiveProps"]), this.render = F([k, T, this.render || "render", M])
                }

                function k(e, t) {
                    if (e) {
                        var n = e.children;
                        if (n && Array.isArray(n) && 1 === n.length && ("string" === typeof n[0] || "function" === typeof n[0] || n[0] instanceof $) && (e.children = n[0], e.children && "object" === typeof e.children && (e.children.length = 1, e.children[0] = e.children)), K) {
                            var r = "function" === typeof this ? this : this.constructor,
                                i = this.propTypes || r.propTypes,
                                a = this.displayName || r.name;
                            i && I.a.checkPropTypes(i, e, "prop", a)
                        }
                    }
                }

                function T(e) {
                    X = this
                }

                function M() {
                    X === this && (X = null)
                }

                function A(e, t, n) {
                    U.Component.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {}, this._refProxies = {}, n !== z && N.call(this, e, t)
                }

                function L(e, t) {
                    A.call(this, e, t)
                }
                n.d(t, "version", function() {
                    return D
                }), n.d(t, "DOM", function() {
                    return te
                }), n.d(t, "Children", function() {
                    return ee
                }), n.d(t, "render", function() {
                    return o
                }), n.d(t, "createClass", function() {
                    return S
                }), n.d(t, "createFactory", function() {
                    return c
                }), n.d(t, "createElement", function() {
                    return h
                }), n.d(t, "cloneElement", function() {
                    return v
                }), n.d(t, "isValidElement", function() {
                    return g
                }), n.d(t, "findDOMNode", function() {
                    return R
                }), n.d(t, "unmountComponentAtNode", function() {
                    return u
                }), n.d(t, "Component", function() {
                    return A
                }), n.d(t, "PureComponent", function() {
                    return L
                }), n.d(t, "unstable_renderSubtreeIntoContainer", function() {
                    return s
                }), n.d(t, "__spread", function() {
                    return w
                });
                var H = n(401),
                    I = n.n(H),
                    U = n(404);
                n.n(U);
                n.d(t, "PropTypes", function() {
                    return I.a
                });
                var D = "15.1.0",
                    V = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
                    B = "undefined" !== typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                    Q = "undefined" !== typeof Symbol ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
                    q = {
                        constructor: 1,
                        render: 1,
                        shouldComponentUpdate: 1,
                        componentWillReceiveProps: 1,
                        componentWillUpdate: 1,
                        componentDidUpdate: 1,
                        componentWillMount: 1,
                        componentDidMount: 1,
                        componentWillUnmount: 1,
                        componentDidUnmount: 1
                    },
                    W = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
                    z = {},
                    K = "undefined" === typeof e || !Object({
                        NODE_ENV: "production"
                    }) || !1,
                    $ = Object(U.h)("a", null).constructor;
                $.prototype.$$typeof = B, $.prototype.preactCompatUpgraded = !1, $.prototype.preactCompatNormalized = !1, Object.defineProperty($.prototype, "type", {
                    get: function() {
                        return this.nodeName
                    },
                    set: function(e) {
                        this.nodeName = e
                    },
                    configurable: !0
                }), Object.defineProperty($.prototype, "props", {
                    get: function() {
                        return this.attributes
                    },
                    set: function(e) {
                        this.attributes = e
                    },
                    configurable: !0
                });
                var J = U.options.event;
                U.options.event = function(e) {
                    return J && (e = J(e)), e.persist = Object, e.nativeEvent = e, e
                };
                var Y = U.options.vnode;
                U.options.vnode = function(e) {
                    if (!e.preactCompatUpgraded) {
                        e.preactCompatUpgraded = !0;
                        var t = e.nodeName,
                            n = e.attributes = w({}, e.attributes);
                        "function" === typeof t ? (!0 === t[Q] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || m(e), i(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), a(e, n))
                    }
                    Y && Y(e)
                };
                var G = function() {};
                G.prototype.getChildContext = function() {
                    return this.props.context
                }, G.prototype.render = function(e) {
                    return e.children[0]
                };
                for (var X, Z = [], ee = {
                        map: function(e, t, n) {
                            return null == e ? null : (e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
                        },
                        forEach: function(e, t, n) {
                            if (null == e) return null;
                            e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
                        },
                        count: function(e) {
                            return e && e.length || 0
                        },
                        only: function(e) {
                            if (e = ee.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
                            return e[0]
                        },
                        toArray: function(e) {
                            return null == e ? [] : Z.concat(e)
                        }
                    }, te = {}, ne = V.length; ne--;) te[V[ne]] = c(V[ne]);
                var re = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    },
                    set: function(e) {
                        this.class = e
                    }
                };
                w(A.prototype = new U.Component, {
                    constructor: A,
                    isReactComponent: {},
                    replaceState: function(e, t) {
                        var n = this;
                        this.setState(e, t);
                        for (var r in n.state) r in e || delete n.state[r]
                    },
                    getDOMNode: function() {
                        return this.base
                    },
                    isMounted: function() {
                        return !!this.base
                    }
                }), x.prototype = A.prototype, L.prototype = new x, L.prototype.isPureReactComponent = !0, L.prototype.shouldComponentUpdate = function(e, t) {
                    return P(this.props, e) || P(this.state, t)
                };
                var ie = {
                    version: D,
                    DOM: te,
                    PropTypes: I.a,
                    Children: ee,
                    render: o,
                    createClass: S,
                    createFactory: c,
                    createElement: h,
                    cloneElement: v,
                    isValidElement: g,
                    findDOMNode: R,
                    unmountComponentAtNode: u,
                    Component: A,
                    PureComponent: L,
                    unstable_renderSubtreeIntoContainer: s,
                    __spread: w
                };
                t.default = ie
            }.call(t, n(71))
    }, function(e, t) {
        var n = Array.isArray;
        e.exports = n
    }, function(e, t, n) {
        var r, i;
        ! function() {
            "use strict";

            function n() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var i = typeof r;
                        if ("string" === i || "number" === i) e.push(r);
                        else if (Array.isArray(r)) e.push(n.apply(null, r));
                        else if ("object" === i)
                            for (var o in r) a.call(r, o) && r[o] && e.push(o)
                    }
                }
                return e.join(" ")
            }
            var a = {}.hasOwnProperty;
            "undefined" !== typeof e && e.exports ? e.exports = n : (r = [], void 0 !== (i = function() {
                return n
            }.apply(t, r)) && (e.exports = i))
        }()
    }, function(e, t, n) {
        e.exports = n(406)()
    }, function(e, t, n) {
        var r = n(117),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = r || i || Function("return this")();
        e.exports = a
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o(e) ? i(e) : a(e)
        }
        var i = n(115),
            a = n(118),
            o = n(13);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return null != e && "object" == typeof e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? s(e) ? a(e[0], e[1]) : i(e) : u(e)
        }
        var i = n(256),
            a = n(269),
            o = n(25),
            s = n(2),
            u = n(274);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return (s(e) ? i : o)(e, a(t, 3))
        }
        var i = n(21),
            a = n(9),
            o = n(142),
            s = n(2);
        e.exports = r
    }, function(e, t, n) {
        var r = n(299),
            i = n(156),
            a = r(i);
        e.exports = a
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.default = function(e) {
            var t, n;
            return n = t = function(t) {
                function n() {
                    return i(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return o(n, t), s(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props.shouldAutoHideContainer;
                        return l.default.createElement("div", {
                            style: {
                                display: t ? "none" : ""
                            }
                        }, l.default.createElement(e, this.props))
                    }
                }]), n
            }(c.Component), t.displayName = e.name + "-AutoHide", n
        };
        var u = n(4),
            c = (r(u), n(1)),
            l = r(c)
    }, function(e, t, n) {
        function r(e) {
            return null != e && a(e.length) && !i(e)
        }
        var i = n(20),
            a = n(78);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return (s(e) ? i : a)(e, o(t))
        }
        var i = n(88),
            a = n(45),
            o = n(87),
            s = n(2);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, t)
        }
        var i = n(89);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t, n) {
            if (!e) return n;
            var r = (0, m.default)(n),
                i = void 0,
                a = "undefined" === typeof e ? "undefined" : u(e);
            if ("function" === a) i = e(r);
            else {
                if ("object" !== a) throw new Error("transformData must be a function or an object, was " + a + " (key : " + t + ")");
                i = e[t] ? e[t](r) : n
            }
            var o = "undefined" === typeof i ? "undefined" : u(i),
                s = "undefined" === typeof n ? "undefined" : u(n);
            if (o !== s) throw new Error("`transformData` must return a `" + s + "`, got `" + o + "`.");
            return i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PureTemplate = void 0;
        var u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            f = n(1),
            p = r(f),
            d = n(4),
            h = (r(d), n(203)),
            m = r(h),
            v = n(15),
            g = r(v),
            y = n(0),
            b = t.PureTemplate = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), l(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0, g.default)(this.props.data, e.data) || this.props.templateKey !== e.templateKey || !(0, g.default)(this.props.rootProps, e.rootProps)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.useCustomCompileOptions[this.props.templateKey],
                            t = e ? this.props.templatesConfig.compileOptions : {},
                            n = (0, y.renderTemplate)({
                                templates: this.props.templates,
                                templateKey: this.props.templateKey,
                                compileOptions: t,
                                helpers: this.props.templatesConfig.helpers,
                                data: this.props.data
                            });
                        if (null === n) return null;
                        if ((0, y.isReactElement)(n)) throw new Error("Support for templates as React elements has been removed, please use react-instantsearch");
                        return p.default.createElement("div", c({}, this.props.rootProps, {
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }))
                    }
                }]), t
            }(f.Component);
        b.defaultProps = {
            data: {},
            useCustomCompileOptions: {},
            templates: {},
            templatesConfig: {}
        };
        t.default = function(e) {
            return function(t) {
                var n = void 0 === t.data ? {} : t.data;
                return p.default.createElement(e, c({}, t, {
                    data: s(t.transformData, t.templateKey, n)
                }))
            }
        }(b)
    }, function(e, t, n) {
        function r(e) {
            return null == e ? void 0 === e ? u : s : c && c in Object(e) ? a(e) : o(e)
        }
        var i = n(29),
            a = n(217),
            o = n(218),
            s = "[object Null]",
            u = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = u(e) ? i : s,
                c = arguments.length < 3;
            return r(e, o(t, 4), n, c, a)
        }
        var i = n(95),
            a = n(45),
            o = n(9),
            s = n(277),
            u = n(2);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            var t = function(t) {
                function n(e) {
                    i(this, n);
                    var t = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                    return t.handleHeaderClick = t.handleHeaderClick.bind(t), t.state = {
                        collapsed: e.collapsible && e.collapsible.collapsed
                    }, t._cssClasses = {
                        root: (0, h.default)("ais-root", t.props.cssClasses.root),
                        body: (0, h.default)("ais-body", t.props.cssClasses.body)
                    }, t._footerElement = t._getElement({
                        type: "footer"
                    }), t
                }
                return o(n, t), c(n, [{
                    key: "_getElement",
                    value: function(e) {
                        var t = e.type,
                            n = e.handleClick,
                            r = void 0 === n ? null : n,
                            i = this.props.templateProps && this.props.templateProps.templates;
                        if (!i || !i[t]) return null;
                        var a = (0, h.default)(this.props.cssClasses[t], "ais-" + t),
                            o = (0, v.default)(this.props, "headerFooterData." + t);
                        return p.default.createElement(y.default, u({}, this.props.templateProps, {
                            data: o,
                            rootProps: {
                                className: a,
                                onClick: r
                            },
                            templateKey: t,
                            transformData: null
                        }))
                    }
                }, {
                    key: "handleHeaderClick",
                    value: function() {
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = [this._cssClasses.root];
                        this.props.collapsible && t.push("ais-root__collapsible"), this.state.collapsed && t.push("ais-root__collapsed");
                        var n = u({}, this._cssClasses, {
                                root: (0, h.default)(t)
                            }),
                            r = this._getElement({
                                type: "header",
                                handleClick: this.props.collapsible ? this.handleHeaderClick : null
                            });
                        return p.default.createElement("div", {
                            className: n.root
                        }, r, p.default.createElement("div", {
                            className: n.body
                        }, p.default.createElement(e, this.props)), this._footerElement)
                    }
                }]), n
            }(f.Component);
            return t.defaultProps = {
                cssClasses: {},
                collapsible: !1
            }, t.displayName = e.name + "-HeaderFooter", t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(4),
            f = (r(l), n(1)),
            p = r(f),
            d = n(3),
            h = r(d),
            m = n(59),
            v = r(m),
            g = n(16),
            y = r(g);
        t.default = s
    }, function(e, t, n) {
        function r(e) {
            if (!a(e)) return !1;
            var t = i(e);
            return t == s || t == u || t == o || t == c
        }
        var i = n(17),
            a = n(6),
            o = "[object AsyncFunction]",
            s = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return o(a(e, t, i), e + "")
        }
        var i = n(25),
            a = n(123),
            o = n(85);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            var o = !n;
            n || (n = {});
            for (var s = -1, u = t.length; ++s < u;) {
                var c = t[s],
                    l = r ? r(n[c], e[c], c, n, e) : void 0;
                void 0 === l && (l = e[c]), o ? a(n, c, l) : i(n, c, l)
            }
            return n
        }
        var i = n(62),
            a = n(48);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = a(e, t);
            return i(n) ? n : void 0
        }
        var i = n(228),
            a = n(231);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            if (!o(e) || i(e) != s) return !1;
            var t = a(e);
            if (null === t) return !0;
            var n = f.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && l.call(n) == p
        }
        var i = n(17),
            a = n(96),
            o = n(8),
            s = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            l = u.toString,
            f = c.hasOwnProperty,
            p = l.call(Object);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (null == e) return !0;
            if (u(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || f(e) || o(e))) return !e.length;
            var t = a(e);
            if (t == p || t == d) return !e.size;
            if (l(e)) return !i(e).length;
            for (var n in e)
                if (m.call(e, n)) return !1;
            return !0
        }
        var i = n(118),
            a = n(92),
            o = n(37),
            s = n(2),
            u = n(13),
            c = n(39),
            l = n(41),
            f = n(52),
            p = "[object Map]",
            d = "[object Set]",
            h = Object.prototype,
            m = h.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "string" == typeof e || !a(e) && o(e) && i(e) == s
        }
        var i = n(17),
            a = n(2),
            o = n(8),
            s = "[object String]";
        e.exports = r
    }, function(e, t, n) {
        var r = n(5),
            i = r.Symbol;
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            return e === t || e !== e && t !== t
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return i(e) ? e : a(e, t) ? [e] : o(s(e))
        }
        var i = n(2),
            a = n(93),
            o = n(270),
            s = n(61);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if ("string" == typeof e || i(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -a ? "-0" : t
        }
        var i = n(47),
            a = 1 / 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = i(e),
                n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        var i = n(154);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, i = e.length, a = 0, o = []; ++n < i;) {
                var s = e[n];
                s !== t && s !== r || (e[n] = r, o[a++] = n)
            }
            return o
        }
        var r = "__lodash_placeholder__";
        e.exports = n
    }, function(e, t) {
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString;
        e.exports = function(e, t, i) {
            if ("[object Function]" !== r.call(t)) throw new TypeError("iterator must be a function");
            var a = e.length;
            if (a === +a)
                for (var o = 0; o < a; o++) t.call(i, e[o], o, e);
            else
                for (var s in e) n.call(e, s) && t.call(i, e[s], s, e)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawRefinementList = void 0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(4),
            f = (r(l), n(1)),
            p = r(f),
            d = n(3),
            h = r(d),
            m = n(0),
            v = n(16),
            g = r(v),
            y = n(413),
            b = r(y),
            _ = n(15),
            w = r(_),
            P = n(414),
            R = r(P),
            x = n(12),
            S = r(x),
            j = n(19),
            C = r(j),
            O = t.RawRefinementList = function(e) {
                function t(e) {
                    a(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.handleItemClick = n.handleItemClick.bind(n), n
                }
                return s(t, e), c(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        var n = t !== this.state,
                            r = !(0, w.default)(this.props.facetValues, e.facetValues);
                        return n || r
                    }
                }, {
                    key: "refine",
                    value: function(e, t) {
                        this.props.toggleRefinement(e, t)
                    }
                }, {
                    key: "_generateFacetItem",
                    value: function(e) {
                        var n = void 0;
                        e.data && e.data.length > 0 && (n = p.default.createElement(t, u({}, this.props, {
                            depth: this.props.depth + 1,
                            facetValues: e.data
                        })));
                        var r = this.props.createURL(e.value),
                            a = u({}, e, {
                                url: r,
                                cssClasses: this.props.cssClasses
                            }),
                            o = (0, h.default)(this.props.cssClasses.item, i({}, this.props.cssClasses.active, e.isRefined)),
                            s = e.value;
                        return void 0 !== e.isRefined && (s += "/" + e.isRefined), void 0 !== e.count && (s += "/" + e.count), p.default.createElement(b.default, {
                            facetValueToRefine: e.value,
                            handleClick: this.handleItemClick,
                            isRefined: e.isRefined,
                            itemClassName: o,
                            key: s,
                            subItems: n,
                            templateData: a,
                            templateKey: "item",
                            templateProps: this.props.templateProps
                        })
                    }
                }, {
                    key: "handleItemClick",
                    value: function(e) {
                        var t = e.facetValueToRefine,
                            n = e.originalEvent,
                            r = e.isRefined;
                        if (!(0, m.isSpecialClick)(n)) {
                            if ("INPUT" === n.target.tagName) return void this.refine(t, r);
                            for (var i = n.target; i !== n.currentTarget;) {
                                if ("LABEL" === i.tagName && (i.querySelector('input[type="checkbox"]') || i.querySelector('input[type="radio"]'))) return;
                                "A" === i.tagName && i.href && n.preventDefault(), i = i.parentNode
                            }
                            n.stopPropagation(), this.refine(t, r)
                        }
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.searchbox && !e.isFromSearch && this.searchbox.clearInput()
                    }
                }, {
                    key: "refineFirstValue",
                    value: function() {
                        var e = this.props.facetValues[0];
                        if (e) {
                            var t = e.value;
                            this.props.toggleRefinement(t)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = [this.props.cssClasses.list];
                        this.props.cssClasses.depth && t.push("" + this.props.cssClasses.depth + this.props.depth);
                        var n = !0 === this.props.showMore && this.props.canToggleShowMore ? p.default.createElement(g.default, u({
                                rootProps: {
                                    onClick: this.props.toggleShowMore
                                },
                                templateKey: "show-more-" + (this.props.isShowingMore ? "active" : "inactive")
                            }, this.props.templateProps)) : void 0,
                            r = !0 !== this.props.searchIsAlwaysActive && !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
                            i = this.props.searchFacetValues ? p.default.createElement(R.default, {
                                ref: function(t) {
                                    e.searchbox = t
                                },
                                placeholder: this.props.searchPlaceholder,
                                onChange: this.props.searchFacetValues,
                                onValidate: function() {
                                    return e.refineFirstValue()
                                },
                                disabled: r
                            }) : null,
                            a = this.props.searchFacetValues && this.props.isFromSearch && 0 === this.props.facetValues.length ? p.default.createElement(g.default, u({
                                templateKey: "noResults"
                            }, this.props.templateProps)) : null;
                        return p.default.createElement("div", {
                            className: (0, h.default)(t)
                        }, i, this.props.facetValues.map(this._generateFacetItem, this), a, n)
                    }
                }]), t
            }(f.Component);
        O.defaultProps = {
            cssClasses: {},
            depth: 0
        }, t.default = (0, S.default)((0, C.default)(O))
    }, function(e, t, n) {
        var r = n(216),
            i = n(8),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            u = r(function() {
                return arguments
            }()) ? r : function(e) {
                return i(e) && o.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = u
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        (function(e) {
            var r = n(5),
                i = n(219),
                a = "object" == typeof t && t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === a,
                u = s ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0,
                l = c || i;
            e.exports = l
        }).call(t, n(77)(e))
    }, function(e, t) {
        function n(e, t) {
            return !!(t = null == t ? r : t) && ("number" == typeof e || i.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        var r = 9007199254740991,
            i = /^(?:0|[1-9]\d*)$/;
        e.exports = n
    }, function(e, t) {
        function n(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || r)
        }
        var r = Object.prototype;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            return t === t ? o(e, t, n) : i(e, a, n)
        }
        var i = n(121),
            a = n(248),
            o = n(249);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(e, t, a)
        }
        var i = n(127),
            a = n(7);
        e.exports = r
    }, function(e, t, n) {
        var r = n(44),
            i = n(254),
            a = i(r);
        e.exports = a
    }, function(e, t, n) {
        function r(e, t) {
            return (s(e) ? i : a)(e, o(t, 3))
        }
        var i = n(128),
            a = n(255),
            o = n(9),
            s = n(2);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "symbol" == typeof e || a(e) && i(e) == o
        }
        var i = n(17),
            a = n(8),
            o = "[object Symbol]";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            "__proto__" == t && i ? i(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        var i = n(125);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return o(e) ? i(e, !0) : a(e)
        }
        var i = n(115),
            a = n(280),
            o = n(13);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return e.placeholder
        }
        e.exports = n
    }, function(e, t) {
        e.exports = function(e) {
            return JSON.parse(JSON.stringify(e))
        }
    }, function(e, t, n) {
        var r = n(220),
            i = n(79),
            a = n(221),
            o = a && a.isTypedArray,
            s = o ? i(o) : r;
        e.exports = s
    }, function(e, t, n) {
        var r = n(24),
            i = r(Object, "create");
        e.exports = i
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n(236),
            a = n(237),
            o = n(238),
            s = n(239),
            u = n(240);
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = e.length; n--;)
                if (i(e[n][0], t)) return n;
            return -1
        }
        var i = n(30);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = e.__data__;
            return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        var i = n(242);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__ = new i(e);
            this.size = t.size
        }
        var i = n(54),
            a = n(258),
            o = n(259),
            s = n(260),
            u = n(261),
            c = n(262);
        r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = u, r.prototype.set = c, e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e) {
                n[++t] = e
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = null == e ? void 0 : i(e, t);
            return void 0 === r ? n : r
        }
        var i = n(60);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            t = i(t, e);
            for (var n = 0, r = t.length; null != e && n < r;) e = e[a(t[n++])];
            return n && n == r ? e : void 0
        }
        var i = n(31),
            a = n(32);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return null == e ? "" : i(e)
        }
        var i = n(94);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = e[t];
            s.call(e, t) && a(r, n) && (void 0 !== n || t in e) || i(e, t, n)
        }
        var i = n(48),
            a = n(30),
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(6),
            i = Object.create,
            a = function() {
                function e() {}
                return function(t) {
                    if (!r(t)) return {};
                    if (i) return i(t);
                    e.prototype = t;
                    var n = new e;
                    return e.prototype = void 0, n
                }
            }();
        e.exports = a
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var s = null == n ? 0 : a(n);
            return s < 0 && (s = o(r + s, 0)), i(e, t, s)
        }
        var i = n(42),
            a = n(33),
            o = Math.max;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return void 0 === e
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(43),
            i = n(307),
            a = n(22),
            o = n(308),
            s = a(function(e) {
                return e.push(void 0, o), r(i, void 0, e)
            });
        e.exports = s
    }, function(e, t, n) {
        function r(e) {
            return i(function(t, n) {
                var r = -1,
                    i = n.length,
                    o = i > 1 ? n[i - 1] : void 0,
                    s = i > 2 ? n[2] : void 0;
                for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && a(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
                    var u = n[r];
                    u && e(t, u, r, o)
                }
                return t
            })
        }
        var i = n(22),
            a = n(99);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, P, R, x, S) {
            var j = t & v;
            if (!j && "function" != typeof e) throw new TypeError(h);
            var C = r ? r.length : 0;
            if (C || (t &= ~(b | _), r = P = void 0), x = void 0 === x ? x : w(d(x), 0), S = void 0 === S ? S : d(S), C -= P ? P.length : 0, t & _) {
                var O = r,
                    E = P;
                r = P = void 0
            }
            var F = j ? void 0 : c(e),
                N = [e, t, n, r, P, O, E, R, x, S];
            if (F && l(N, F), e = N[0], t = N[1], n = N[2], r = N[3], P = N[4], S = N[9] = void 0 === N[9] ? j ? 0 : e.length : w(N[9] - C, 0), !S && t & (g | y) && (t &= ~(g | y)), t && t != m) k = t == g || t == y ? o(e, t, S) : t != b && t != (m | b) || P.length ? s.apply(void 0, N) : u(e, t, n, r);
            else var k = a(e, t, n);
            return p((F ? i : f)(k, N), e, t)
        }
        var i = n(161),
            a = n(324),
            o = n(325),
            s = n(163),
            u = n(336),
            c = n(167),
            l = n(337),
            f = n(170),
            p = n(171),
            d = n(33),
            h = "Expected a function",
            m = 1,
            v = 2,
            g = 8,
            y = 16,
            b = 32,
            _ = 64,
            w = Math.max;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var n = i(e.prototype),
                    r = e.apply(n, t);
                return a(r) ? r : n
            }
        }
        var i = n(64),
            a = n(6);
        e.exports = r
    }, function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function a(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function o() {
            m && d && (m = !1, d.length ? h = d.concat(h) : v = -1, h.length && s())
        }

        function s() {
            if (!m) {
                var e = i(o);
                m = !0;
                for (var t = h.length; t;) {
                    for (d = h, h = []; ++v < t;) d && d[v].run();
                    v = -1, t = h.length
                }
                d = null, m = !1, a(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var l, f, p = e.exports = {};
        ! function() {
            try {
                l = "function" === typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" === typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var d, h = [],
            m = !1,
            v = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new u(e, t)), 1 !== h.length || m || i(s)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function(e) {
            return []
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function() {
            return "/"
        }, p.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var r = n(35),
                i = this;
            "function" === typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : i.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = e || "Unknown error", t && r(t, function(e, t) {
                i[t] = e
            })
        }

        function i(e, t) {
            function n() {
                var n = Array.prototype.slice.call(arguments, 0);
                "string" !== typeof n[0] && n.unshift(t), r.apply(this, n), this.name = "AlgoliaSearch" + e + "Error"
            }
            return a(n, r), n
        }
        var a = n(180);
        a(r, Error), e.exports = {
            AlgoliaSearchError: r,
            UnparsableJSON: i("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
            RequestTimeout: i("RequestTimeout", "Request timedout before getting a response"),
            Network: i("Network", "Network issue, see err.more for details"),
            JSONPScriptFail: i("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
            JSONPScriptError: i("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
            Unknown: i("Unknown", "Unknown error occured")
        }
    }, function(e, t, n) {
        (function(r) {
            function i() {
                return !("undefined" === typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function a(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var i = 0,
                        a = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (i++, "%c" === e && (a = i))
                    }), e.splice(a, 0, r)
                }
            }

            function o() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function s(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }

            function u() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" !== typeof r && "env" in r && (e = Object({
                    NODE_ENV: "production"
                }).DEBUG), e
            }
            t = e.exports = n(369), t.log = o, t.formatArgs = a, t.save = s, t.load = u, t.useColors = i, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(u())
        }).call(t, n(71))
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return (0, p.checkRendering)(e, d),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName,
                        a = n.min,
                        u = n.max,
                        l = n.precision,
                        p = void 0 === l ? 2 : l;
                    if (!r) throw new Error(d);
                    var h = (0, f.default)(a),
                        m = (0, f.default)(u),
                        v = function(e) {
                            return Number(Number(e).toFixed(p))
                        },
                        g = {
                            from: function(e) {
                                return e
                            },
                            to: function(e) {
                                return v(e).toLocaleString()
                            }
                        };
                    return {
                        _getCurrentRange: function(e) {
                            var t = Math.pow(10, p),
                                n = void 0;
                            n = h ? a : (0, f.default)(e.min) ? e.min : 0;
                            var r = void 0;
                            return r = m ? u : (0, f.default)(e.max) ? e.max : 0, {
                                min: Math.floor(n * t) / t,
                                max: Math.ceil(r * t) / t
                            }
                        },
                        _getCurrentRefinement: function(e) {
                            var t = e.getNumericRefinement(r, ">=") || [],
                                n = s(t, 1),
                                i = n[0],
                                a = e.getNumericRefinement(r, "<=") || [],
                                o = s(a, 1),
                                u = o[0];
                            return [(0, f.default)(i) ? i : -1 / 0, (0, f.default)(u) ? u : 1 / 0]
                        },
                        _refine: function(e, t) {
                            return function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    i = s(n, 2),
                                    o = i[0],
                                    c = i[1],
                                    l = t.min,
                                    p = t.max,
                                    d = e.getNumericRefinement(r, ">=") || [],
                                    g = s(d, 1),
                                    y = g[0],
                                    b = e.getNumericRefinement(r, "<=") || [],
                                    _ = s(b, 1),
                                    w = _[0],
                                    P = void 0 === o || "" === o,
                                    R = void 0 === c || "" === c,
                                    x = P ? void 0 : parseFloat(o),
                                    S = R ? void 0 : parseFloat(c),
                                    j = void 0;
                                j = h || l !== x ? h && P ? a : x : void 0;
                                var C = void 0;
                                C = m || p !== S ? m && R ? u : S : void 0;
                                var O = void 0 === j,
                                    E = (0, f.default)(j),
                                    F = (0, f.default)(l),
                                    N = F && l <= j,
                                    k = O || E && (!F || N),
                                    T = void 0 === C,
                                    M = (0, f.default)(C),
                                    A = (0, f.default)(p),
                                    L = A && p >= C,
                                    H = T || M && (!A || L),
                                    I = y !== j,
                                    U = w !== C;
                                (I || U) && k && H && (e.clearRefinements(r), E && e.addNumericRefinement(r, ">=", v(j)), M && e.addNumericRefinement(r, "<=", v(C)), e.search())
                            }
                        },
                        getConfiguration: function(e) {
                            var t = {
                                    disjunctiveFacets: [r]
                                },
                                n = h || m,
                                o = e && e.numericRefinements && void 0 !== e.numericRefinements[r],
                                s = (0, f.default)(a),
                                c = (0, f.default)(u),
                                l = s && c ? a < u : s || c;
                            return n && !o && l && (t.numericRefinements = i({}, r, {}), h && (t.numericRefinements[r][">="] = [a]), m && (t.numericRefinements[r]["<="] = [u])), t
                        },
                        init: function(t) {
                            var r = t.helper,
                                i = t.instantSearchInstance,
                                a = {},
                                s = this._getCurrentRange(a),
                                u = this._getCurrentRefinement(r);
                            e({
                                refine: this._refine(r, {}),
                                format: g,
                                range: s,
                                widgetParams: o({}, n, {
                                    precision: p
                                }),
                                start: u,
                                instantSearchInstance: i
                            }, !0)
                        },
                        render: function(t) {
                            var i = t.results,
                                a = t.helper,
                                s = t.instantSearchInstance,
                                u = i.disjunctiveFacets || [],
                                l = (0, c.default)(u, {
                                    name: r
                                }),
                                f = l && l.stats || {},
                                d = this._getCurrentRange(f),
                                h = this._getCurrentRefinement(a);
                            e({
                                refine: this._refine(a, d),
                                format: g,
                                range: d,
                                widgetParams: o({}, n, {
                                    precision: p
                                }),
                                start: h,
                                instantSearchInstance: s
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.removeNumericRefinement(r).removeDisjunctiveFacet(r)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = a;
        var u = n(11),
            c = r(u),
            l = n(397),
            f = r(l),
            p = n(0),
            d = "Usage:\nvar customRange = connectRange(function render(params, isFirstRendering) {\n  // params = {\n  //   refine,\n  //   range,\n  //   start,\n  //   format,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customRange({\n    attributeName,\n    [ min ],\n    [ max ],\n    [ precision = 2 ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectRange.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return new i(e, t, n)
        }
        var i = n(215),
            a = n(76),
            o = n(159);
        r.version = n(179), r.AlgoliaSearchHelper = i, r.SearchParameters = a, r.SearchResults = o, r.url = n(106), e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return w(e, function(e) {
                return g(e, t)
            })
        }

        function i(e) {
            var t = e ? i._parseNumbers(e) : {};
            this.index = t.index || "", this.query = t.query || "", this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {}, this.numericFilters = t.numericFilters, this.tagFilters = t.tagFilters, this.optionalTagFilters = t.optionalTagFilters, this.optionalFacetFilters = t.optionalFacetFilters, this.hitsPerPage = t.hitsPerPage, this.maxValuesPerFacet = t.maxValuesPerFacet, this.page = t.page || 0, this.queryType = t.queryType, this.typoTolerance = t.typoTolerance, this.minWordSizefor1Typo = t.minWordSizefor1Typo, this.minWordSizefor2Typos = t.minWordSizefor2Typos, this.minProximity = t.minProximity, this.allowTyposOnNumericTokens = t.allowTyposOnNumericTokens, this.ignorePlurals = t.ignorePlurals, this.restrictSearchableAttributes = t.restrictSearchableAttributes, this.advancedSyntax = t.advancedSyntax, this.analytics = t.analytics, this.analyticsTags = t.analyticsTags, this.synonyms = t.synonyms, this.replaceSynonymsInHighlight = t.replaceSynonymsInHighlight, this.optionalWords = t.optionalWords, this.removeWordsIfNoResults = t.removeWordsIfNoResults, this.attributesToRetrieve = t.attributesToRetrieve, this.attributesToHighlight = t.attributesToHighlight, this.highlightPreTag = t.highlightPreTag, this.highlightPostTag = t.highlightPostTag, this.attributesToSnippet = t.attributesToSnippet, this.getRankingInfo = t.getRankingInfo, this.distinct = t.distinct, this.aroundLatLng = t.aroundLatLng, this.aroundLatLngViaIP = t.aroundLatLngViaIP, this.aroundRadius = t.aroundRadius, this.minimumAroundRadius = t.minimumAroundRadius, this.aroundPrecision = t.aroundPrecision, this.insideBoundingBox = t.insideBoundingBox, this.insidePolygon = t.insidePolygon, this.snippetEllipsisText = t.snippetEllipsisText, this.disableExactOnAttributes = t.disableExactOnAttributes, this.enableExactOnSingleWordQuery = t.enableExactOnSingleWordQuery, this.offset = t.offset, this.length = t.length;
            var n = this;
            s(t, function(e, t) {
                -1 === i.PARAMETERS.indexOf(t) && (n[t] = e)
            })
        }
        var a = n(7),
            o = n(223),
            s = n(252),
            u = n(14),
            c = n(46),
            l = n(10),
            f = n(18),
            p = n(143),
            d = n(65),
            h = n(298),
            m = n(2),
            v = n(27),
            g = n(15),
            y = n(66),
            b = n(28),
            _ = n(20),
            w = n(11),
            P = n(157),
            R = n(67),
            x = n(100),
            S = n(311),
            j = n(312),
            C = n(313);
        i.PARAMETERS = a(new i), i._parseNumbers = function(e) {
            if (e instanceof i) return e;
            var t = {};
            if (u(["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"], function(n) {
                    var r = e[n];
                    if (b(r)) {
                        var i = parseFloat(r);
                        t[n] = h(i) ? r : i
                    }
                }), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map(function(e) {
                    return e.map(function(e) {
                        return parseFloat(e)
                    })
                })), e.numericRefinements) {
                var n = {};
                u(e.numericRefinements, function(e, t) {
                    n[t] = {}, u(e, function(e, r) {
                        var i = l(e, function(e) {
                            return m(e) ? l(e, function(e) {
                                return b(e) ? parseFloat(e) : e
                            }) : b(e) ? parseFloat(e) : e
                        });
                        n[t][r] = i
                    })
                }), t.numericRefinements = n
            }
            return x({}, e, t)
        }, i.make = function(e) {
            var t = new i(e);
            return u(e.hierarchicalFacets, function(e) {
                if (e.rootPath) {
                    var n = t.getHierarchicalRefinement(e.name);
                    n.length > 0 && 0 !== n[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), n = t.getHierarchicalRefinement(e.name), 0 === n.length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                }
            }), t
        }, i.validate = function(e, t) {
            var n = t || {};
            return e.tagFilters && n.tagRefinements && n.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && n.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && !v(n.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : !v(e.numericRefinements) && n.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
        }, i.prototype = {
            constructor: i,
            clearRefinements: function(e) {
                var t = C.clearRefinement,
                    n = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: t(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: t(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: t(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: t(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                return n.numericRefinements === this.numericRefinements && n.facetsRefinements === this.facetsRefinements && n.facetsExcludes === this.facetsExcludes && n.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && n.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(n)
            },
            clearTags: function() {
                return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                    tagFilters: void 0,
                    tagRefinements: []
                })
            },
            setIndex: function(e) {
                return e === this.index ? this : this.setQueryParameters({
                    index: e
                })
            },
            setQuery: function(e) {
                return e === this.query ? this : this.setQueryParameters({
                    query: e
                })
            },
            setPage: function(e) {
                return e === this.page ? this : this.setQueryParameters({
                    page: e
                })
            },
            setFacets: function(e) {
                return this.setQueryParameters({
                    facets: e
                })
            },
            setDisjunctiveFacets: function(e) {
                return this.setQueryParameters({
                    disjunctiveFacets: e
                })
            },
            setHitsPerPage: function(e) {
                return this.hitsPerPage === e ? this : this.setQueryParameters({
                    hitsPerPage: e
                })
            },
            setTypoTolerance: function(e) {
                return this.typoTolerance === e ? this : this.setQueryParameters({
                    typoTolerance: e
                })
            },
            addNumericRefinement: function(e, t, n) {
                var r = S(n);
                if (this.isNumericRefined(e, t, r)) return this;
                var i = x({}, this.numericRefinements);
                return i[e] = x({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(r)) : i[e][t] = [r], this.setQueryParameters({
                    numericRefinements: i
                })
            },
            getConjunctiveRefinements: function(e) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.facetsRefinements[e] || []
            },
            getDisjunctiveRefinements: function(e) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return this.disjunctiveFacetsRefinements[e] || []
            },
            getHierarchicalRefinement: function(e) {
                return this.hierarchicalFacetsRefinements[e] || []
            },
            getExcludeRefinements: function(e) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.facetsExcludes[e] || []
            },
            removeNumericRefinement: function(e, t, n) {
                if (void 0 !== n) {
                    var r = S(n);
                    return this.isNumericRefined(e, t, r) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements(function(n, i) {
                            return i === e && n.op === t && g(n.val, r)
                        })
                    }) : this
                }
                return void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                    numericRefinements: this._clearNumericRefinements(function(n, r) {
                        return r === e && n.op === t
                    })
                }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                    numericRefinements: this._clearNumericRefinements(function(t, n) {
                        return n === e
                    })
                }) : this
            },
            getNumericRefinements: function(e) {
                return this.numericRefinements[e] || {}
            },
            getNumericRefinement: function(e, t) {
                return this.numericRefinements[e] && this.numericRefinements[e][t]
            },
            _clearNumericRefinements: function(e) {
                if (y(e)) return v(this.numericRefinements) ? this.numericRefinements : {};
                if (b(e)) return v(this.numericRefinements[e]) ? this.numericRefinements : p(this.numericRefinements, e);
                if (_(e)) {
                    var t = !1,
                        n = f(this.numericRefinements, function(n, r, i) {
                            var a = {};
                            return u(r, function(n, r) {
                                var o = [];
                                u(n, function(t) {
                                    e({
                                        val: t,
                                        op: r
                                    }, i, "numeric") || o.push(t)
                                }), v(o) ? t = !0 : (o.length !== n.length && (t = !0), a[r] = o)
                            }), v(a) || (n[i] = a), n
                        }, {});
                    return t ? n : this.numericRefinements
                }
            },
            addFacet: function(e) {
                return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                    facets: this.facets.concat([e])
                })
            },
            addDisjunctiveFacet: function(e) {
                return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                    disjunctiveFacets: this.disjunctiveFacets.concat([e])
                })
            },
            addHierarchicalFacet: function(e) {
                if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                return this.setQueryParameters({
                    hierarchicalFacets: this.hierarchicalFacets.concat([e])
                })
            },
            addFacetRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                    facetsRefinements: C.addRefinement(this.facetsRefinements, e, t)
                })
            },
            addExcludeRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                    facetsExcludes: C.addRefinement(this.facetsExcludes, e, t)
                })
            },
            addDisjunctiveFacetRefinement: function(e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                })
            },
            addTagRefinement: function(e) {
                if (this.isTagRefined(e)) return this;
                var t = {
                    tagRefinements: this.tagRefinements.concat(e)
                };
                return this.setQueryParameters(t)
            },
            removeFacet: function(e) {
                return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    facets: c(this.facets, function(t) {
                        return t !== e
                    })
                }) : this
            },
            removeDisjunctiveFacet: function(e) {
                return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    disjunctiveFacets: c(this.disjunctiveFacets, function(t) {
                        return t !== e
                    })
                }) : this
            },
            removeHierarchicalFacet: function(e) {
                return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                    hierarchicalFacets: c(this.hierarchicalFacets, function(t) {
                        return t.name !== e
                    })
                }) : this
            },
            removeFacetRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                    facetsRefinements: C.removeRefinement(this.facetsRefinements, e, t)
                }) : this
            },
            removeExcludeRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                    facetsExcludes: C.removeRefinement(this.facetsExcludes, e, t)
                }) : this
            },
            removeDisjunctiveFacetRefinement: function(e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                }) : this
            },
            removeTagRefinement: function(e) {
                if (!this.isTagRefined(e)) return this;
                var t = {
                    tagRefinements: c(this.tagRefinements, function(t) {
                        return t !== e
                    })
                };
                return this.setQueryParameters(t)
            },
            toggleRefinement: function(e, t) {
                return this.toggleFacetRefinement(e, t)
            },
            toggleFacetRefinement: function(e, t) {
                if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
            },
            toggleConjunctiveFacetRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.setQueryParameters({
                    facetsRefinements: C.toggleRefinement(this.facetsRefinements, e, t)
                })
            },
            toggleExcludeFacetRefinement: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return this.setQueryParameters({
                    facetsExcludes: C.toggleRefinement(this.facetsExcludes, e, t)
                })
            },
            toggleDisjunctiveFacetRefinement: function(e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return this.setQueryParameters({
                    disjunctiveFacetsRefinements: C.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                })
            },
            toggleHierarchicalFacetRefinement: function(e, t) {
                if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                    r = {};
                return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? r[e] = [] : r[e] = [t.slice(0, t.lastIndexOf(n))] : r[e] = [t], this.setQueryParameters({
                    hierarchicalFacetsRefinements: R({}, r, this.hierarchicalFacetsRefinements)
                })
            },
            addHierarchicalFacetRefinement: function(e, t) {
                if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
                var n = {};
                return n[e] = [t], this.setQueryParameters({
                    hierarchicalFacetsRefinements: R({}, n, this.hierarchicalFacetsRefinements)
                })
            },
            removeHierarchicalFacetRefinement: function(e) {
                if (!this.isHierarchicalFacetRefined(e)) throw new Error(e + " is not refined.");
                var t = {};
                return t[e] = [], this.setQueryParameters({
                    hierarchicalFacetsRefinements: R({}, t, this.hierarchicalFacetsRefinements)
                })
            },
            toggleTagRefinement: function(e) {
                return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
            },
            isDisjunctiveFacet: function(e) {
                return d(this.disjunctiveFacets, e) > -1
            },
            isHierarchicalFacet: function(e) {
                return void 0 !== this.getHierarchicalFacetByName(e)
            },
            isConjunctiveFacet: function(e) {
                return d(this.facets, e) > -1
            },
            isFacetRefined: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsRefinements, e, t)
            },
            isExcludeRefined: function(e, t) {
                if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                return C.isRefined(this.facetsExcludes, e, t)
            },
            isDisjunctiveFacetRefined: function(e, t) {
                if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                return C.isRefined(this.disjunctiveFacetsRefinements, e, t)
            },
            isHierarchicalFacetRefined: function(e, t) {
                if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                var n = this.getHierarchicalRefinement(e);
                return t ? -1 !== d(n, t) : n.length > 0
            },
            isNumericRefined: function(e, t, n) {
                if (y(n) && y(t)) return !!this.numericRefinements[e];
                var i = this.numericRefinements[e] && !y(this.numericRefinements[e][t]);
                if (y(n) || !i) return i;
                var a = S(n),
                    o = !y(r(this.numericRefinements[e][t], a));
                return i && o
            },
            isTagRefined: function(e) {
                return -1 !== d(this.tagRefinements, e)
            },
            getRefinedDisjunctiveFacets: function() {
                var e = o(a(this.numericRefinements), this.disjunctiveFacets);
                return a(this.disjunctiveFacetsRefinements).concat(e).concat(this.getRefinedHierarchicalFacets())
            },
            getRefinedHierarchicalFacets: function() {
                return o(l(this.hierarchicalFacets, "name"), a(this.hierarchicalFacetsRefinements))
            },
            getUnrefinedDisjunctiveFacets: function() {
                var e = this.getRefinedDisjunctiveFacets();
                return c(this.disjunctiveFacets, function(t) {
                    return -1 === d(e, t)
                })
            },
            managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements"],
            getQueryParams: function() {
                var e = this.managedParameters,
                    t = {};
                return s(this, function(n, r) {
                    -1 === d(e, r) && void 0 !== n && (t[r] = n)
                }), t
            },
            getQueryParameter: function(e) {
                if (!this.hasOwnProperty(e)) throw new Error("Parameter '" + e + "' is not an attribute of SearchParameters (http://algolia.github.io/algoliasearch-helper-js/docs/SearchParameters.html)");
                return this[e]
            },
            setQueryParameter: function(e, t) {
                if (this[e] === t) return this;
                var n = {};
                return n[e] = t, this.setQueryParameters(n)
            },
            setQueryParameters: function(e) {
                if (!e) return this;
                var t = i.validate(this, e);
                if (t) throw t;
                var n = i._parseNumbers(e);
                return this.mutateMe(function(t) {
                    var r = a(e);
                    return u(r, function(e) {
                        t[e] = n[e]
                    }), t
                })
            },
            filter: function(e) {
                return j(this, e)
            },
            mutateMe: function(e) {
                var t = new this.constructor(this);
                return e(t, this), t
            },
            _getHierarchicalFacetSortBy: function(e) {
                return e.sortBy || ["isRefined:desc", "name:asc"]
            },
            _getHierarchicalFacetSeparator: function(e) {
                return e.separator || " > "
            },
            _getHierarchicalRootPath: function(e) {
                return e.rootPath || null
            },
            _getHierarchicalShowParentLevel: function(e) {
                return "boolean" !== typeof e.showParentLevel || e.showParentLevel
            },
            getHierarchicalFacetByName: function(e) {
                return w(this.hierarchicalFacets, {
                    name: e
                })
            },
            getHierarchicalFacetBreadcrumb: function(e) {
                if (!this.isHierarchicalFacet(e)) throw new Error("Cannot get the breadcrumb of an unknown hierarchical facet: `" + e + "`");
                var t = this.getHierarchicalRefinement(e)[0];
                if (!t) return [];
                var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                    r = t.split(n);
                return l(r, P)
            },
            toString: function() {
                return JSON.stringify(this, null, 2)
            }
        }, e.exports = i
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t) {
        function n(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
        }
        var r = 9007199254740991;
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return e(t)
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new i; ++t < n;) this.add(e[t])
        }
        var i = n(81),
            a = n(246),
            o = n(247);
        r.prototype.add = r.prototype.push = a, r.prototype.has = o, e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n(225),
            a = n(241),
            o = n(243),
            s = n(244),
            u = n(245);
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function(e, t, n) {
        var r = n(24),
            i = n(5),
            a = r(i, "Map");
        e.exports = a
    }, function(e, t, n) {
        function r(e, t) {
            return !!(null == e ? 0 : e.length) && i(e, t, 0) > -1
        }
        var i = n(42);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e.has(t)
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(250),
            i = n(126),
            a = i(r);
        e.exports = a
    }, function(e, t, n) {
        function r(e) {
            return a(e) && i(e)
        }
        var i = n(13),
            a = n(8);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : i
        }
        var i = n(25);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, o, s) {
            return e === t || (null == e || null == t || !a(e) && !a(t) ? e !== e && t !== t : i(e, t, n, o, r, s))
        }
        var i = n(263),
            a = n(8);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(128),
            i = n(135),
            a = Object.prototype,
            o = a.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            u = s ? function(e) {
                return null == e ? [] : (e = Object(e), r(s(e), function(t) {
                    return o.call(e, t)
                }))
            } : i;
        e.exports = u
    }, function(e, t, n) {
        var r = n(266),
            i = n(82),
            a = n(267),
            o = n(136),
            s = n(137),
            u = n(17),
            c = n(120),
            l = c(r),
            f = c(i),
            p = c(a),
            d = c(o),
            h = c(s),
            m = u;
        (r && "[object DataView]" != m(new r(new ArrayBuffer(1))) || i && "[object Map]" != m(new i) || a && "[object Promise]" != m(a.resolve()) || o && "[object Set]" != m(new o) || s && "[object WeakMap]" != m(new s)) && (m = function(e) {
            var t = u(e),
                n = "[object Object]" == t ? e.constructor : void 0,
                r = n ? c(n) : "";
            if (r) switch (r) {
                case l:
                    return "[object DataView]";
                case f:
                    return "[object Map]";
                case p:
                    return "[object Promise]";
                case d:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = m
    }, function(e, t, n) {
        function r(e, t) {
            if (i(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (s.test(e) || !o.test(e) || null != t && e in Object(t))
        }
        var i = n(2),
            a = n(47),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            s = /^\w*$/;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return a(e, r) + "";
            if (s(e)) return l ? l.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -u ? "-0" : t
        }
        var i = n(29),
            a = n(21),
            o = n(2),
            s = n(47),
            u = 1 / 0,
            c = i ? i.prototype : void 0,
            l = c ? c.toString : void 0;
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r) {
            var i = -1,
                a = null == e ? 0 : e.length;
            for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
            return n
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(119),
            i = r(Object.getPrototypeOf, Object);
        e.exports = i
    }, function(e, t, n) {
        function r(e) {
            return i(e, o, a)
        }
        var i = n(134),
            a = n(146),
            o = n(49);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = new e.constructor(e.byteLength);
            return new i(t).set(new i(e)), t
        }
        var i = n(131);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            if (!s(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? a(n) && o(t, n.length) : "string" == r && t in n) && i(n[t], e)
        }
        var i = n(30),
            a = n(13),
            o = n(40),
            s = n(6);
        e.exports = r
    }, function(e, t, n) {
        var r = n(101),
            i = n(68),
            a = i(function(e, t, n) {
                r(e, t, n)
            });
        e.exports = a
    }, function(e, t, n) {
        function r(e, t, n, l, f) {
            e !== t && o(t, function(o, c) {
                if (u(o)) f || (f = new i), s(e, t, c, n, r, l, f);
                else {
                    var p = l ? l(e[c], o, c + "", e, t, f) : void 0;
                    void 0 === p && (p = o), a(e, c, p)
                }
            }, c)
        }
        var i = n(57),
            a = n(158),
            o = n(127),
            s = n(309),
            u = n(6),
            c = n(49);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            e = a(e) ? e : u(e), n = n && !r ? s(n) : 0;
            var l = e.length;
            return n < 0 && (n = c(l + n, 0)), o(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && i(e, t, n) > -1
        }
        var i = n(42),
            a = n(13),
            o = n(28),
            s = n(33),
            u = n(317),
            c = Math.max;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
        }
        var i = n(64),
            a = n(104),
            o = 4294967295;
        r.prototype = i(a.prototype), r.prototype.constructor = r, e.exports = r
    }, function(e, t) {
        function n() {}
        e.exports = n
    }, function(e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(e) {
            return "function" === typeof e
        }

        function i(e) {
            return "number" === typeof e
        }

        function a(e) {
            return "object" === typeof e && null !== e
        }

        function o(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
            if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function(e) {
            var t, n, i, s, u, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw l.context = t, l
            }
            if (n = this._events[e], o(n)) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (a(n))
                for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), i = c.length, u = 0; u < i; u++) c[u].apply(this, s);
            return !0
        }, n.prototype.addListener = function(e, t) {
            var i;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (i = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" === typeof console.trace && console.trace()), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
            }
            if (!r(t)) throw TypeError("listener must be a function");
            var i = !1;
            return n.listener = t, this.on(e, n), this
        }, n.prototype.removeListener = function(e, t) {
            var n, i, o, s;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (n = this._events[e], o = n.length, i = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (a(n)) {
                for (s = o; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        i = s;
                        break
                    }
                if (i < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[e], r(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function(e) {
            return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return m(e) ? d(e, r) : v(e) ? f(e, r) : h(e) ? b(e) : e
        }

        function i(e, t, n, r) {
            if (null !== e && (n = n.replace(e, ""), r = r.replace(e, "")), n = t[n] || n, r = t[r] || r, -1 !== w.indexOf(n) || -1 !== w.indexOf(r)) {
                if ("q" === n) return -1;
                if ("q" === r) return 1;
                var i = -1 !== _.indexOf(n),
                    a = -1 !== _.indexOf(r);
                if (i && !a) return 1;
                if (a && !i) return -1
            }
            return n.localeCompare(r)
        }
        var a = n(348),
            o = n(76),
            s = n(351),
            u = n(354),
            c = n(14),
            l = n(355),
            f = n(10),
            p = n(177),
            d = n(178),
            h = n(28),
            m = n(26),
            v = n(2),
            g = n(27),
            y = n(175),
            b = n(107).encode,
            _ = ["dFR", "fR", "nR", "hFR", "tR"],
            w = a.ENCODED_PARAMETERS;
        t.getStateFromQueryString = function(e, t) {
            var n = t && t.prefix || "",
                r = t && t.mapping || {},
                i = y(r),
                u = s.parse(e),
                c = new RegExp("^" + n),
                f = p(u, function(e, t) {
                    var r = n && c.test(t),
                        o = r ? t.replace(c, "") : t;
                    return a.decode(i[o] || o) || o
                }),
                d = o._parseNumbers(f);
            return l(d, o.PARAMETERS)
        }, t.getUnrecognizedParametersInQueryString = function(e, t) {
            var n = t && t.prefix,
                r = t && t.mapping || {},
                i = y(r),
                o = {},
                u = s.parse(e);
            if (n) {
                var l = new RegExp("^" + n);
                c(u, function(e, t) {
                    l.test(t) || (o[t] = e)
                })
            } else c(u, function(e, t) {
                a.decode(i[t] || t) || (o[t] = e)
            });
            return o
        }, t.getQueryStringFromState = function(e, t) {
            var n = t && t.moreAttributes,
                o = t && t.prefix || "",
                c = t && t.mapping || {},
                l = t && t.safe || !1,
                f = y(c),
                d = l ? e : r(e),
                h = p(d, function(e, t) {
                    var n = a.encode(t);
                    return o + (c[n] || n)
                }),
                m = "" === o ? null : new RegExp("^" + o),
                v = u(i, null, m, f);
            if (!g(n)) {
                var b = s.stringify(h, {
                        encode: l,
                        sort: v
                    }),
                    _ = s.stringify(n, {
                        encode: l
                    });
                return b ? b + "&" + _ : _
            }
            return s.stringify(h, {
                encode: l,
                sort: v
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            i = function() {
                for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }(),
            a = function(e) {
                for (var t; e.length;) {
                    var n = e.pop();
                    if (t = n.obj[n.prop], Array.isArray(t)) {
                        for (var r = [], i = 0; i < t.length; ++i) "undefined" !== typeof t[i] && r.push(t[i]);
                        n.obj[n.prop] = r
                    }
                }
                return t
            };
        t.arrayToObject = function(e, t) {
            for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) "undefined" !== typeof e[r] && (n[r] = e[r]);
            return n
        }, t.merge = function(e, n, i) {
            if (!n) return e;
            if ("object" !== typeof n) {
                if (Array.isArray(e)) e.push(n);
                else {
                    if ("object" !== typeof e) return [e, n];
                    (i.plainObjects || i.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0)
                }
                return e
            }
            if ("object" !== typeof e) return [e].concat(n);
            var a = e;
            return Array.isArray(e) && !Array.isArray(n) && (a = t.arrayToObject(e, i)), Array.isArray(e) && Array.isArray(n) ? (n.forEach(function(n, a) {
                r.call(e, a) ? e[a] && "object" === typeof e[a] ? e[a] = t.merge(e[a], n, i) : e.push(n) : e[a] = n
            }), e) : Object.keys(n).reduce(function(e, a) {
                var o = n[a];
                return r.call(e, a) ? e[a] = t.merge(e[a], o, i) : e[a] = o, e
            }, a)
        }, t.assign = function(e, t) {
            return Object.keys(t).reduce(function(e, n) {
                return e[n] = t[n], e
            }, e)
        }, t.decode = function(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (t) {
                return e
            }
        }, t.encode = function(e) {
            if (0 === e.length) return e;
            for (var t = "string" === typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
                var a = t.charCodeAt(r);
                45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? n += t.charAt(r) : a < 128 ? n += i[a] : a < 2048 ? n += i[192 | a >> 6] + i[128 | 63 & a] : a < 55296 || a >= 57344 ? n += i[224 | a >> 12] + i[128 | a >> 6 & 63] + i[128 | 63 & a] : (r += 1, a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(r)), n += i[240 | a >> 18] + i[128 | a >> 12 & 63] + i[128 | a >> 6 & 63] + i[128 | 63 & a])
            }
            return n
        }, t.compact = function(e) {
            for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], r = 0; r < t.length; ++r)
                for (var i = t[r], o = i.obj[i.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
                    var c = s[u],
                        l = o[c];
                    "object" === typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                        obj: o,
                        prop: c
                    }), n.push(l))
                }
            return a(t)
        }, t.isRegExp = function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }, t.isBuffer = function(e) {
            return null !== e && "undefined" !== typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        var r = n(35);
        e.exports = function(e, t) {
            var n = [];
            return r(e, function(r, i) {
                n.push(t(r, i, e))
            }), n
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            return (0, d.default)(e).replace(new RegExp(y.highlightPreTag, "g"), "<em>").replace(new RegExp(y.highlightPostTag, "g"), "</em>")
        }

        function o(e) {
            return (0, g.default)(e) && "string" !== typeof e.value ? (0, f.default)(e, function(e, t, n) {
                return c({}, e, i({}, n, o(t)))
            }, {}) : (0, m.default)(e) ? e.map(o) : c({}, e, {
                value: a(e.value)
            })
        }

        function s(e) {
            return void 0 === e.__escaped && (e = e.map(function(e) {
                return e._highlightResult && (e._highlightResult = o(e._highlightResult)), e._snippetResult && (e._snippetResult = o(e._snippetResult)), e
            }), e.__escaped = !0), e
        }

        function u(e) {
            return e.map(function(e) {
                return c({}, e, {
                    highlighted: a(e.highlighted)
                })
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tagConfig = void 0;
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = s, t.escapeFacets = u;
        var l = n(18),
            f = r(l),
            p = n(390),
            d = r(p),
            h = n(2),
            m = r(h),
            v = n(26),
            g = r(v),
            y = t.tagConfig = {
                highlightPreTag: "__ais-highlight__",
                highlightPostTag: "__/ais-highlight__"
            }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function i(e, t) {
            return (0, s.checkRendering)(e, u),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.attributeName,
                        s = n.limit,
                        c = void 0 === s ? 10 : s,
                        l = n.sortBy,
                        f = void 0 === l ? ["name:asc"] : l,
                        p = n.showMoreLimit;
                    if (!i || !isNaN(p) && p < c) throw new Error(u);
                    return {
                        isShowingMore: !1,
                        toggleShowMore: function() {},
                        cachedToggleShowMore: function() {
                            this.toggleShowMore()
                        },
                        createToggleShowMore: function(e) {
                            var t = this,
                                n = e.results,
                                r = e.instantSearchInstance;
                            return function() {
                                t.isShowingMore = !t.isShowingMore, t.render({
                                    results: n,
                                    instantSearchInstance: r
                                })
                            }
                        },
                        getLimit: function() {
                            return this.isShowingMore ? p : c
                        },
                        refine: function(e) {
                            return function(t) {
                                var n = e.getHierarchicalFacetBreadcrumb(i),
                                    r = o(n, 1),
                                    a = r[0];
                                e.toggleRefinement(i, t || a).search()
                            }
                        },
                        getConfiguration: function(e) {
                            var t = {
                                    hierarchicalFacets: [{
                                        name: i,
                                        attributes: [i]
                                    }]
                                },
                                n = e.maxValuesPerFacet || 0;
                            return t.maxValuesPerFacet = Math.max(n, p || c), t
                        },
                        init: function(t) {
                            var r = t.helper,
                                a = t.createURL,
                                o = t.instantSearchInstance;
                            this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this), this._createURL = function(e) {
                                return a(r.state.toggleRefinement(i, e))
                            }, this._refine = this.refine(r), e({
                                items: [],
                                createURL: this._createURL,
                                refine: this._refine,
                                instantSearchInstance: o,
                                canRefine: !1,
                                widgetParams: n,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                canToggleShowMore: !1
                            }, !0)
                        },
                        render: function(t) {
                            var o = t.results,
                                s = t.instantSearchInstance,
                                u = o.getFacetValues(i, {
                                    sortBy: f
                                }).data || [],
                                c = u.slice(0, this.getLimit()).map(function(e) {
                                    var t = e.name,
                                        n = e.path,
                                        i = r(e, ["name", "path"]);
                                    return a({}, i, {
                                        label: t,
                                        value: n
                                    })
                                });
                            this.toggleShowMore = this.createToggleShowMore({
                                results: o,
                                instantSearchInstance: s
                            }), e({
                                items: c,
                                createURL: this._createURL,
                                refine: this._refine,
                                instantSearchInstance: s,
                                canRefine: c.length > 0,
                                widgetParams: n,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                canToggleShowMore: this.isShowingMore || u.length > this.getLimit()
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            t();
                            var r = n;
                            return n.isHierarchicalFacetRefined(i) && (r = n.removeHierarchicalFacetRefinement(i)), r = r.removeHierarchicalFacet(i), (r.maxValuesPerFacet === c || p && r.maxValuesPerFacet === p) && r.setQueryParameters("maxValuesPerFacet", void 0), r
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = i;
        var s = n(0),
            u = "Usage:\nvar customMenu = connectMenu(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   canRefine,\n  //   widgetParams,\n  //   isShowingMore,\n  //   toggleShowMore\n  // }\n});\nsearch.addWidget(\n  customMenu({\n    attributeName,\n    [ limit ],\n    [ showMoreLimit ]\n    [ sortBy = ['name:asc'] ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectMenu.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var i = function() {};
        i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function() {
            return this
        }, i.thatReturnsArgument = function(e) {
            return e
        }, e.exports = i
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n, r, a, o, s, u) {
            if (i(t), !e) {
                var c;
                if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, a, o, s, u],
                        f = 0;
                    c = new Error(t.replace(/%s/g, function() {
                        return l[f++]
                    })), c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1, c
            }
        }
        var i = function(e) {};
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawSelector = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(4),
            c = (r(u), n(1)),
            l = r(c),
            f = n(12),
            p = r(f),
            d = n(19),
            h = r(d),
            m = t.RawSelector = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleChange = this.handleChange.bind(this)
                    }
                }, {
                    key: "handleChange",
                    value: function(e) {
                        this.props.setValue(e.target.value)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.currentValue,
                            r = t.options;
                        return l.default.createElement("select", {
                            className: this.props.cssClasses.select,
                            onChange: this.handleChange,
                            value: "" + n
                        }, r.map(function(t) {
                            return l.default.createElement("option", {
                                className: e.props.cssClasses.item,
                                key: t.label + t.value,
                                value: "" + t.value
                            }, t.label)
                        }))
                    }
                }]), t
            }(c.Component);
        t.default = (0, p.default)((0, h.default)(m))
    }, function(e, t, n) {
        function r(e, t) {
            var n = o(e),
                r = !n && a(e),
                l = !n && !r && s(e),
                p = !n && !r && !l && c(e),
                d = n || r || l || p,
                h = d ? i(e.length, String) : [],
                m = h.length;
            for (var v in e) !t && !f.call(e, v) || d && ("length" == v || l && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, m)) || h.push(v);
            return h
        }
        var i = n(116),
            a = n(37),
            o = n(2),
            s = n(39),
            u = n(40),
            c = n(52),
            l = Object.prototype,
            f = l.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n(38))
    }, function(e, t, n) {
        function r(e) {
            if (!i(e)) return a(e);
            var t = [];
            for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
        var i = n(41),
            a = n(222),
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            if (null != e) {
                try {
                    return i.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        var r = Function.prototype,
            i = r.toString;
        e.exports = n
    }, function(e, t) {
        function n(e, t, n, r) {
            for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;)
                if (t(e[a], a, e)) return a;
            return -1
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                if (n(t, e[r])) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            return t = a(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, o = -1, s = a(r.length - t, 0), u = Array(s); ++o < s;) u[o] = r[t + o];
                    o = -1;
                    for (var c = Array(t + 1); ++o < t;) c[o] = r[o];
                    return c[t] = n(u), i(e, this, c)
                }
        }
        var i = n(43),
            a = Math.max;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return function() {
                return e
            }
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(24),
            i = function() {
                try {
                    var e = r(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }();
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = 0,
                n = 0;
            return function() {
                var o = a(),
                    s = i - (o - n);
                if (n = o, s > 0) {
                    if (++t >= r) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        var r = 800,
            i = 16,
            a = Date.now;
        e.exports = n
    }, function(e, t, n) {
        var r = n(253),
            i = r();
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r;) {
                var o = e[n];
                t(o, n, e) && (a[i++] = o)
            }
            return a
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r, c, l) {
            var f = n & s,
                p = e.length,
                d = t.length;
            if (p != d && !(f && d > p)) return !1;
            var h = l.get(e);
            if (h && l.get(t)) return h == t;
            var m = -1,
                v = !0,
                g = n & u ? new i : void 0;
            for (l.set(e, t), l.set(t, e); ++m < p;) {
                var y = e[m],
                    b = t[m];
                if (r) var _ = f ? r(b, y, m, t, e, l) : r(y, b, m, e, t, l);
                if (void 0 !== _) {
                    if (_) continue;
                    v = !1;
                    break
                }
                if (g) {
                    if (!a(t, function(e, t) {
                            if (!o(g, t) && (y === e || c(y, e, n, r, l))) return g.push(t)
                        })) {
                        v = !1;
                        break
                    }
                } else if (y !== b && !c(y, b, n, r, l)) {
                    v = !1;
                    break
                }
            }
            return l.delete(e), l.delete(t), v
        }
        var i = n(80),
            a = n(130),
            o = n(84),
            s = 1,
            u = 2;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(5),
            i = r.Uint8Array;
        e.exports = i
    }, function(e, t) {
        function n(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach(function(e, r) {
                n[++t] = [r, e]
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return i(e, o, a)
        }
        var i = n(134),
            a = n(91),
            o = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = t(e);
            return a(e) ? r : i(r, n(e))
        }
        var i = n(90),
            a = n(2);
        e.exports = r
    }, function(e, t) {
        function n() {
            return []
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(24),
            i = n(5),
            a = r(i, "Set");
        e.exports = a
    }, function(e, t, n) {
        var r = n(24),
            i = n(5),
            a = r(i, "WeakMap");
        e.exports = a
    }, function(e, t, n) {
        function r(e) {
            return e === e && !i(e)
        }
        var i = n(6);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return function(n) {
                return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return null != e && a(e, t, i)
        }
        var i = n(273),
            a = n(141);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            t = i(t, e);
            for (var r = -1, l = t.length, f = !1; ++r < l;) {
                var p = c(t[r]);
                if (!(f = null != e && n(e, p))) break;
                e = e[p]
            }
            return f || ++r != l ? f : !!(l = null == e ? 0 : e.length) && u(l) && s(p, l) && (o(e) || a(e))
        }
        var i = n(31),
            a = n(37),
            o = n(2),
            s = n(40),
            u = n(78),
            c = n(32);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = -1,
                r = a(e) ? Array(e.length) : [];
            return i(e, function(e, i, a) {
                r[++n] = t(e, i, a)
            }), r
        }
        var i = n(45),
            a = n(13);
        e.exports = r
    }, function(e, t, n) {
        var r = n(21),
            i = n(144),
            a = n(293),
            o = n(31),
            s = n(23),
            u = n(295),
            c = n(151),
            l = n(97),
            f = c(function(e, t) {
                var n = {};
                if (null == e) return n;
                var c = !1;
                t = r(t, function(t) {
                    return t = o(t, e), c || (c = t.length > 1), t
                }), s(e, l(e), n), c && (n = i(n, 7, u));
                for (var f = t.length; f--;) a(n, t[f]);
                return n
            });
        e.exports = f
    }, function(e, t, n) {
        function r(e, t, n, N, k, T) {
            var M, A = t & R,
                L = t & x,
                H = t & S;
            if (n && (M = k ? n(e, N, k, T) : n(e)), void 0 !== M) return M;
            if (!w(e)) return e;
            var I = b(e);
            if (I) {
                if (M = v(e), !A) return l(e, M)
            } else {
                var U = m(e),
                    D = U == C || U == O;
                if (_(e)) return c(e, A);
                if (U == E || U == j || D && !k) {
                    if (M = L || D ? {} : y(e), !A) return L ? p(e, u(M, e)) : f(e, s(M, e))
                } else {
                    if (!F[U]) return k ? e : {};
                    M = g(e, U, r, A)
                }
            }
            T || (T = new i);
            var V = T.get(e);
            if (V) return V;
            T.set(e, M);
            var B = H ? L ? h : d : L ? keysIn : P,
                Q = I ? void 0 : B(e);
            return a(Q || e, function(i, a) {
                Q && (a = i, i = e[a]), o(M, a, r(i, t, n, a, e, T))
            }), M
        }
        var i = n(57),
            a = n(88),
            o = n(62),
            s = n(278),
            u = n(279),
            c = n(145),
            l = n(63),
            f = n(282),
            p = n(283),
            d = n(133),
            h = n(97),
            m = n(92),
            v = n(284),
            g = n(285),
            y = n(148),
            b = n(2),
            _ = n(39),
            w = n(6),
            P = n(7),
            R = 1,
            x = 2,
            S = 4,
            j = "[object Arguments]",
            C = "[object Function]",
            O = "[object GeneratorFunction]",
            E = "[object Object]",
            F = {};
        F[j] = F["[object Array]"] = F["[object ArrayBuffer]"] = F["[object DataView]"] = F["[object Boolean]"] = F["[object Date]"] = F["[object Float32Array]"] = F["[object Float64Array]"] = F["[object Int8Array]"] = F["[object Int16Array]"] = F["[object Int32Array]"] = F["[object Map]"] = F["[object Number]"] = F[E] = F["[object RegExp]"] = F["[object Set]"] = F["[object String]"] = F["[object Symbol]"] = F["[object Uint8Array]"] = F["[object Uint8ClampedArray]"] = F["[object Uint16Array]"] = F["[object Uint32Array]"] = !0, F["[object Error]"] = F[C] = F["[object WeakMap]"] = !1, e.exports = r
    }, function(e, t, n) {
        (function(e) {
            function r(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = c ? c(n) : new e.constructor(n);
                return e.copy(r), r
            }
            var i = n(5),
                a = "object" == typeof t && t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === a,
                u = s ? i.Buffer : void 0,
                c = u ? u.allocUnsafe : void 0;
            e.exports = r
        }).call(t, n(77)(e))
    }, function(e, t, n) {
        var r = n(90),
            i = n(96),
            a = n(91),
            o = n(135),
            s = Object.getOwnPropertySymbols,
            u = s ? function(e) {
                for (var t = []; e;) r(t, a(e)), e = i(e);
                return t
            } : o;
        e.exports = u
    }, function(e, t, n) {
        function r(e, t) {
            var n = t ? i(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length)
        }
        var i = n(98);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "function" != typeof e.constructor || o(e) ? {} : i(a(e))
        }
        var i = n(64),
            a = n(96),
            o = n(41);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : void 0
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            var r = -1,
                i = e.length;
            t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
            for (var a = Array(i); ++r < i;) a[r] = e[r + t];
            return a
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o(a(e, void 0, i), e + "")
        }
        var i = n(152),
            a = n(123),
            o = n(85);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return (null == e ? 0 : e.length) ? i(e, 1) : []
        }
        var i = n(153);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, o, s) {
            var u = -1,
                c = e.length;
            for (n || (n = a), s || (s = []); ++u < c;) {
                var l = e[u];
                t > 0 && n(l) ? t > 1 ? r(l, t - 1, n, o, s) : i(s, l) : o || (s[s.length] = l)
            }
            return s
        }
        var i = n(90),
            a = n(296);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (!e) return 0 === e ? e : 0;
            if ((e = i(e)) === a || e === -a) {
                return (e < 0 ? -1 : 1) * o
            }
            return e === e ? e : 0
        }
        var i = n(297),
            a = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return "number" == typeof e || a(e) && i(e) == o
        }
        var i = n(17),
            a = n(8),
            o = "[object Number]";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var u = null == n ? 0 : o(n);
            return u < 0 && (u = s(r + u, 0)), i(e, a(t, 3), u)
        }
        var i = n(121),
            a = n(9),
            o = n(33),
            s = Math.max;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            if ((e = c(e)) && (n || void 0 === t)) return e.replace(l, "");
            if (!e || !(t = i(t))) return e;
            var r = u(e),
                f = u(t),
                p = s(r, f),
                d = o(r, f) + 1;
            return a(r, p, d).join("")
        }
        var i = n(94),
            a = n(300),
            o = n(301),
            s = n(302),
            u = n(303),
            c = n(61),
            l = /^\s+|\s+$/g;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            (void 0 === n || a(e[t], n)) && (void 0 !== n || t in e) || i(e, t, n)
        }
        var i = n(48),
            a = n(30);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = {};
            return d(e, function(e, n) {
                t[e] = n
            }), t
        }

        function i(e, t, n) {
            t && t[n] && (e.stats = t[n])
        }

        function a(e, t) {
            return b(e, function(e) {
                return _(e.attributes, t)
            })
        }

        function o(e, t) {
            var n = t[0];
            this._rawResults = t, this.query = n.query, this.parsedQuery = n.parsedQuery, this.hits = n.hits, this.index = n.index, this.hitsPerPage = n.hitsPerPage, this.nbHits = n.nbHits, this.nbPages = n.nbPages, this.page = n.page, this.processingTimeMS = y(t, "processingTimeMS"), this.aroundLatLng = n.aroundLatLng, this.automaticRadius = n.automaticRadius, this.serverUsed = n.serverUsed, this.timeoutCounts = n.timeoutCounts, this.timeoutHits = n.timeoutHits, this.exhaustiveFacetsCount = n.exhaustiveFacetsCount, this.exhaustiveNbHits = n.exhaustiveNbHits, this.userData = n.userData, this.queryID = n.queryID, this.disjunctiveFacets = [], this.hierarchicalFacets = w(e.hierarchicalFacets, function() {
                return []
            }), this.facets = [];
            var o = e.getRefinedDisjunctiveFacets(),
                s = r(e.facets),
                u = r(e.disjunctiveFacets),
                c = 1,
                l = this;
            d(n.facets, function(t, r) {
                var o = a(e.hierarchicalFacets, r);
                if (o) {
                    var c = o.attributes.indexOf(r),
                        f = v(e.hierarchicalFacets, {
                            name: o.name
                        });
                    l.hierarchicalFacets[f][c] = {
                        attribute: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }
                } else {
                    var p, d = -1 !== m(e.disjunctiveFacets, r),
                        h = -1 !== m(e.facets, r);
                    d && (p = u[r], l.disjunctiveFacets[p] = {
                        name: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }, i(l.disjunctiveFacets[p], n.facets_stats, r)), h && (p = s[r], l.facets[p] = {
                        name: r,
                        data: t,
                        exhaustive: n.exhaustiveFacetsCount
                    }, i(l.facets[p], n.facets_stats, r))
                }
            }), this.hierarchicalFacets = h(this.hierarchicalFacets), d(o, function(r) {
                var a = t[c],
                    o = e.getHierarchicalFacetByName(r);
                d(a.facets, function(t, r) {
                    var s;
                    if (o) {
                        s = v(e.hierarchicalFacets, {
                            name: o.name
                        });
                        var c = v(l.hierarchicalFacets[s], {
                            attribute: r
                        });
                        if (-1 === c) return;
                        l.hierarchicalFacets[s][c].data = x({}, l.hierarchicalFacets[s][c].data, t)
                    } else {
                        s = u[r];
                        var f = n.facets && n.facets[r] || {};
                        l.disjunctiveFacets[s] = {
                            name: r,
                            data: R({}, t, f),
                            exhaustive: a.exhaustiveFacetsCount
                        }, i(l.disjunctiveFacets[s], a.facets_stats, r), e.disjunctiveFacetsRefinements[r] && d(e.disjunctiveFacetsRefinements[r], function(t) {
                            !l.disjunctiveFacets[s].data[t] && m(e.disjunctiveFacetsRefinements[r], t) > -1 && (l.disjunctiveFacets[s].data[t] = 0)
                        })
                    }
                }), c++
            }), d(e.getRefinedHierarchicalFacets(), function(n) {
                var r = e.getHierarchicalFacetByName(n),
                    i = e._getHierarchicalFacetSeparator(r),
                    a = e.getHierarchicalRefinement(n);
                if (!(0 === a.length || a[0].split(i).length < 2)) {
                    var o = t[c];
                    d(o.facets, function(t, n) {
                        var o = v(e.hierarchicalFacets, {
                                name: r.name
                            }),
                            s = v(l.hierarchicalFacets[o], {
                                attribute: n
                            });
                        if (-1 !== s) {
                            var u = {};
                            if (a.length > 0) {
                                var c = a[0].split(i)[0];
                                u[c] = l.hierarchicalFacets[o][s].data[c]
                            }
                            l.hierarchicalFacets[o][s].data = R(u, t, l.hierarchicalFacets[o][s].data)
                        }
                    }), c++
                }
            }), d(e.facetsExcludes, function(e, t) {
                var r = s[t];
                l.facets[r] = {
                    name: t,
                    data: n.facets[t],
                    exhaustive: n.exhaustiveFacetsCount
                }, d(e, function(e) {
                    l.facets[r] = l.facets[r] || {
                        name: t
                    }, l.facets[r].data = l.facets[r].data || {}, l.facets[r].data[e] = 0
                })
            }), this.hierarchicalFacets = w(this.hierarchicalFacets, F(e)), this.facets = h(this.facets), this.disjunctiveFacets = h(this.disjunctiveFacets), this._state = e
        }

        function s(e, t) {
            var n = {
                name: t
            };
            if (e._state.isConjunctiveFacet(t)) {
                var r = b(e.facets, n);
                return r ? w(r.data, function(n, r) {
                    return {
                        name: r,
                        count: n,
                        isRefined: e._state.isFacetRefined(t, r),
                        isExcluded: e._state.isExcludeRefined(t, r)
                    }
                }) : []
            }
            if (e._state.isDisjunctiveFacet(t)) {
                var i = b(e.disjunctiveFacets, n);
                return i ? w(i.data, function(n, r) {
                    return {
                        name: r,
                        count: n,
                        isRefined: e._state.isDisjunctiveFacetRefined(t, r)
                    }
                }) : []
            }
            if (e._state.isHierarchicalFacet(t)) return b(e.hierarchicalFacets, n)
        }

        function u(e, t) {
            if (!t.data || 0 === t.data.length) return t;
            var n = w(t.data, C(u, e)),
                r = e(n);
            return x({}, t, {
                data: r
            })
        }

        function c(e, t) {
            return t.sort(e)
        }

        function l(e, t) {
            var n = b(e, {
                name: t
            });
            return n && n.stats
        }

        function f(e, t, n, r, i) {
            var a = b(i, {
                    name: n
                }),
                o = g(a, "data[" + r + "]"),
                s = g(a, "exhaustive");
            return {
                type: t,
                attributeName: n,
                name: r,
                count: o || 0,
                exhaustive: s || !1
            }
        }

        function p(e, t, n, r) {
            for (var i = b(r, {
                    name: t
                }), a = e.getHierarchicalFacetByName(t), o = n.split(a.separator), s = o[o.length - 1], u = 0; void 0 !== i && u < o.length; ++u) i = b(i.data, {
                name: o[u]
            });
            var c = g(i, "count"),
                l = g(i, "exhaustive");
            return {
                type: "hierarchical",
                attributeName: t,
                name: s,
                count: c || 0,
                exhaustive: l || !1
            }
        }
        var d = n(14),
            h = n(314),
            m = n(65),
            v = n(156),
            g = n(59),
            y = n(315),
            b = n(11),
            _ = n(102),
            w = n(10),
            P = n(160),
            R = n(67),
            x = n(100),
            S = n(2),
            j = n(20),
            C = n(323),
            O = n(338),
            E = n(172),
            F = n(341);
        o.prototype.getFacetByName = function(e) {
            var t = {
                name: e
            };
            return b(this.facets, t) || b(this.disjunctiveFacets, t) || b(this.hierarchicalFacets, t)
        }, o.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], o.prototype.getFacetValues = function(e, t) {
            var n = s(this, e);
            if (!n) throw new Error(e + " is not a retrieved facet.");
            var r = R({}, t, {
                sortBy: o.DEFAULT_SORT
            });
            if (S(r.sortBy)) {
                var i = E(r.sortBy, o.DEFAULT_SORT);
                return S(n) ? P(n, i[0], i[1]) : u(O(P, i[0], i[1]), n)
            }
            if (j(r.sortBy)) return S(n) ? n.sort(r.sortBy) : u(C(c, r.sortBy), n);
            throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
        }, o.prototype.getFacetStats = function(e) {
            if (this._state.isConjunctiveFacet(e)) return l(this.facets, e);
            if (this._state.isDisjunctiveFacet(e)) return l(this.disjunctiveFacets, e);
            throw new Error(e + " is not present in `facets` or `disjunctiveFacets`")
        }, o.prototype.getRefinements = function() {
            var e = this._state,
                t = this,
                n = [];
            return d(e.facetsRefinements, function(r, i) {
                d(r, function(r) {
                    n.push(f(e, "facet", i, r, t.facets))
                })
            }), d(e.facetsExcludes, function(r, i) {
                d(r, function(r) {
                    n.push(f(e, "exclude", i, r, t.facets))
                })
            }), d(e.disjunctiveFacetsRefinements, function(r, i) {
                d(r, function(r) {
                    n.push(f(e, "disjunctive", i, r, t.disjunctiveFacets))
                })
            }), d(e.hierarchicalFacetsRefinements, function(r, i) {
                d(r, function(r) {
                    n.push(p(e, i, r, t.hierarchicalFacets))
                })
            }), d(e.numericRefinements, function(e, t) {
                d(e, function(e, r) {
                    d(e, function(e) {
                        n.push({
                            type: "numeric",
                            attributeName: t,
                            name: e,
                            numericValue: e,
                            operator: r
                        })
                    })
                })
            }), d(e.tagRefinements, function(e) {
                n.push({
                    type: "tag",
                    attributeName: "_tags",
                    name: e
                })
            }), n
        }, e.exports = o
    }, function(e, t, n) {
        function r(e, t, n, r) {
            return null == e ? [] : (a(t) || (t = null == t ? [] : [t]), n = r ? void 0 : n, a(n) || (n = null == n ? [] : [n]), i(e, t, n))
        }
        var i = n(319),
            a = n(2);
        e.exports = r
    }, function(e, t, n) {
        var r = n(25),
            i = n(162),
            a = i ? function(e, t) {
                return i.set(e, t), e
            } : r;
        e.exports = a
    }, function(e, t, n) {
        var r = n(137),
            i = r && new r;
        e.exports = i
    }, function(e, t, n) {
        function r(e, t, n, b, _, w, P, R, x, S) {
            function j() {
                for (var d = arguments.length, h = Array(d), m = d; m--;) h[m] = arguments[m];
                if (F) var v = c(j),
                    g = o(h, v);
                if (b && (h = i(h, b, _, F)), w && (h = a(h, w, P, F)), d -= g, F && d < S) {
                    var y = f(h, v);
                    return u(e, t, r, j.placeholder, n, h, y, R, x, S - d)
                }
                var T = O ? n : this,
                    M = E ? T[e] : e;
                return d = h.length, R ? h = l(h, R) : N && d > 1 && h.reverse(), C && x < d && (h.length = x), this && this !== p && this instanceof j && (M = k || s(M)), M.apply(T, h)
            }
            var C = t & g,
                O = t & d,
                E = t & h,
                F = t & (m | v),
                N = t & y,
                k = E ? void 0 : s(e);
            return j
        }
        var i = n(164),
            a = n(165),
            o = n(326),
            s = n(70),
            u = n(166),
            c = n(50),
            l = n(335),
            f = n(34),
            p = n(5),
            d = 1,
            h = 2,
            m = 8,
            v = 16,
            g = 128,
            y = 512;
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, i) {
            for (var a = -1, o = e.length, s = n.length, u = -1, c = t.length, l = r(o - s, 0), f = Array(c + l), p = !i; ++u < c;) f[u] = t[u];
            for (; ++a < s;)(p || a < o) && (f[n[a]] = e[a]);
            for (; l--;) f[u++] = e[a++];
            return f
        }
        var r = Math.max;
        e.exports = n
    }, function(e, t) {
        function n(e, t, n, i) {
            for (var a = -1, o = e.length, s = -1, u = n.length, c = -1, l = t.length, f = r(o - u, 0), p = Array(f + l), d = !i; ++a < f;) p[a] = e[a];
            for (var h = a; ++c < l;) p[h + c] = t[c];
            for (; ++s < u;)(d || a < o) && (p[h + n[s]] = e[a++]);
            return p
        }
        var r = Math.max;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r, d, h, m, v, g, y) {
            var b = t & l,
                _ = b ? m : void 0,
                w = b ? void 0 : m,
                P = b ? h : void 0,
                R = b ? void 0 : h;
            t |= b ? f : p, (t &= ~(b ? p : f)) & c || (t &= ~(s | u));
            var x = [e, t, d, P, _, R, w, v, g, y],
                S = n.apply(void 0, x);
            return i(e) && a(S, x), S.placeholder = r, o(S, e, t)
        }
        var i = n(327),
            a = n(170),
            o = n(171),
            s = 1,
            u = 2,
            c = 4,
            l = 8,
            f = 32,
            p = 64;
        e.exports = r
    }, function(e, t, n) {
        var r = n(162),
            i = n(168),
            a = r ? function(e) {
                return r.get(e)
            } : i;
        e.exports = a
    }, function(e, t) {
        function n() {}
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        var i = n(64),
            a = n(104);
        r.prototype = i(a.prototype), r.prototype.constructor = r, e.exports = r
    }, function(e, t, n) {
        var r = n(161),
            i = n(126),
            a = i(r);
        e.exports = a
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = t + "";
            return o(e, a(r, s(i(r), n)))
        }
        var i = n(332),
            a = n(333),
            o = n(85),
            s = n(334);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(18),
            i = n(11),
            a = n(339);
        e.exports = function(e, t) {
            return r(e, function(e, n) {
                var r = n.split(":");
                if (t && 1 === r.length) {
                    var o = i(t, function(e) {
                        return a(e, n[0])
                    });
                    o && (r = o.split(":"))
                }
                return e[0].push(r[0]), e[1].push(r[1]), e
            }, [
                [],
                []
            ])
        }
    }, function(e, t, n) {
        function r(e, t, n) {
            for (var r = -1, s = t.length, u = {}; ++r < s;) {
                var c = t[r],
                    l = i(e, c);
                n(l, c) && a(u, o(c, e), l)
            }
            return u
        }
        var i = n(60),
            a = n(343),
            o = n(31);
        e.exports = r
    }, function(e, t, n) {
        (function(e, r) {
            function i(e, n) {
                var r = {
                    seen: [],
                    stylize: o
                };
                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), m(n) ? r.showHidden = n : n && t._extend(r, n), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = a), u(r, e, r.depth)
            }

            function a(e, t) {
                var n = i.styles[t];
                return n ? "\x1b[" + i.colors[n][0] + "m" + e + "\x1b[" + i.colors[n][1] + "m" : e
            }

            function o(e, t) {
                return e
            }

            function s(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[e] = !0
                }), t
            }

            function u(e, n, r) {
                if (e.customInspect && n && j(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(r, e);
                    return b(i) || (i = u(e, i, r)), i
                }
                var a = c(e, n);
                if (a) return a;
                var o = Object.keys(n),
                    m = s(o);
                if (e.showHidden && (o = Object.getOwnPropertyNames(n)), S(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return l(n);
                if (0 === o.length) {
                    if (j(n)) {
                        var v = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + v + "]", "special")
                    }
                    if (P(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (x(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (S(n)) return l(n)
                }
                var g = "",
                    y = !1,
                    _ = ["{", "}"];
                if (h(n) && (y = !0, _ = ["[", "]"]), j(n)) {
                    g = " [Function" + (n.name ? ": " + n.name : "") + "]"
                }
                if (P(n) && (g = " " + RegExp.prototype.toString.call(n)), x(n) && (g = " " + Date.prototype.toUTCString.call(n)), S(n) && (g = " " + l(n)), 0 === o.length && (!y || 0 == n.length)) return _[0] + g + _[1];
                if (r < 0) return P(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(n);
                var w;
                return w = y ? f(e, n, r, m, o) : o.map(function(t) {
                    return p(e, n, r, m, t, y)
                }), e.seen.pop(), d(w, g, _)
            }

            function c(e, t) {
                if (w(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                return y(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0
            }

            function l(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function f(e, t, n, r, i) {
                for (var a = [], o = 0, s = t.length; o < s; ++o) N(t, String(o)) ? a.push(p(e, t, n, r, String(o), !0)) : a.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || a.push(p(e, t, n, r, i, !0))
                }), a
            }

            function p(e, t, n, r, i, a) {
                var o, s, c;
                if (c = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), N(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n"))) : s = e.stylize("[Circular]", "special")), w(o)) {
                    if (a && i.match(/^\d+$/)) return s;
                    o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
                }
                return o + ": " + s
            }

            function d(e, t, n) {
                var r = 0;
                return e.reduce(function(e, t) {
                    return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }

            function h(e) {
                return Array.isArray(e)
            }

            function m(e) {
                return "boolean" === typeof e
            }

            function v(e) {
                return null === e
            }

            function g(e) {
                return null == e
            }

            function y(e) {
                return "number" === typeof e
            }

            function b(e) {
                return "string" === typeof e
            }

            function _(e) {
                return "symbol" === typeof e
            }

            function w(e) {
                return void 0 === e
            }

            function P(e) {
                return R(e) && "[object RegExp]" === O(e)
            }

            function R(e) {
                return "object" === typeof e && null !== e
            }

            function x(e) {
                return R(e) && "[object Date]" === O(e)
            }

            function S(e) {
                return R(e) && ("[object Error]" === O(e) || e instanceof Error)
            }

            function j(e) {
                return "function" === typeof e
            }

            function C(e) {
                return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
            }

            function O(e) {
                return Object.prototype.toString.call(e)
            }

            function E(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }

            function F() {
                var e = new Date,
                    t = [E(e.getHours()), E(e.getMinutes()), E(e.getSeconds())].join(":");
                return [e.getDate(), A[e.getMonth()], t].join(" ")
            }

            function N(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var k = /%[sdj%]/g;
            t.format = function(e) {
                if (!b(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(i(arguments[n]));
                    return t.join(" ")
                }
                for (var n = 1, r = arguments, a = r.length, o = String(e).replace(k, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= a) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), s = r[n]; n < a; s = r[++n]) v(s) || !R(s) ? o += " " + s : o += " " + i(s);
                return o
            }, t.deprecate = function(n, i) {
                function a() {
                    if (!o) {
                        if (r.throwDeprecation) throw new Error(i);
                        r.traceDeprecation ? console.trace(i) : console.error(i), o = !0
                    }
                    return n.apply(this, arguments)
                }
                if (w(e.process)) return function() {
                    return t.deprecate(n, i).apply(this, arguments)
                };
                if (!0 === r.noDeprecation) return n;
                var o = !1;
                return a
            };
            var T, M = {};
            t.debuglog = function(e) {
                if (w(T) && (T = Object({
                        NODE_ENV: "production"
                    }).NODE_DEBUG || ""), e = e.toUpperCase(), !M[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(T)) {
                        var n = r.pid;
                        M[e] = function() {
                            var r = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, n, r)
                        }
                    } else M[e] = function() {};
                return M[e]
            }, t.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = h, t.isBoolean = m, t.isNull = v, t.isNullOrUndefined = g, t.isNumber = y, t.isString = b, t.isSymbol = _, t.isUndefined = w, t.isRegExp = P, t.isObject = R, t.isDate = x, t.isError = S, t.isFunction = j, t.isPrimitive = C, t.isBuffer = n(345);
            var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            t.log = function() {
                console.log("%s - %s", F(), t.format.apply(t, arguments))
            }, t.inherits = n(346), t._extend = function(e, t) {
                if (!t || !R(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                return e
            }
        }).call(t, n(38), n(71))
    }, function(e, t, n) {
        var r = n(124),
            i = n(349),
            a = n(25),
            o = i(function(e, t, n) {
                e[t] = n
            }, r(a));
        e.exports = o
    }, function(e, t, n) {
        "use strict";
        var r = String.prototype.replace,
            i = /%20/g;
        e.exports = {
            default: "RFC3986",
            formatters: {
                RFC1738: function(e) {
                    return r.call(e, i, "+")
                },
                RFC3986: function(e) {
                    return e
                }
            },
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        }
    }, function(e, t, n) {
        function r(e, t) {
            var n = {};
            return t = o(t, 3), a(e, function(e, r, a) {
                i(n, t(e, r, a), e)
            }), n
        }
        var i = n(48),
            a = n(44),
            o = n(9);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = {};
            return t = o(t, 3), a(e, function(e, r, a) {
                i(n, r, t(e, r, a))
            }), n
        }
        var i = n(48),
            a = n(44),
            o = n(9);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        e.exports = "2.24.0"
    }, function(e, t) {
        "function" === typeof Object.create ? e.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function(e, t, n) {
        function r(e, t) {
            return function(n, r, a) {
                if ("function" === typeof n && "object" === typeof r || "object" === typeof a) throw new i.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                0 === arguments.length || "function" === typeof n ? (a = n, n = "") : 1 !== arguments.length && "function" !== typeof r || (a = r, r = void 0), "object" === typeof n && null !== n ? (r = n, n = void 0) : void 0 !== n && null !== n || (n = "");
                var o = "";
                void 0 !== n && (o += e + "=" + encodeURIComponent(n));
                var s;
                return void 0 !== r && (r.additionalUA && (s = r.additionalUA, delete r.additionalUA), o = this.as._getSearchParams(r, o)), this._search(o, t, a, s)
            }
        }
        e.exports = r;
        var i = n(72)
    }, function(e, t, n) {
        var r = n(101),
            i = n(68),
            a = i(function(e, t, n, i) {
                r(e, t, n, i)
            });
        e.exports = a
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = -1,
                f = a,
                p = e.length,
                d = !0,
                h = [],
                m = h;
            if (n) d = !1, f = o;
            else if (p >= l) {
                var v = t ? null : u(e);
                if (v) return c(v);
                d = !1, f = s, m = new i
            } else m = t ? [] : h;
            e: for (; ++r < p;) {
                var g = e[r],
                    y = t ? t(g) : g;
                if (g = n || 0 !== g ? g : 0, d && y === y) {
                    for (var b = m.length; b--;)
                        if (m[b] === y) continue e;
                    t && m.push(y), h.push(g)
                } else f(m, y, n) || (m !== h && m.push(y), h.push(g))
            }
            return h
        }
        var i = n(80),
            a = n(83),
            o = n(122),
            s = n(84),
            u = n(381),
            c = n(58),
            l = 200;
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = "2.5.1"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(186);
        Object.defineProperty(t, "connectClearAll", {
            enumerable: !0,
            get: function() {
                return r(i).default
            }
        });
        var a = n(187);
        Object.defineProperty(t, "connectCurrentRefinedValues", {
            enumerable: !0,
            get: function() {
                return r(a).default
            }
        });
        var o = n(189);
        Object.defineProperty(t, "connectHierarchicalMenu", {
            enumerable: !0,
            get: function() {
                return r(o).default
            }
        });
        var s = n(190);
        Object.defineProperty(t, "connectHits", {
            enumerable: !0,
            get: function() {
                return r(s).default
            }
        });
        var u = n(191);
        Object.defineProperty(t, "connectHitsPerPage", {
            enumerable: !0,
            get: function() {
                return r(u).default
            }
        });
        var c = n(192);
        Object.defineProperty(t, "connectInfiniteHits", {
            enumerable: !0,
            get: function() {
                return r(c).default
            }
        });
        var l = n(111);
        Object.defineProperty(t, "connectMenu", {
            enumerable: !0,
            get: function() {
                return r(l).default
            }
        });
        var f = n(193);
        Object.defineProperty(t, "connectNumericRefinementList", {
            enumerable: !0,
            get: function() {
                return r(f).default
            }
        });
        var p = n(194);
        Object.defineProperty(t, "connectNumericSelector", {
            enumerable: !0,
            get: function() {
                return r(p).default
            }
        });
        var d = n(195);
        Object.defineProperty(t, "connectPagination", {
            enumerable: !0,
            get: function() {
                return r(d).default
            }
        });
        var h = n(196);
        Object.defineProperty(t, "connectPriceRanges", {
            enumerable: !0,
            get: function() {
                return r(h).default
            }
        });
        var m = n(396);
        Object.defineProperty(t, "connectRangeSlider", {
            enumerable: !0,
            get: function() {
                return r(m).default
            }
        });
        var v = n(74);
        Object.defineProperty(t, "connectRange", {
            enumerable: !0,
            get: function() {
                return r(v).default
            }
        });
        var g = n(197);
        Object.defineProperty(t, "connectRefinementList", {
            enumerable: !0,
            get: function() {
                return r(g).default
            }
        });
        var y = n(198);
        Object.defineProperty(t, "connectSearchBox", {
            enumerable: !0,
            get: function() {
                return r(y).default
            }
        });
        var b = n(199);
        Object.defineProperty(t, "connectSortBySelector", {
            enumerable: !0,
            get: function() {
                return r(b).default
            }
        });
        var _ = n(200);
        Object.defineProperty(t, "connectStarRating", {
            enumerable: !0,
            get: function() {
                return r(_).default
            }
        });
        var w = n(201);
        Object.defineProperty(t, "connectStats", {
            enumerable: !0,
            get: function() {
                return r(w).default
            }
        });
        var P = n(202);
        Object.defineProperty(t, "connectToggle", {
            enumerable: !0,
            get: function() {
                return r(P).default
            }
        });
        var R = n(398);
        Object.defineProperty(t, "connectBreadcrumb", {
            enumerable: !0,
            get: function() {
                return r(R).default
            }
        })
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, a),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.excludeAttributes,
                        a = void 0 === r ? [] : r,
                        s = n.clearsQuery,
                        u = void 0 !== s && s;
                    return {
                        _refine: function() {},
                        _cachedRefine: function() {
                            this._refine()
                        },
                        init: function(t) {
                            var r = t.helper,
                                s = t.instantSearchInstance,
                                c = t.createURL;
                            this._cachedRefine = this._cachedRefine.bind(this);
                            var l = (0, i.getRefinements)({}, r.state).map(function(e) {
                                    return e.attributeName
                                }).filter(function(e) {
                                    return -1 === a.indexOf(e)
                                }),
                                f = u ? 0 !== l.length || "" !== r.state.query : 0 !== l.length,
                                p = function() {
                                    return c((0, i.clearRefinementsFromState)(r.state, [], u))
                                };
                            this._refine = o({
                                helper: r,
                                clearAttributes: l,
                                hasRefinements: f,
                                clearsQuery: u
                            }), e({
                                refine: this._cachedRefine,
                                hasRefinements: f,
                                createURL: p,
                                instantSearchInstance: s,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.results,
                                s = t.state,
                                c = t.createURL,
                                l = t.helper,
                                f = t.instantSearchInstance,
                                p = (0, i.getRefinements)(r, s).map(function(e) {
                                    return e.attributeName
                                }).filter(function(e) {
                                    return -1 === a.indexOf(e)
                                }),
                                d = u ? 0 !== p.length || "" !== l.state.query : 0 !== p.length,
                                h = function() {
                                    return c((0, i.clearRefinementsFromState)(s, [], u))
                                };
                            this._refine = o({
                                helper: l,
                                clearAttributes: p,
                                hasRefinements: d,
                                clearsQuery: u
                            }), e({
                                refine: this._cachedRefine,
                                hasRefinements: d,
                                createURL: h,
                                instantSearchInstance: f,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = "Usage:\nvar customClearAll = connectClearAll(function render(params, isFirstRendering) {\n  // params = {\n  //   refine,\n  //   hasRefinements,\n  //   createURL,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customClearAll({\n    [ excludeAttributes = [] ],\n    [ clearsQuery = false ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectClearAll.html\n",
            o = function(e) {
                var t = e.helper,
                    n = e.clearAttributes,
                    r = e.hasRefinements,
                    a = e.clearsQuery;
                return function() {
                    r && (0, i.clearRefinementsAndSearch)(t, n, a)
                }
            }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            return (0, N.checkRendering)(e, k),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributes,
                        i = void 0 === r ? [] : r,
                        a = n.onlyListedAttributes,
                        o = void 0 !== a && a,
                        l = n.clearsQuery,
                        f = void 0 !== l && l,
                        d = (0, y.default)(i) && (0, O.default)(i, function(e, t) {
                            return e && (0, _.default)(t) && (0, v.default)(t.name) && ((0, p.default)(t.label) || (0, v.default)(t.label)) && ((0, p.default)(t.template) || (0, v.default)(t.template) || (0, P.default)(t.template)) && ((0, p.default)(t.transformData) || (0, P.default)(t.transformData))
                        }, !0);
                    if (!(0, y.default)(i) || !d || !(0, h.default)(o)) throw new Error(k);
                    var m = (0, j.default)(i, function(e) {
                            return e.name
                        }),
                        g = o ? m : [],
                        b = (0, O.default)(i, function(e, t) {
                            return e[t.name] = t, e
                        }, {});
                    return {
                        init: function(t) {
                            var r = t.helper,
                                i = t.createURL,
                                a = t.instantSearchInstance;
                            this._clearRefinementsAndSearch = N.clearRefinementsAndSearch.bind(null, r, g, f);
                            var l = i((0, N.clearRefinementsFromState)(r.state, g, f)),
                                p = s({}, r.state, m, o, f),
                                d = function(e) {
                                    return i(u(r.state, e))
                                },
                                h = function(e) {
                                    return c(r, e)
                                };
                            e({
                                attributes: b,
                                clearAllClick: this._clearRefinementsAndSearch,
                                clearAllURL: l,
                                refine: h,
                                createURL: d,
                                refinements: p,
                                instantSearchInstance: a,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.results,
                                i = t.helper,
                                a = t.state,
                                l = t.createURL,
                                p = t.instantSearchInstance,
                                d = l((0, N.clearRefinementsFromState)(a, g, f)),
                                h = s(r, a, m, o, f),
                                v = function(e) {
                                    return l(u(i.state, e))
                                },
                                y = function(e) {
                                    return c(i, e)
                                };
                            e({
                                attributes: b,
                                clearAllClick: this._clearRefinementsAndSearch,
                                clearAllURL: d,
                                refine: y,
                                createURL: v,
                                refinements: h,
                                instantSearchInstance: p,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }

        function a(e, t, n) {
            var r = e.indexOf(n);
            return -1 !== r ? r : e.length + t.indexOf(n)
        }

        function o(e, t, n, r) {
            var i = a(e, t, n.attributeName),
                o = a(e, t, r.attributeName);
            return i === o ? n.name === r.name ? 0 : n.name < r.name ? -1 : 1 : i < o ? -1 : 1
        }

        function s(e, t, n, r, i) {
            var a = (0, N.getRefinements)(e, t, i),
                s = (0, O.default)(a, function(e, t) {
                    return -1 === n.indexOf(t.attributeName) && e.indexOf(-1 === t.attributeName) && e.push(t.attributeName), e
                }, []);
            return a = a.sort(o.bind(null, n, s)), r && !(0, x.default)(n) && (a = (0, F.default)(a, function(e) {
                return -1 !== n.indexOf(e.attributeName)
            })), a.map(l)
        }

        function u(e, t) {
            switch (t.type) {
                case "facet":
                    return e.removeFacetRefinement(t.attributeName, t.name);
                case "disjunctive":
                    return e.removeDisjunctiveFacetRefinement(t.attributeName, t.name);
                case "hierarchical":
                    return e.clearRefinements(t.attributeName);
                case "exclude":
                    return e.removeExcludeRefinement(t.attributeName, t.name);
                case "numeric":
                    return e.removeNumericRefinement(t.attributeName, t.operator, t.numericValue);
                case "tag":
                    return e.removeTagRefinement(t.name);
                case "query":
                    return e.setQueryParameter("query", "");
                default:
                    throw new Error("clearRefinement: type " + t.type + " is not handled")
            }
        }

        function c(e, t) {
            e.setState(u(e.state, t)).search()
        }

        function l(e) {
            if (e.computedLabel = e.name, e.hasOwnProperty("operator") && "string" === typeof e.operator) {
                var t = e.operator;
                ">=" === e.operator && (t = "\u2265"), "<=" === e.operator && (t = "\u2264"), e.computedLabel = t + " " + e.name
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var f = n(66),
            p = r(f),
            d = n(188),
            h = r(d),
            m = n(28),
            v = r(m),
            g = n(2),
            y = r(g),
            b = n(26),
            _ = r(b),
            w = n(20),
            P = r(w),
            R = n(27),
            x = r(R),
            S = n(10),
            j = r(S),
            C = n(18),
            O = r(C),
            E = n(46),
            F = r(E),
            N = n(0),
            k = "Usage:\nvar customCurrentRefinedValues = connectCurrentRefinedValues(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   attributes,\n  //   clearAllClick,\n  //   clearAllPosition,\n  //   clearAllURL,\n  //   refine,\n  //   createURL,\n  //   refinements,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customCurrentRefinedValues({\n    [ attributes = [] ],\n    [ onlyListedAttributes = false ],\n    [ clearsQuery = false ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectCurrentRefinedValues.html\n"
    }, function(e, t, n) {
        function r(e) {
            return !0 === e || !1 === e || a(e) && i(e) == o
        }
        var i = n(17),
            a = n(8),
            o = "[object Boolean]";
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e, t) {
            return (0, p.checkRendering)(e, d),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributes,
                        a = n.separator,
                        u = void 0 === a ? " > " : a,
                        l = n.rootPath,
                        p = void 0 === l ? null : l,
                        h = n.showParentLevel,
                        m = void 0 === h || h,
                        v = n.limit,
                        g = void 0 === v ? 10 : v,
                        y = n.sortBy,
                        b = void 0 === y ? ["name:asc"] : y;
                    if (!r || !r.length) throw new Error(d);
                    var _ = s(r, 1),
                        w = _[0];
                    return {
                        getConfiguration: function(e) {
                            if (e.hierarchicalFacets) {
                                var t = (0, c.default)(e.hierarchicalFacets, function(e) {
                                    return e.name === w
                                });
                                if (t && (!(0, f.default)(t.attributes, r) || t.separator !== u)) return console.warn("using Breadcrumb & HierarchicalMenu on the same facet with different options"), {}
                            }
                            return {
                                hierarchicalFacets: [{
                                    name: w,
                                    attributes: r,
                                    separator: u,
                                    rootPath: p,
                                    showParentLevel: m
                                }],
                                maxValuesPerFacet: void 0 !== e.maxValuesPerFacet ? Math.max(e.maxValuesPerFacet, g) : g
                            }
                        },
                        init: function(t) {
                            function r(e) {
                                return a(i.state.toggleRefinement(w, e))
                            }
                            var i = t.helper,
                                a = t.createURL,
                                o = t.instantSearchInstance;
                            this._refine = function(e) {
                                i.toggleRefinement(w, e).search()
                            }, e({
                                createURL: r,
                                items: [],
                                refine: this._refine,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !0)
                        },
                        _prepareFacetValues: function(e, t) {
                            var n = this;
                            return e.slice(0, g).map(function(e) {
                                var r = e.name,
                                    a = e.path,
                                    s = i(e, ["name", "path"]);
                                return Array.isArray(s.data) && (s.data = n._prepareFacetValues(s.data, t)), o({}, s, {
                                    label: r,
                                    value: a
                                })
                            })
                        },
                        render: function(t) {
                            function r(e) {
                                return o(a.toggleRefinement(w, e))
                            }
                            var i = t.results,
                                a = t.state,
                                o = t.createURL,
                                s = t.instantSearchInstance,
                                u = this._prepareFacetValues(i.getFacetValues(w, {
                                    sortBy: b
                                }).data || [], a);
                            e({
                                createURL: r,
                                items: u,
                                refine: this._refine,
                                instantSearchInstance: s,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            t();
                            var r = n;
                            return n.isHierarchicalFacetRefined(w) && (r = n.removeHierarchicalFacetRefinement(w)), r = r.removeHierarchicalFacet(w), r.maxValuesPerFacet === g && r.setQueryParameters("maxValuesPerFacet", void 0), r
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = a;
        var u = n(11),
            c = r(u),
            l = n(15),
            f = r(l),
            p = n(0),
            d = "Usage:\nvar customHierarchicalMenu = connectHierarchicalMenu(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHierarchicalMenu({\n    attributes,\n    [ separator = ' > ' ],\n    [ rootPath = null ],\n    [ showParentLevel = true ],\n    [ limit = 10 ],\n    [ sortBy = ['name:asc'] ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectHierarchicalMenu.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, o.checkRendering)(e, s),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        getConfiguration: function() {
                            return n.escapeHits ? i.tagConfig : void 0
                        },
                        init: function(t) {
                            var r = t.instantSearchInstance;
                            e({
                                hits: [],
                                results: void 0,
                                instantSearchInstance: r,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.results,
                                i = t.instantSearchInstance;
                            n.escapeHits && r.hits && r.hits.length > 0 && (r.hits = (0, a.default)(r.hits)), e({
                                hits: r.hits,
                                results: r,
                                instantSearchInstance: i,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(110),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            o = n(0),
            s = "Usage:\nvar customHits = connectHits(function render(params, isFirstRendering) {\n  // params = {\n  //   hits,\n  //   results,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHits({\n    [ escapeHits = false ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectHits.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            return (0, u.checkRendering)(e, c),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.items,
                        o = i;
                    if (!o) throw new Error(c);
                    var u = o.filter(function(e) {
                        return e.default
                    });
                    if (u.length > 1) throw new Error("[Error][hitsPerPageSelector] more than one default value is specified in `items[]`\nThe first one will be picked, you should probably set only one default value");
                    return {
                        getConfiguration: function() {
                            return u.length > 0 ? {
                                hitsPerPage: u[0].value
                            } : {}
                        },
                        init: function(t) {
                            var i = t.helper,
                                a = t.state,
                                u = t.instantSearchInstance;
                            (0, s.default)(o, function(e) {
                                return Number(a.hitsPerPage) === Number(e.value)
                            }) || (void 0 === a.hitsPerPage ? window.console && window.console.warn("[Warning][hitsPerPageSelector] hitsPerPage not defined.\n  You should probably set the value `hitsPerPage`\n  using the searchParameters attribute of the instantsearch constructor.") : window.console && window.console.warn("[Warning][hitsPerPageSelector] No item in `items`\n  with `value: hitsPerPage` (hitsPerPage: " + a.hitsPerPage + ")"), o = [{
                                value: void 0,
                                label: ""
                            }].concat(r(o))), this.setHitsPerPage = function(e) {
                                return i.setQueryParameter("hitsPerPage", e).search()
                            }, e({
                                items: this._transformItems(a),
                                refine: this.setHitsPerPage,
                                hasNoResults: !0,
                                widgetParams: n,
                                instantSearchInstance: u
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.state,
                                i = t.results,
                                a = t.instantSearchInstance,
                                o = 0 === i.nbHits;
                            e({
                                items: this._transformItems(r),
                                refine: this.setHitsPerPage,
                                hasNoResults: o,
                                widgetParams: n,
                                instantSearchInstance: a
                            }, !1)
                        },
                        _transformItems: function(e) {
                            var t = e.hitsPerPage;
                            return o.map(function(e) {
                                return a({}, e, {
                                    isRefined: Number(e.value) === Number(t)
                                })
                            })
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var o = n(393),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            u = n(0),
            c = "Usage:\nvar customHitsPerPage = connectHitsPerPage(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customHitsPerPage({\n    items: [\n      {value: 5, label: '5 results per page', default: true},\n      {value: 10, label: '10 results per page'},\n      {value: 42, label: '42 results per page'},\n    ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectHitsPerPage.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            return (0, s.checkRendering)(e, u),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = [],
                        s = function(e) {
                            return function() {
                                return e.nextPage().search()
                            }
                        };
                    return {
                        getConfiguration: function() {
                            return n.escapeHits ? a.tagConfig : void 0
                        },
                        init: function(t) {
                            var r = t.instantSearchInstance,
                                a = t.helper;
                            this.showMore = s(a), e({
                                hits: i,
                                results: void 0,
                                showMore: this.showMore,
                                isLastPage: !0,
                                instantSearchInstance: r,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var a = t.results,
                                s = t.state,
                                u = t.instantSearchInstance;
                            0 === s.page && (i = []), n.escapeHits && a.hits && a.hits.length > 0 && (a.hits = (0, o.default)(a.hits)), i = [].concat(r(i), r(a.hits));
                            var c = a.nbPages <= a.page + 1;
                            e({
                                hits: i,
                                results: a,
                                showMore: this.showMore,
                                isLastPage: c,
                                instantSearchInstance: u,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(110),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            s = n(0),
            u = "Usage:\nvar customInfiniteHits = connectInfiniteHits(function render(params, isFirstRendering) {\n  // params = {\n  //   hits,\n  //   results,\n  //   showMore,\n  //   isLastPage,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customInfiniteHits({\n    escapeHits: true,\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectInfiniteHits.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, c.checkRendering)(e, l),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName,
                        o = n.options;
                    if (!r || !o) throw new Error(l);
                    return {
                        init: function(t) {
                            var s = t.helper,
                                u = t.createURL,
                                c = t.instantSearchInstance;
                            this._refine = function(e) {
                                var t = a(s.state, r, o, e);
                                s.setState(t).search()
                            }, this._createURL = function(e) {
                                return function(t) {
                                    return u(a(e, r, o, t))
                                }
                            }, this._prepareItems = function(e) {
                                return o.map(function(t) {
                                    var n = t.start,
                                        a = t.end;
                                    return {
                                        label: t.name,
                                        value: window.encodeURI(JSON.stringify({
                                            start: n,
                                            end: a
                                        })),
                                        isRefined: i(e, r, {
                                            start: n,
                                            end: a
                                        })
                                    }
                                })
                            }, e({
                                createURL: this._createURL(s.state),
                                items: this._prepareItems(s.state),
                                hasNoResults: !0,
                                refine: this._refine,
                                instantSearchInstance: c,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.results,
                                i = t.state,
                                a = t.instantSearchInstance;
                            e({
                                createURL: this._createURL(i),
                                items: this._prepareItems(i),
                                hasNoResults: 0 === r.nbHits,
                                refine: this._refine,
                                instantSearchInstance: a,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.clearRefinements(r)
                        }
                    }
                }
        }

        function i(e, t, n) {
            var r = e.getNumericRefinements(t);
            return void 0 !== n.start && void 0 !== n.end && n.start === n.end ? o(r, "=", n.start) : void 0 !== n.start ? o(r, ">=", n.start) : void 0 !== n.end ? o(r, "<=", n.end) : void 0 === n.start && void 0 === n.end ? 0 === Object.keys(r).length : void 0
        }

        function a(e, t, n, r) {
            var a = e,
                s = JSON.parse(window.decodeURI(r)),
                u = a.getNumericRefinements(t);
            if (void 0 === s.start && void 0 === s.end) return a.clearRefinements(t);
            if (i(a, t, s) || (a = a.clearRefinements(t)), void 0 !== s.start && void 0 !== s.end) {
                if (s.start > s.end) throw new Error("option.start should be > to option.end");
                if (s.start === s.end) return a = o(u, "=", s.start) ? a.removeNumericRefinement(t, "=", s.start) : a.addNumericRefinement(t, "=", s.start)
            }
            return void 0 !== s.start && (a = o(u, ">=", s.start) ? a.removeNumericRefinement(t, ">=", s.start) : a.addNumericRefinement(t, ">=", s.start)), void 0 !== s.end && (a = o(u, "<=", s.end) ? a.removeNumericRefinement(t, "<=", s.end) : a.addNumericRefinement(t, "<=", s.end)), a.page = 0, a
        }

        function o(e, t, n) {
            var r = void 0 !== e[t],
                i = (0, u.default)(e[t], n);
            return r && i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var s = n(102),
            u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            c = n(0),
            l = "Usage:\nvar customNumericRefinementList = connectNumericRefinementList(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   hasNoResults,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  //  }\n});\nsearch.addWidget(\n  customNumericRefinementList({\n    attributeName,\n    options,\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectNumericRefinementList.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            return (0, a.checkRendering)(e, o),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = n.attributeName,
                        a = n.options,
                        s = n.operator,
                        u = void 0 === s ? "=" : s;
                    if (!i || !a) throw new Error(o);
                    return {
                        getConfiguration: function(e, t) {
                            return this._getRefinedValue(t) ? {
                                numericRefinements: r({}, i, r({}, u, [this._getRefinedValue(t)]))
                            } : {}
                        },
                        init: function(t) {
                            var r = t.helper,
                                o = t.instantSearchInstance;
                            this._refine = function(e) {
                                r.clearRefinements(i), void 0 !== e && "undefined" !== e && r.addNumericRefinement(i, u, e), r.search()
                            }, e({
                                currentRefinement: this._getRefinedValue(r.state),
                                options: a,
                                refine: this._refine,
                                hasNoResults: !0,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.helper,
                                i = t.results,
                                o = t.instantSearchInstance;
                            e({
                                currentRefinement: this._getRefinedValue(r.state),
                                options: a,
                                refine: this._refine,
                                hasNoResults: 0 === i.nbHits,
                                instantSearchInstance: o,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.removeNumericRefinement(i)
                        },
                        _getRefinedValue: function(e) {
                            return e && e.numericRefinements && void 0 !== e.numericRefinements[i] && void 0 !== e.numericRefinements[i][u] && void 0 !== e.numericRefinements[i][u][0] ? e.numericRefinements[i][u][0] : a[0].value
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(0),
            o = "Usage:\nvar customNumericSelector = connectNumericSelector(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   currentRefinement,\n  //   options,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customNumericSelector({\n    attributeName,\n    options,\n    [ operator = '=' ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectNumericSelector.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, a),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.maxPages;
                    return {
                        init: function(t) {
                            var r = t.helper,
                                i = t.createURL,
                                a = t.instantSearchInstance;
                            this.refine = function(e) {
                                r.setPage(e), r.search()
                            }, this.createURL = function(e) {
                                return function(t) {
                                    return i(e.setPage(t))
                                }
                            }, e({
                                createURL: this.createURL(r.state),
                                currentRefinement: r.getPage() || 0,
                                nbHits: 0,
                                nbPages: 0,
                                refine: this.refine,
                                widgetParams: n,
                                instantSearchInstance: a
                            }, !0)
                        },
                        getMaxPage: function(e) {
                            var t = e.nbPages;
                            return void 0 !== r ? Math.min(r, t) : t
                        },
                        render: function(t) {
                            var r = t.results,
                                i = t.state,
                                a = t.instantSearchInstance;
                            e({
                                createURL: this.createURL(i),
                                currentRefinement: i.page,
                                refine: this.refine,
                                nbHits: r.nbHits,
                                nbPages: this.getMaxPage(r),
                                widgetParams: n,
                                instantSearchInstance: a
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = "Usage:\nvar customPagination = connectPagination(function render(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   currentRefinement,\n  //   nbHits,\n  //   nbPages,\n  //   refine,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customPagination({\n    [ maxPages ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectPagination.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, s),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName;
                    if (!r) throw new Error(s);
                    return {
                        getConfiguration: function() {
                            return {
                                facets: [r]
                            }
                        },
                        _generateRanges: function(e) {
                            var t = e.getFacetStats(r);
                            return (0, o.default)(t)
                        },
                        _extractRefinedRange: function(e) {
                            var t = e.getRefinements(r),
                                n = void 0,
                                i = void 0;
                            return 0 === t.length ? [] : (t.forEach(function(e) {
                                -1 !== e.operator.indexOf(">") ? n = Math.floor(e.value[0]) : -1 !== e.operator.indexOf("<") && (i = Math.ceil(e.value[0]))
                            }), [{
                                from: n,
                                to: i,
                                isRefined: !0
                            }])
                        },
                        _refine: function(e, t) {
                            var n = t.from,
                                i = t.to,
                                a = this._extractRefinedRange(e);
                            e.clearRefinements(r), 0 !== a.length && a[0].from === n && a[0].to === i || ("undefined" !== typeof n && e.addNumericRefinement(r, ">=", Math.floor(n)), "undefined" !== typeof i && e.addNumericRefinement(r, "<=", Math.ceil(i))), e.search()
                        },
                        init: function(t) {
                            var r = this,
                                i = t.helper,
                                a = t.instantSearchInstance;
                            this.refine = function(e) {
                                r._refine(i, e)
                            }, e({
                                instantSearchInstance: a,
                                items: [],
                                refine: this.refine,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var i = t.results,
                                a = t.helper,
                                o = t.state,
                                s = t.createURL,
                                u = t.instantSearchInstance,
                                c = void 0;
                            i && i.hits && i.hits.length > 0 ? (c = this._extractRefinedRange(a), 0 === c.length && (c = this._generateRanges(i))) : c = [], c.map(function(e) {
                                var t = o.clearRefinements(r);
                                return e.isRefined || (void 0 !== e.from && (t = t.addNumericRefinement(r, ">=", Math.floor(e.from))), void 0 !== e.to && (t = t.addNumericRefinement(r, "<=", Math.ceil(e.to)))), e.url = s(t), e
                            }), e({
                                items: c,
                                refine: this.refine,
                                widgetParams: n,
                                instantSearchInstance: u
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.removeFacetRefinement(r).removeFacet(r)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = n(395),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            s = "Usage:\nvar customPriceRanges = connectToggle(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customPriceRanges({\n    attributeName,\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectPriceRanges.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e, t) {
            return (0, s.checkRendering)(e, c),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = n.attributeName,
                        s = n.operator,
                        f = void 0 === s ? "or" : s,
                        p = n.limit,
                        d = void 0 === p ? 10 : p,
                        h = n.showMoreLimit,
                        m = n.sortBy,
                        v = void 0 === m ? ["isRefined", "count:desc", "name:asc"] : m,
                        g = n.escapeFacetValues,
                        y = void 0 !== g && g;
                    l({
                        attributeName: a,
                        operator: f,
                        usage: c,
                        limit: d,
                        showMoreLimit: h
                    });
                    var b = function(e) {
                            var t = e.name,
                                n = i(e, ["name"]);
                            return o({}, n, {
                                label: t,
                                value: t,
                                highlighted: t
                            })
                        },
                        _ = function(t) {
                            var r = t.items,
                                i = t.state,
                                o = t.createURL,
                                s = t.helperSpecializedSearchFacetValues,
                                u = t.refine,
                                c = t.isFromSearch,
                                l = t.isFirstSearch,
                                f = t.isShowingMore,
                                p = t.toggleShowMore,
                                d = t.hasExhaustiveItems,
                                m = t.instantSearchInstance,
                                v = function(e) {
                                    return o(i.toggleRefinement(a, e))
                                },
                                g = s && s(i, o, s, u, m);
                            e({
                                createURL: v,
                                items: r,
                                refine: u,
                                searchForItems: g,
                                instantSearchInstance: m,
                                isFromSearch: c,
                                canRefine: c || r.length > 0,
                                widgetParams: n,
                                isShowingMore: f,
                                canToggleShowMore: !!h && (f || !d),
                                toggleShowMore: p,
                                hasExhaustiveItems: d
                            }, l)
                        },
                        w = void 0,
                        P = void 0,
                        R = void 0,
                        x = function(e) {
                            return function(t, n, r, s, c) {
                                return function(l) {
                                    if ("" === l && w) _({
                                        items: w,
                                        state: t,
                                        createURL: n,
                                        helperSpecializedSearchFacetValues: r,
                                        refine: s,
                                        isFromSearch: !1,
                                        isFirstSearch: !1,
                                        instantSearchInstance: c,
                                        hasExhaustiveItems: !1
                                    });
                                    else {
                                        var f = {
                                            highlightPreTag: y ? u.tagConfig.highlightPreTag : void 0,
                                            highlightPostTag: y ? u.tagConfig.highlightPostTag : void 0
                                        };
                                        e.searchForFacetValues(a, l, d, f).then(function(e) {
                                            var a = y ? (0, u.escapeFacets)(e.facetHits) : e.facetHits,
                                                l = a.map(function(e) {
                                                    var t = e.value,
                                                        n = i(e, ["value"]);
                                                    return o({}, n, {
                                                        value: t,
                                                        label: t
                                                    })
                                                });
                                            _({
                                                items: l,
                                                state: t,
                                                createURL: n,
                                                helperSpecializedSearchFacetValues: r,
                                                refine: s,
                                                isFromSearch: !0,
                                                isFirstSearch: !1,
                                                instantSearchInstance: c,
                                                hasExhaustiveItems: !1
                                            })
                                        })
                                    }
                                }
                            }
                        };
                    return {
                        isShowingMore: !1,
                        toggleShowMore: function() {},
                        cachedToggleShowMore: function() {
                            this.toggleShowMore()
                        },
                        createToggleShowMore: function(e) {
                            var t = this;
                            return function() {
                                t.isShowingMore = !t.isShowingMore, t.render(e)
                            }
                        },
                        getLimit: function() {
                            return this.isShowingMore ? h : d
                        },
                        getConfiguration: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = r({}, "and" === f ? "facets" : "disjunctiveFacets", [a]);
                            if (void 0 !== d) {
                                var n = e.maxValuesPerFacet || 0;
                                t.maxValuesPerFacet = void 0 === h ? Math.max(n, d) : Math.max(n, d, h)
                            }
                            return t
                        },
                        init: function(e) {
                            var t = e.helper,
                                n = e.createURL,
                                r = e.instantSearchInstance;
                            this.cachedToggleShowMore = this.cachedToggleShowMore.bind(this), R = function(e) {
                                return t.toggleRefinement(a, e).search()
                            }, P = x(t), _({
                                items: [],
                                state: t.state,
                                createURL: n,
                                helperSpecializedSearchFacetValues: P,
                                refine: R,
                                isFromSearch: !1,
                                isFirstSearch: !0,
                                instantSearchInstance: r,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                hasExhaustiveItems: !0
                            })
                        },
                        render: function(e) {
                            var t = e.results,
                                n = e.state,
                                r = e.createURL,
                                i = e.instantSearchInstance,
                                o = t.getFacetValues(a, {
                                    sortBy: v
                                }),
                                s = o.slice(0, this.getLimit()).map(b),
                                u = n.getQueryParameter("maxValuesPerFacet"),
                                c = this.getLimit(),
                                l = u > c ? o.length <= c : o.length < c;
                            w = s, this.toggleShowMore = this.createToggleShowMore(e), _({
                                items: s,
                                state: n,
                                createURL: r,
                                helperSpecializedSearchFacetValues: P,
                                refine: R,
                                isFromSearch: !1,
                                isFirstSearch: !1,
                                instantSearchInstance: i,
                                isShowingMore: this.isShowingMore,
                                toggleShowMore: this.cachedToggleShowMore,
                                hasExhaustiveItems: l
                            })
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), "and" === f ? n.removeFacetRefinement(a).removeFacet(a) : n.removeDisjunctiveFacetRefinement(a).removeDisjunctiveFacet(a)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkUsage = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var s = n(0),
            u = n(110),
            c = "Usage:\nvar customRefinementList = connectRefinementList(function render(params) {\n  // params = {\n  //   isFromSearch,\n  //   createURL,\n  //   items,\n  //   refine,\n  //   searchForItems,\n  //   instantSearchInstance,\n  //   canRefine,\n  //   toggleShowMore,\n  //   isShowingMore,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customRefinementList({\n    attributeName,\n    [ operator = 'or' ],\n    [ limit ],\n    [ showMoreLimit ],\n    [ sortBy = ['isRefined', 'count:desc', 'name:asc'] ],\n    [ escapeFacetValues = false ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectRefinementList.html\n",
            l = t.checkUsage = function(e) {
                var t = e.attributeName,
                    n = e.operator,
                    r = e.usageMessage,
                    i = e.showMoreLimit,
                    a = e.limit,
                    o = void 0 === t,
                    s = !/^(and|or)$/.test(n),
                    u = void 0 !== i && (isNaN(i) || i < a);
                if (o || s || u) throw new Error(r)
            }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, a),
                function() {
                    function n(e) {
                        return function() {
                            e.setQuery(""), e.search()
                        }
                    }
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = r.queryHook;
                    return {
                        _clear: function() {},
                        _cachedClear: function() {
                            this._clear()
                        },
                        init: function(t) {
                            var a = t.helper,
                                o = t.onHistoryChange,
                                s = t.instantSearchInstance;
                            this._cachedClear = this._cachedClear.bind(this), this._clear = n(a), this._refine = function() {
                                var e = void 0,
                                    t = function(t) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        t !== a.state.query && (e = a.state.query, a.setQuery(t)), n && void 0 !== e && e !== t && a.search()
                                    };
                                return i ? function(e) {
                                    return i(e, t)
                                } : t
                            }(), this._onHistoryChange = o, e({
                                query: a.state.query,
                                onHistoryChange: this._onHistoryChange,
                                refine: this._refine,
                                clear: this._cachedClear,
                                widgetParams: r,
                                instantSearchInstance: s
                            }, !0)
                        },
                        render: function(t) {
                            var i = t.helper,
                                a = t.instantSearchInstance,
                                o = t.searchMetadata;
                            this._clear = n(i), e({
                                query: i.state.query,
                                onHistoryChange: this._onHistoryChange,
                                refine: this._refine,
                                clear: this._cachedClear,
                                widgetParams: r,
                                instantSearchInstance: a,
                                isSearchStalled: o.isSearchStalled
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.setQuery("")
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = "Usage:\nvar customSearchBox = connectSearchBox(function render(params, isFirstRendering) {\n  // params = {\n  //   query,\n  //   onHistoryChange,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  //   clear,\n  // }\n});\nsearch.addWidget(\n  customSearchBox({\n    [ queryHook ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectSearchBox.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, o.checkRendering)(e, s),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.indices;
                    if (!r) throw new Error(s);
                    var i = r.map(function(e) {
                        return {
                            label: e.label,
                            value: e.name
                        }
                    });
                    return {
                        init: function(t) {
                            var o = t.helper,
                                s = t.instantSearchInstance,
                                u = o.getIndex();
                            if (!(0, a.default)(r, function(e) {
                                    return e.name === u
                                })) throw new Error("[sortBySelector]: Index " + u + " not present in `indices`");
                            this.initialIndex = u, this.setIndex = function(e) {
                                return o.setIndex(e).search()
                            }, e({
                                currentRefinement: u,
                                options: i,
                                refine: this.setIndex,
                                hasNoResults: !0,
                                widgetParams: n,
                                instantSearchInstance: s
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.helper,
                                a = t.results,
                                o = t.instantSearchInstance;
                            e({
                                currentRefinement: r.getIndex(),
                                options: i,
                                refine: this.setIndex,
                                hasNoResults: 0 === a.nbHits,
                                widgetParams: n,
                                instantSearchInstance: o
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.setIndex(this.initialIndex)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(11),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            o = n(0),
            s = "Usage:\nvar customSortBySelector = connectSortBySelector(function render(params, isFirstRendering) {\n  // params = {\n  //   currentRefinement,\n  //   options,\n  //   refine,\n  //   hasNoResults,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customSortBySelector({ indices })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectSortBySelector.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, a),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName,
                        i = n.max,
                        o = void 0 === i ? 5 : i;
                    if (!r) throw new Error(a);
                    return {
                        getConfiguration: function() {
                            return {
                                disjunctiveFacets: [r]
                            }
                        },
                        init: function(t) {
                            var i = t.helper,
                                a = t.createURL,
                                o = t.instantSearchInstance;
                            this._toggleRefinement = this._toggleRefinement.bind(this, i), this._createURL = function(e) {
                                return function(t) {
                                    return a(e.toggleRefinement(r, t))
                                }
                            }, e({
                                instantSearchInstance: o,
                                items: [],
                                hasNoResults: !0,
                                refine: this._toggleRefinement,
                                createURL: this._createURL(i.state),
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            for (var i = t.helper, a = t.results, s = t.state, u = t.instantSearchInstance, c = [], l = {}, f = o; f >= 0; --f) l[f] = 0;
                            a.getFacetValues(r).forEach(function(e) {
                                var t = Math.round(e.name);
                                if (t && !(t > o))
                                    for (var n = t; n >= 1; --n) l[n] += e.count
                            });
                            for (var p = this._getRefinedStar(i), d = o - 1; d >= 1; --d) {
                                var h = l[d];
                                if (!p || d === p || 0 !== h) {
                                    for (var m = [], v = 1; v <= o; ++v) m.push(v <= d);
                                    c.push({
                                        stars: m,
                                        name: String(d),
                                        value: String(d),
                                        count: h,
                                        isRefined: p === d
                                    })
                                }
                            }
                            e({
                                instantSearchInstance: u,
                                items: c,
                                hasNoResults: 0 === a.nbHits,
                                refine: this._toggleRefinement,
                                createURL: this._createURL(s),
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.removeDisjunctiveFacetRefinement(r).removeDisjunctiveFacet(r)
                        },
                        _toggleRefinement: function(e, t) {
                            var n = this._getRefinedStar(e) === Number(t);
                            if (e.clearRefinements(r), !n)
                                for (var i = Number(t); i <= o; ++i) e.addDisjunctiveFacetRefinement(r, i);
                            e.search()
                        },
                        _getRefinedStar: function(e) {
                            var t = void 0;
                            return e.getRefinements(r).forEach(function(e) {
                                (!t || Number(e.value) < t) && (t = Number(e.value))
                            }), t
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = "Usage:\nvar customStarRating = connectStarRating(function render(params, isFirstRendering) {\n  // params = {\n  //   items,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   hasNoResults,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customStarRatingI({\n    attributeName,\n    [ max=5 ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectStarRating.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, a),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        init: function(t) {
                            var r = t.helper,
                                i = t.instantSearchInstance;
                            e({
                                instantSearchInstance: i,
                                hitsPerPage: r.state.hitsPerPage,
                                nbHits: 0,
                                nbPages: 0,
                                page: r.state.page,
                                processingTimeMS: -1,
                                query: r.state.query,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var r = t.results,
                                i = t.instantSearchInstance;
                            e({
                                instantSearchInstance: i,
                                hitsPerPage: r.hitsPerPage,
                                nbHits: r.nbHits,
                                nbPages: r.nbPages,
                                page: r.page,
                                processingTimeMS: r.processingTimeMS,
                                query: r.query,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function() {
                            t()
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = "Usage:\nvar customStats = connectState(function render(params, isFirstRendering) {\n  // params = {\n  //   instantSearchInstance,\n  //   hitsPerPage,\n  //   nbHits,\n  //   nbPages,\n  //   page,\n  //   processingTimeMS,\n  //   query,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(customStats());\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectStats.html"
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (0, i.checkRendering)(e, s),
                function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.attributeName,
                        a = n.label,
                        u = n.values,
                        c = void 0 === u ? {
                            on: !0,
                            off: void 0
                        } : u;
                    if (!r || !a) throw new Error(s);
                    var l = void 0 !== c.off,
                        f = c ? (0, i.escapeRefinement)(c.on) : void 0,
                        p = c ? (0, i.escapeRefinement)(c.off) : void 0;
                    return {
                        getConfiguration: function() {
                            return {
                                disjunctiveFacets: [r]
                            }
                        },
                        _toggleRefinement: function(e) {
                            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).isRefined ? (e.removeDisjunctiveFacetRefinement(r, f), l && e.addDisjunctiveFacetRefinement(r, p)) : (l && e.removeDisjunctiveFacetRefinement(r, p), e.addDisjunctiveFacetRefinement(r, f)), e.search()
                        },
                        init: function(t) {
                            var i = this,
                                o = t.state,
                                s = t.helper,
                                u = t.createURL,
                                c = t.instantSearchInstance;
                            this._createURL = function(e) {
                                return function() {
                                    return u(o.removeDisjunctiveFacetRefinement(r, e ? f : p).addDisjunctiveFacetRefinement(r, e ? p : f))
                                }
                            }, this.toggleRefinement = function(e) {
                                i._toggleRefinement(s, e)
                            };
                            var d = o.isDisjunctiveFacetRefined(r, f);
                            l && (d || s.addDisjunctiveFacetRefinement(r, p));
                            var h = {
                                    name: a,
                                    isRefined: d,
                                    count: 0
                                },
                                m = {
                                    name: a,
                                    isRefined: l && !d,
                                    count: 0
                                },
                                v = {
                                    name: a,
                                    isRefined: d,
                                    count: null,
                                    onFacetValue: h,
                                    offFacetValue: m
                                };
                            e({
                                value: v,
                                createURL: this._createURL(v.isRefined),
                                refine: this.toggleRefinement,
                                instantSearchInstance: c,
                                widgetParams: n
                            }, !0)
                        },
                        render: function(t) {
                            var s = t.helper,
                                u = t.results,
                                c = t.state,
                                d = t.instantSearchInstance,
                                h = s.state.isDisjunctiveFacetRefined(r, f),
                                m = void 0 !== p && p,
                                v = u.getFacetValues(r),
                                g = (0, o.default)(v, function(e) {
                                    return e.name === (0, i.unescapeRefinement)(f)
                                }),
                                y = {
                                    name: a,
                                    isRefined: void 0 !== g && g.isRefined,
                                    count: void 0 === g ? null : g.count
                                },
                                b = l ? (0, o.default)(v, function(e) {
                                    return e.name === (0, i.unescapeRefinement)(m)
                                }) : void 0,
                                _ = {
                                    name: a,
                                    isRefined: void 0 !== b && b.isRefined,
                                    count: void 0 === b ? v.reduce(function(e, t) {
                                        return e + t.count
                                    }, 0) : b.count
                                },
                                w = h ? _ : y,
                                P = {
                                    name: a,
                                    isRefined: h,
                                    count: void 0 === w ? null : w.count,
                                    onFacetValue: y,
                                    offFacetValue: _
                                };
                            e({
                                value: P,
                                state: c,
                                createURL: this._createURL(P.isRefined),
                                refine: this.toggleRefinement,
                                helper: s,
                                instantSearchInstance: d,
                                widgetParams: n
                            }, !1)
                        },
                        dispose: function(e) {
                            var n = e.state;
                            return t(), n.removeDisjunctiveFacetRefinement(r).removeDisjunctiveFacet(r)
                        }
                    }
                }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var i = n(0),
            a = n(11),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            s = "Usage:\nvar customToggle = connectToggle(function render(params, isFirstRendering) {\n  // params = {\n  //   value,\n  //   createURL,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customToggle({\n    attributeName,\n    label,\n    [ values = {on: true, off: undefined} ]\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/connectors/connectToggle.html\n"
    }, function(e, t, n) {
        function r(e) {
            return i(e, a | o)
        }
        var i = n(144),
            a = 1,
            o = 4;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = n(10),
            d = r(p),
            h = n(16),
            m = r(h),
            v = n(205),
            g = r(v),
            y = n(3),
            b = r(y),
            _ = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "renderWithResults",
                    value: function() {
                        var e = this,
                            t = (0, d.default)(this.props.hits, function(t, n) {
                                var r = s({}, t, {
                                    __hitIndex: n
                                });
                                return f.default.createElement(m.default, s({
                                    data: r,
                                    key: r.objectID,
                                    rootProps: {
                                        className: e.props.cssClasses.item
                                    },
                                    templateKey: "item"
                                }, e.props.templateProps))
                            });
                        return f.default.createElement("div", {
                            className: this.props.cssClasses.root
                        }, t)
                    }
                }, {
                    key: "renderAllResults",
                    value: function() {
                        var e = (0, b.default)(this.props.cssClasses.root, this.props.cssClasses.allItems);
                        return f.default.createElement(m.default, s({
                            data: this.props.results,
                            rootProps: {
                                className: e
                            },
                            templateKey: "allItems"
                        }, this.props.templateProps))
                    }
                }, {
                    key: "renderNoResults",
                    value: function() {
                        var e = (0, b.default)(this.props.cssClasses.root, this.props.cssClasses.empty);
                        return f.default.createElement(m.default, s({
                            data: this.props.results,
                            rootProps: {
                                className: e
                            },
                            templateKey: "empty"
                        }, this.props.templateProps))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.results.hits.length > 0,
                            t = (0, g.default)(this.props, "templateProps.templates.allItems");
                        return e ? t ? this.renderAllResults() : this.renderWithResults() : this.renderNoResults()
                    }
                }]), t
            }(l.Component);
        _.defaultProps = {
            results: {
                hits: []
            }
        }, t.default = _
    }, function(e, t, n) {
        function r(e, t) {
            return null != e && a(e, t, i)
        }
        var i = n(417),
            a = n(141);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return null;
            if (!0 === e) return s;
            var t = i({}, e);
            return e.templates || (t.templates = s.templates), e.limit || (t.limit = s.limit), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = r;
        var a = n(425),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            s = {
                templates: o.default,
                limit: 100
            }
    }, function(e, t, n) {
        var r = n(437),
            i = r();
        e.exports = i
    }, function(e, t, n) {
        n(209), n(210), e.exports = n(211)
    }, function(e, t) {}, function(e, t) {}, function(e, t, n) {
        "use strict";
        var r = n(212),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        e.exports = i.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n(213);
        var a = n(214),
            o = i(a),
            s = n(75),
            u = i(s),
            c = n(357),
            l = i(c),
            f = n(184),
            p = i(f),
            d = n(185),
            h = r(d),
            m = n(399),
            v = r(m),
            g = (0, o.default)(l.default);
        g.createQueryString = u.default.url.getQueryStringFromState, g.connectors = h, g.widgets = v, g.version = p.default, t.default = g
    }, function(e, t, n) {
        "use strict";
        Object.freeze || (Object.freeze = function(e) {
            if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
            return e
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return new(i.apply(e, [null].concat(n)))
            };
            return t.__proto__ = e, t.prototype = e.prototype, t
        }
        var i = Function.prototype.bind;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            e.addAlgoliaAgent ? o(e) || e.addAlgoliaAgent("JS Helper " + y) : console.log("Please upgrade to the newest version of the JS Client."), this.setClient(e);
            var r = n || {};
            r.index = t, this.state = s.make(r), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
        }

        function i(e) {
            if (e < 0) throw new Error("Page requested below 0.");
            return this._change(this.state.setPage(e)), this
        }

        function a() {
            return this.state.page
        }

        function o(e) {
            var t = e._ua;
            return !!t && -1 !== t.indexOf("JS Helper")
        }
        var s = n(76),
            u = n(159),
            c = n(344),
            l = n(347),
            f = n(174),
            p = n(105),
            d = n(152),
            h = n(14),
            m = n(27),
            v = n(10),
            g = n(106),
            y = n(179);
        f.inherits(r, p.EventEmitter), r.prototype.search = function() {
            return this._search(), this
        }, r.prototype.getQuery = function() {
            var e = this.state;
            return l._getHitsSearchParams(e)
        }, r.prototype.searchOnce = function(e, t) {
            var n = e ? this.state.setQueryParameters(e) : this.state,
                r = l._getQueries(n.index, n),
                i = this;
            return this._currentNbQueries++, this.emit("searchOnce", n), t ? this.client.search(r, function(e, r) {
                i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e ? t(e, null, n) : t(e, new u(n, r.results), n)
            }) : this.client.search(r).then(function(e) {
                return i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), {
                    content: new u(n, e.results),
                    state: n,
                    _originalResponse: e
                }
            }, function(e) {
                throw i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e
            })
        }, r.prototype.searchForFacetValues = function(e, t, n, r) {
            var i = this.state.setQueryParameters(r || {}),
                a = this.client.initIndex(i.index),
                o = i.isDisjunctiveFacet(e),
                s = l.getSearchForFacetQuery(e, t, n, i);
            this._currentNbQueries++;
            var u = this;
            return this.emit("searchForFacetValues", i, e, t), a.searchForFacetValues(s).then(function(t) {
                return u._currentNbQueries--, 0 === u._currentNbQueries && u.emit("searchQueueEmpty"), t.facetHits = h(t.facetHits, function(t) {
                    t.isRefined = o ? i.isDisjunctiveFacetRefined(e, t.value) : i.isFacetRefined(e, t.value)
                }), t
            }, function(e) {
                throw u._currentNbQueries--, 0 === u._currentNbQueries && u.emit("searchQueueEmpty"), e
            })
        }, r.prototype.setQuery = function(e) {
            return this._change(this.state.setPage(0).setQuery(e)), this
        }, r.prototype.clearRefinements = function(e) {
            return this._change(this.state.setPage(0).clearRefinements(e)), this
        }, r.prototype.clearTags = function() {
            return this._change(this.state.setPage(0).clearTags()), this
        }, r.prototype.addDisjunctiveFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).addDisjunctiveFacetRefinement(e, t)), this
        }, r.prototype.addDisjunctiveRefine = function() {
            return this.addDisjunctiveFacetRefinement.apply(this, arguments)
        }, r.prototype.addHierarchicalFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).addHierarchicalFacetRefinement(e, t)), this
        }, r.prototype.addNumericRefinement = function(e, t, n) {
            return this._change(this.state.setPage(0).addNumericRefinement(e, t, n)), this
        }, r.prototype.addFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).addFacetRefinement(e, t)), this
        }, r.prototype.addRefine = function() {
            return this.addFacetRefinement.apply(this, arguments)
        }, r.prototype.addFacetExclusion = function(e, t) {
            return this._change(this.state.setPage(0).addExcludeRefinement(e, t)), this
        }, r.prototype.addExclude = function() {
            return this.addFacetExclusion.apply(this, arguments)
        }, r.prototype.addTag = function(e) {
            return this._change(this.state.setPage(0).addTagRefinement(e)), this
        }, r.prototype.removeNumericRefinement = function(e, t, n) {
            return this._change(this.state.setPage(0).removeNumericRefinement(e, t, n)), this
        }, r.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).removeDisjunctiveFacetRefinement(e, t)), this
        }, r.prototype.removeDisjunctiveRefine = function() {
            return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
        }, r.prototype.removeHierarchicalFacetRefinement = function(e) {
            return this._change(this.state.setPage(0).removeHierarchicalFacetRefinement(e)), this
        }, r.prototype.removeFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).removeFacetRefinement(e, t)), this
        }, r.prototype.removeRefine = function() {
            return this.removeFacetRefinement.apply(this, arguments)
        }, r.prototype.removeFacetExclusion = function(e, t) {
            return this._change(this.state.setPage(0).removeExcludeRefinement(e, t)), this
        }, r.prototype.removeExclude = function() {
            return this.removeFacetExclusion.apply(this, arguments)
        }, r.prototype.removeTag = function(e) {
            return this._change(this.state.setPage(0).removeTagRefinement(e)), this
        }, r.prototype.toggleFacetExclusion = function(e, t) {
            return this._change(this.state.setPage(0).toggleExcludeFacetRefinement(e, t)), this
        }, r.prototype.toggleExclude = function() {
            return this.toggleFacetExclusion.apply(this, arguments)
        }, r.prototype.toggleRefinement = function(e, t) {
            return this.toggleFacetRefinement(e, t)
        }, r.prototype.toggleFacetRefinement = function(e, t) {
            return this._change(this.state.setPage(0).toggleFacetRefinement(e, t)), this
        }, r.prototype.toggleRefine = function() {
            return this.toggleFacetRefinement.apply(this, arguments)
        }, r.prototype.toggleTag = function(e) {
            return this._change(this.state.setPage(0).toggleTagRefinement(e)), this
        }, r.prototype.nextPage = function() {
            return this.setPage(this.state.page + 1)
        }, r.prototype.previousPage = function() {
            return this.setPage(this.state.page - 1)
        }, r.prototype.setCurrentPage = i, r.prototype.setPage = i, r.prototype.setIndex = function(e) {
            return this._change(this.state.setPage(0).setIndex(e)), this
        }, r.prototype.setQueryParameter = function(e, t) {
            return this._change(this.state.setPage(0).setQueryParameter(e, t)), this
        }, r.prototype.setState = function(e) {
            return this._change(s.make(e)), this
        }, r.prototype.getState = function(e) {
            return void 0 === e ? this.state : this.state.filter(e)
        }, r.prototype.getStateAsQueryString = function(e) {
            var t = e && e.filters || ["query", "attribute:*"],
                n = this.getState(t);
            return g.getQueryStringFromState(n, e)
        }, r.getConfigurationFromQueryString = g.getStateFromQueryString, r.getForeignConfigurationInQueryString = g.getUnrecognizedParametersInQueryString, r.prototype.setStateFromQueryString = function(e, t) {
            var n = t && t.triggerChange || !1,
                r = g.getStateFromQueryString(e, t),
                i = this.state.setQueryParameters(r);
            n ? this.setState(i) : this.overrideStateWithoutTriggeringChangeEvent(i)
        }, r.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
            return this.state = new s(e), this
        }, r.prototype.isRefined = function(e, t) {
            if (this.state.isConjunctiveFacet(e)) return this.state.isFacetRefined(e, t);
            if (this.state.isDisjunctiveFacet(e)) return this.state.isDisjunctiveFacetRefined(e, t);
            throw new Error(e + " is not properly defined in this helper configuration(use the facets or disjunctiveFacets keys to configure it)")
        }, r.prototype.hasRefinements = function(e) {
            return !m(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
        }, r.prototype.isExcluded = function(e, t) {
            return this.state.isExcludeRefined(e, t)
        }, r.prototype.isDisjunctiveRefined = function(e, t) {
            return this.state.isDisjunctiveFacetRefined(e, t)
        }, r.prototype.hasTag = function(e) {
            return this.state.isTagRefined(e)
        }, r.prototype.isTagRefined = function() {
            return this.hasTagRefinements.apply(this, arguments)
        }, r.prototype.getIndex = function() {
            return this.state.index
        }, r.prototype.getCurrentPage = a, r.prototype.getPage = a, r.prototype.getTags = function() {
            return this.state.tagRefinements
        }, r.prototype.getQueryParameter = function(e) {
            return this.state.getQueryParameter(e)
        }, r.prototype.getRefinements = function(e) {
            var t = [];
            if (this.state.isConjunctiveFacet(e)) {
                var n = this.state.getConjunctiveRefinements(e);
                h(n, function(e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                });
                var r = this.state.getExcludeRefinements(e);
                h(r, function(e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                })
            } else if (this.state.isDisjunctiveFacet(e)) {
                var i = this.state.getDisjunctiveRefinements(e);
                h(i, function(e) {
                    t.push({
                        value: e,
                        type: "disjunctive"
                    })
                })
            }
            var a = this.state.getNumericRefinements(e);
            return h(a, function(e, n) {
                t.push({
                    value: e,
                    operator: n,
                    type: "numeric"
                })
            }), t
        }, r.prototype.getNumericRefinement = function(e, t) {
            return this.state.getNumericRefinement(e, t)
        }, r.prototype.getHierarchicalFacetBreadcrumb = function(e) {
            return this.state.getHierarchicalFacetBreadcrumb(e)
        }, r.prototype._search = function() {
            var e = this.state,
                t = l._getQueries(e.index, e),
                n = [{
                    state: e,
                    queriesCount: t.length,
                    helper: this
                }];
            this.emit("search", e, this.lastResults);
            var r = v(this.derivedHelpers, function(t) {
                    var r = t.getModifiedState(e),
                        i = l._getQueries(r.index, r);
                    return n.push({
                        state: r,
                        queriesCount: i.length,
                        helper: t
                    }), t.emit("search", r, t.lastResults), i
                }),
                i = t.concat(d(r)),
                a = this._queryId++;
            this._currentNbQueries++, this.client.search(i, this._dispatchAlgoliaResponse.bind(this, n, a))
        }, r.prototype._dispatchAlgoliaResponse = function(e, t, n, r) {
            if (!(t < this._lastQueryIdReceived))
                if (this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, n) this.emit("error", n), 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                else {
                    0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                    var i = r.results;
                    h(e, function(e) {
                        var t = e.state,
                            n = e.queriesCount,
                            r = e.helper,
                            a = i.splice(0, n),
                            o = r.lastResults = new u(t, a);
                        r.emit("result", o, t)
                    })
                }
        }, r.prototype.containsRefinement = function(e, t, n, r) {
            return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
        }, r.prototype._hasDisjunctiveRefinements = function(e) {
            return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
        }, r.prototype._change = function(e) {
            e !== this.state && (this.state = e, this.emit("change", this.state, this.lastResults))
        }, r.prototype.clearCache = function() {
            return this.client.clearCache(), this
        }, r.prototype.setClient = function(e) {
            return this.client === e ? this : (e.addAlgoliaAgent && !o(e) && e.addAlgoliaAgent("JS Helper " + y), this.client = e, this)
        }, r.prototype.getClient = function() {
            return this.client
        }, r.prototype.derive = function(e) {
            var t = new c(this, e);
            return this.derivedHelpers.push(t), t
        }, r.prototype.detachDerivedHelper = function(e) {
            var t = this.derivedHelpers.indexOf(e);
            if (-1 === t) throw new Error("Derived helper already detached");
            this.derivedHelpers.splice(t, 1)
        }, r.prototype.hasPendingRequests = function() {
            return this._currentNbQueries > 0
        }, e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return a(e) && i(e) == o
        }
        var i = n(17),
            a = n(8),
            o = "[object Arguments]";
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = o.call(e, u),
                n = e[u];
            try {
                e[u] = void 0;
                var r = !0
            } catch (e) {}
            var i = s.call(e);
            return r && (t ? e[u] = n : delete e[u]), i
        }
        var i = n(29),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.toString,
            u = i ? i.toStringTag : void 0;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return i.call(e)
        }
        var r = Object.prototype,
            i = r.toString;
        e.exports = n
    }, function(e, t) {
        function n() {
            return !1
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o(e) && a(e.length) && !!s[i(e)]
        }
        var i = n(17),
            a = n(78),
            o = n(8),
            s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = r
    }, function(e, t, n) {
        (function(e) {
            var r = n(117),
                i = "object" == typeof t && t && !t.nodeType && t,
                a = i && "object" == typeof e && e && !e.nodeType && e,
                o = a && a.exports === i,
                s = o && r.process,
                u = function() {
                    try {
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = u
        }).call(t, n(77)(e))
    }, function(e, t, n) {
        var r = n(119),
            i = r(Object.keys, Object);
        e.exports = i
    }, function(e, t, n) {
        var r = n(21),
            i = n(224),
            a = n(22),
            o = n(251),
            s = a(function(e) {
                var t = r(e, o);
                return t.length && t[0] === e[0] ? i(t) : []
            });
        e.exports = s
    }, function(e, t, n) {
        function r(e, t, n) {
            for (var r = n ? o : a, f = e[0].length, p = e.length, d = p, h = Array(p), m = 1 / 0, v = []; d--;) {
                var g = e[d];
                d && t && (g = s(g, u(t))), m = l(g.length, m), h[d] = !n && (t || f >= 120 && g.length >= 120) ? new i(d && g) : void 0
            }
            g = e[0];
            var y = -1,
                b = h[0];
            e: for (; ++y < f && v.length < m;) {
                var _ = g[y],
                    w = t ? t(_) : _;
                if (_ = n || 0 !== _ ? _ : 0, !(b ? c(b, w) : r(v, w, n))) {
                    for (d = p; --d;) {
                        var P = h[d];
                        if (!(P ? c(P, w) : r(e[d], w, n))) continue e
                    }
                    b && b.push(w), v.push(_)
                }
            }
            return v
        }
        var i = n(80),
            a = n(83),
            o = n(122),
            s = n(21),
            u = n(79),
            c = n(84),
            l = Math.min;
        e.exports = r
    }, function(e, t, n) {
        function r() {
            this.size = 0, this.__data__ = {
                hash: new i,
                map: new(o || a),
                string: new i
            }
        }
        var i = n(226),
            a = n(54),
            o = n(82);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        var i = n(227),
            a = n(232),
            o = n(233),
            s = n(234),
            u = n(235);
        r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = u, e.exports = r
    }, function(e, t, n) {
        function r() {
            this.__data__ = i ? i(null) : {}, this.size = 0
        }
        var i = n(53);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return !(!o(e) || a(e)) && (i(e) ? h : c).test(s(e))
        }
        var i = n(20),
            a = n(229),
            o = n(6),
            s = n(120),
            u = /[\\^$.*+?()[\]{}|]/g,
            c = /^\[object .+?Constructor\]$/,
            l = Function.prototype,
            f = Object.prototype,
            p = l.toString,
            d = f.hasOwnProperty,
            h = RegExp("^" + p.call(d).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return !!a && a in e
        }
        var i = n(230),
            a = function() {
                var e = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();
        e.exports = r
    }, function(e, t, n) {
        var r = n(5),
            i = r["__core-js_shared__"];
        e.exports = i
    }, function(e, t) {
        function n(e, t) {
            return null == e ? void 0 : e[t]
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            if (i) {
                var n = t[e];
                return n === a ? void 0 : n
            }
            return s.call(t, e) ? t[e] : void 0
        }
        var i = n(53),
            a = "__lodash_hash_undefined__",
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__;
            return i ? void 0 !== t[e] : o.call(t, e)
        }
        var i = n(53),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = i && void 0 === t ? a : t, this
        }
        var i = n(53),
            a = "__lodash_hash_undefined__";
        e.exports = r
    }, function(e, t) {
        function n() {
            this.__data__ = [], this.size = 0
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = i(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
        }
        var i = n(55),
            a = Array.prototype,
            o = a.splice;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = this.__data__,
                n = i(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        var i = n(55);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(this.__data__, e) > -1
        }
        var i = n(55);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = this.__data__,
                r = i(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
        }
        var i = n(55);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = i(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        var i = n(56);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return i(this, e).get(e)
        }
        var i = n(56);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(this, e).has(e)
        }
        var i = n(56);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = i(this, e),
                r = n.size;
            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
        }
        var i = n(56);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return this.__data__.set(e, r), this
        }
        var r = "__lodash_hash_undefined__";
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return this.__data__.has(e)
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return e !== e
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t, n) {
            for (var r = n - 1, i = e.length; ++r < i;)
                if (e[r] === t) return r;
            return -1
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(124),
            i = n(125),
            a = n(25),
            o = i ? function(e, t) {
                return i(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(t),
                    writable: !0
                })
            } : a;
        e.exports = o
    }, function(e, t, n) {
        function r(e) {
            return i(e) ? e : []
        }
        var i = n(86);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(e, a(t))
        }
        var i = n(44),
            a = n(87);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return function(t, n, r) {
                for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
                    var u = o[e ? s : ++i];
                    if (!1 === n(a[u], u, a)) break
                }
                return t
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return function(n, r) {
                if (null == n) return n;
                if (!i(n)) return e(n, r);
                for (var a = n.length, o = t ? a : -1, s = Object(n);
                    (t ? o-- : ++o < a) && !1 !== r(s[o], o, s););
                return n
            }
        }
        var i = n(13);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = [];
            return i(e, function(e, r, i) {
                t(e, r, i) && n.push(e)
            }), n
        }
        var i = n(45);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            var t = a(e);
            return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
                return n === e || i(n, e, t)
            }
        }
        var i = n(257),
            a = n(268),
            o = n(139);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            var u = n.length,
                c = u,
                l = !r;
            if (null == e) return !c;
            for (e = Object(e); u--;) {
                var f = n[u];
                if (l && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
            }
            for (; ++u < c;) {
                f = n[u];
                var p = f[0],
                    d = e[p],
                    h = f[1];
                if (l && f[2]) {
                    if (void 0 === d && !(p in e)) return !1
                } else {
                    var m = new i;
                    if (r) var v = r(d, h, p, e, t, m);
                    if (!(void 0 === v ? a(h, d, o | s, r, m) : v)) return !1
                }
            }
            return !0
        }
        var i = n(57),
            a = n(89),
            o = 1,
            s = 2;
        e.exports = r
    }, function(e, t, n) {
        function r() {
            this.__data__ = new i, this.size = 0
        }
        var i = n(54);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = this.__data__,
                n = t.delete(e);
            return this.size = t.size, n
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return this.__data__.get(e)
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return this.__data__.has(e)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            var n = this.__data__;
            if (n instanceof i) {
                var r = n.__data__;
                if (!a || r.length < s - 1) return r.push([e, t]), this.size = ++n.size, this;
                n = this.__data__ = new o(r)
            }
            return n.set(e, t), this.size = n.size, this
        }
        var i = n(54),
            a = n(82),
            o = n(81),
            s = 200;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, v, y) {
            var b = c(e),
                _ = c(t),
                w = b ? h : u(e),
                P = _ ? h : u(t);
            w = w == d ? m : w, P = P == d ? m : P;
            var R = w == m,
                x = P == m,
                S = w == P;
            if (S && l(e)) {
                if (!l(t)) return !1;
                b = !0, R = !1
            }
            if (S && !R) return y || (y = new i), b || f(e) ? a(e, t, n, r, v, y) : o(e, t, w, n, r, v, y);
            if (!(n & p)) {
                var j = R && g.call(e, "__wrapped__"),
                    C = x && g.call(t, "__wrapped__");
                if (j || C) {
                    var O = j ? e.value() : e,
                        E = C ? t.value() : t;
                    return y || (y = new i), v(O, E, n, r, y)
                }
            }
            return !!S && (y || (y = new i), s(e, t, n, r, v, y))
        }
        var i = n(57),
            a = n(129),
            o = n(264),
            s = n(265),
            u = n(92),
            c = n(2),
            l = n(39),
            f = n(52),
            p = 1,
            d = "[object Arguments]",
            h = "[object Array]",
            m = "[object Object]",
            v = Object.prototype,
            g = v.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, i, R, S) {
            switch (n) {
                case P:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case w:
                    return !(e.byteLength != t.byteLength || !R(new a(e), new a(t)));
                case p:
                case d:
                case v:
                    return o(+e, +t);
                case h:
                    return e.name == t.name && e.message == t.message;
                case g:
                case b:
                    return e == t + "";
                case m:
                    var j = u;
                case y:
                    var C = r & l;
                    if (j || (j = c), e.size != t.size && !C) return !1;
                    var O = S.get(e);
                    if (O) return O == t;
                    r |= f, S.set(e, t);
                    var E = s(j(e), j(t), r, i, R, S);
                    return S.delete(e), E;
                case _:
                    if (x) return x.call(e) == x.call(t)
            }
            return !1
        }
        var i = n(29),
            a = n(131),
            o = n(30),
            s = n(129),
            u = n(132),
            c = n(58),
            l = 1,
            f = 2,
            p = "[object Boolean]",
            d = "[object Date]",
            h = "[object Error]",
            m = "[object Map]",
            v = "[object Number]",
            g = "[object RegExp]",
            y = "[object Set]",
            b = "[object String]",
            _ = "[object Symbol]",
            w = "[object ArrayBuffer]",
            P = "[object DataView]",
            R = i ? i.prototype : void 0,
            x = R ? R.valueOf : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, o, u) {
            var c = n & a,
                l = i(e),
                f = l.length;
            if (f != i(t).length && !c) return !1;
            for (var p = f; p--;) {
                var d = l[p];
                if (!(c ? d in t : s.call(t, d))) return !1
            }
            var h = u.get(e);
            if (h && u.get(t)) return h == t;
            var m = !0;
            u.set(e, t), u.set(t, e);
            for (var v = c; ++p < f;) {
                d = l[p];
                var g = e[d],
                    y = t[d];
                if (r) var b = c ? r(y, g, d, t, e, u) : r(g, y, d, e, t, u);
                if (!(void 0 === b ? g === y || o(g, y, n, r, u) : b)) {
                    m = !1;
                    break
                }
                v || (v = "constructor" == d)
            }
            if (m && !v) {
                var _ = e.constructor,
                    w = t.constructor;
                _ != w && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (m = !1)
            }
            return u.delete(e), u.delete(t), m
        }
        var i = n(133),
            a = 1,
            o = Object.prototype,
            s = o.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        var r = n(24),
            i = n(5),
            a = r(i, "DataView");
        e.exports = a
    }, function(e, t, n) {
        var r = n(24),
            i = n(5),
            a = r(i, "Promise");
        e.exports = a
    }, function(e, t, n) {
        function r(e) {
            for (var t = a(e), n = t.length; n--;) {
                var r = t[n],
                    o = e[r];
                t[n] = [r, o, i(o)]
            }
            return t
        }
        var i = n(138),
            a = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return s(e) && u(t) ? c(l(e), t) : function(n) {
                var r = a(n, e);
                return void 0 === r && r === t ? o(n, e) : i(t, r, f | p)
            }
        }
        var i = n(89),
            a = n(59),
            o = n(140),
            s = n(93),
            u = n(138),
            c = n(139),
            l = n(32),
            f = 1,
            p = 2;
        e.exports = r
    }, function(e, t, n) {
        var r = n(271),
            i = /^\./,
            a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            s = r(function(e) {
                var t = [];
                return i.test(e) && t.push(""), e.replace(a, function(e, n, r, i) {
                    t.push(r ? i.replace(o, "$1") : n || e)
                }), t
            });
        e.exports = s
    }, function(e, t, n) {
        function r(e) {
            var t = i(e, function(e) {
                    return n.size === a && n.clear(), e
                }),
                n = t.cache;
            return t
        }
        var i = n(272),
            a = 500;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
            var n = function() {
                var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    a = n.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, r);
                return n.cache = a.set(i, o) || a, o
            };
            return n.cache = new(r.Cache || i), n
        }
        var i = n(81),
            a = "Expected a function";
        r.Cache = i, e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return null != e && t in Object(e)
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o(e) ? i(s(e)) : a(e)
        }
        var i = n(275),
            a = n(276),
            o = n(93),
            s = n(32);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return function(t) {
                return i(t, e)
            }
        }
        var i = n(60);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, r, i) {
            return i(e, function(e, i, a) {
                n = r ? (r = !1, e) : t(n, e, i, a)
            }), n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(t, a(t), e)
        }
        var i = n(23),
            a = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return e && i(t, a(t), e)
        }
        var i = n(23),
            a = n(49);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (!i(e)) return o(e);
            var t = a(e),
                n = [];
            for (var r in e)("constructor" != r || !t && u.call(e, r)) && n.push(r);
            return n
        }
        var i = n(6),
            a = n(41),
            o = n(281),
            s = Object.prototype,
            u = s.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, a(e), t)
        }
        var i = n(23),
            a = n(91);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, a(e), t)
        }
        var i = n(23),
            a = n(146);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = e.length,
                n = e.constructor(t);
            return t && "string" == typeof e[0] && i.call(e, "index") && (n.index = e.index, n.input = e.input), n
        }
        var r = Object.prototype,
            i = r.hasOwnProperty;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n, r) {
            var F = e.constructor;
            switch (t) {
                case b:
                    return i(e);
                case f:
                case p:
                    return new F(+e);
                case _:
                    return a(e, r);
                case w:
                case P:
                case R:
                case x:
                case S:
                case j:
                case C:
                case O:
                case E:
                    return l(e, r);
                case d:
                    return o(e, r, n);
                case h:
                case g:
                    return new F(e);
                case m:
                    return s(e);
                case v:
                    return u(e, r, n);
                case y:
                    return c(e)
            }
        }
        var i = n(98),
            a = n(286),
            o = n(287),
            s = n(289),
            u = n(290),
            c = n(292),
            l = n(147),
            f = "[object Boolean]",
            p = "[object Date]",
            d = "[object Map]",
            h = "[object Number]",
            m = "[object RegExp]",
            v = "[object Set]",
            g = "[object String]",
            y = "[object Symbol]",
            b = "[object ArrayBuffer]",
            _ = "[object DataView]",
            w = "[object Float32Array]",
            P = "[object Float64Array]",
            R = "[object Int8Array]",
            x = "[object Int16Array]",
            S = "[object Int32Array]",
            j = "[object Uint8Array]",
            C = "[object Uint8ClampedArray]",
            O = "[object Uint16Array]",
            E = "[object Uint32Array]";
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = t ? i(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.byteLength)
        }
        var i = n(98);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = t ? n(o(e), s) : o(e);
            return a(r, i, new e.constructor)
        }
        var i = n(288),
            a = n(95),
            o = n(132),
            s = 1;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e.set(t[0], t[1]), e
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            var t = new e.constructor(e.source, r.exec(e));
            return t.lastIndex = e.lastIndex, t
        }
        var r = /\w*$/;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = t ? n(o(e), s) : o(e);
            return a(r, i, new e.constructor)
        }
        var i = n(291),
            a = n(95),
            o = n(58),
            s = 1;
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            return e.add(t), e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return o ? Object(o.call(e)) : {}
        }
        var i = n(29),
            a = i ? i.prototype : void 0,
            o = a ? a.valueOf : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return t = i(t, e), null == (e = o(e, t)) || delete e[s(a(t))]
        }
        var i = n(31),
            a = n(149),
            o = n(294),
            s = n(32);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return t.length < 2 ? e : i(e, a(t, 0, -1))
        }
        var i = n(60),
            a = n(150);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e) ? void 0 : e
        }
        var i = n(26);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return o(e) || a(e) || !!(s && e && e[s])
        }
        var i = n(29),
            a = n(37),
            o = n(2),
            s = i ? i.isConcatSpreadable : void 0;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if ("number" == typeof e) return e;
            if (a(e)) return o;
            if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(s, "");
            var n = c.test(e);
            return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e
        }
        var i = n(6),
            a = n(47),
            o = NaN,
            s = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            f = parseInt;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e) && e != +e
        }
        var i = n(155);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return function(t, n, r) {
                var s = Object(t);
                if (!a(t)) {
                    var u = i(n, 3);
                    t = o(t), n = function(e) {
                        return u(s[e], e, s)
                    }
                }
                var c = e(t, n, r);
                return c > -1 ? s[u ? t[c] : c] : void 0
            }
        }
        var i = n(9),
            a = n(13),
            o = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = e.length;
            return n = void 0 === n ? r : n, !t && n >= r ? e : i(e, t, n)
        }
        var i = n(150);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = e.length; n-- && i(t, e[n], 0) > -1;);
            return n
        }
        var i = n(42);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = -1, r = e.length; ++n < r && i(t, e[n], 0) > -1;);
            return n
        }
        var i = n(42);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return a(e) ? o(e) : i(e)
        }
        var i = n(304),
            a = n(305),
            o = n(306);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            return e.split("")
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return r.test(e)
        }
        var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return e.match(f) || []
        }
        var r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            s = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
            u = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", a, o].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*",
            c = "[\\ufe0e\\ufe0f]?" + s + u,
            l = "(?:" + ["[^\\ud800-\\udfff]" + r + "?", r, a, o, "[\\ud800-\\udfff]"].join("|") + ")",
            f = RegExp(i + "(?=" + i + ")|" + l + c, "g");
        e.exports = n
    }, function(e, t, n) {
        var r = n(23),
            i = n(68),
            a = n(49),
            o = i(function(e, t, n, i) {
                r(t, a(t), e, i)
            });
        e.exports = o
    }, function(e, t, n) {
        function r(e, t, n, r) {
            return void 0 === e || i(e, a[n]) && !o.call(r, n) ? t : e
        }
        var i = n(30),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r, y, b, _) {
            var w = e[n],
                P = t[n],
                R = _.get(P);
            if (R) return void i(e, n, R);
            var x = b ? b(w, P, n + "", e, t, _) : void 0,
                S = void 0 === x;
            if (S) {
                var j = l(P),
                    C = !j && p(P),
                    O = !j && !C && v(P);
                x = P, j || C || O ? l(w) ? x = w : f(w) ? x = s(w) : C ? (S = !1, x = a(P, !0)) : O ? (S = !1, x = o(P, !0)) : x = [] : m(P) || c(P) ? (x = w, c(w) ? x = g(w) : (!h(w) || r && d(w)) && (x = u(P))) : S = !1
            }
            S && (_.set(P, x), y(x, P, r, b, _), _.delete(P)), i(e, n, x)
        }
        var i = n(158),
            a = n(145),
            o = n(147),
            s = n(63),
            u = n(148),
            c = n(37),
            l = n(2),
            f = n(86),
            p = n(39),
            d = n(20),
            h = n(6),
            m = n(26),
            v = n(52),
            g = n(310);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return i(e, a(e))
        }
        var i = n(23),
            a = n(49);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (o(e)) return e;
            if (s(e)) return parseFloat(e);
            if (a(e)) return i(e, r);
            throw new Error("The value should be a number, a parseable string or an array of those.")
        }
        var i = n(10),
            a = n(2),
            o = n(155),
            s = n(28);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {},
                r = a(t, function(e) {
                    return -1 !== e.indexOf("attribute:")
                }),
                c = o(r, function(e) {
                    return e.split(":")[1]
                }); - 1 === u(c, "*") ? i(c, function(t) {
                e.isConjunctiveFacet(t) && e.isFacetRefined(t) && (n.facetsRefinements || (n.facetsRefinements = {}), n.facetsRefinements[t] = e.facetsRefinements[t]), e.isDisjunctiveFacet(t) && e.isDisjunctiveFacetRefined(t) && (n.disjunctiveFacetsRefinements || (n.disjunctiveFacetsRefinements = {}), n.disjunctiveFacetsRefinements[t] = e.disjunctiveFacetsRefinements[t]), e.isHierarchicalFacet(t) && e.isHierarchicalFacetRefined(t) && (n.hierarchicalFacetsRefinements || (n.hierarchicalFacetsRefinements = {}), n.hierarchicalFacetsRefinements[t] = e.hierarchicalFacetsRefinements[t]);
                var r = e.getNumericRefinements(t);
                s(r) || (n.numericRefinements || (n.numericRefinements = {}), n.numericRefinements[t] = e.numericRefinements[t])
            }) : (s(e.numericRefinements) || (n.numericRefinements = e.numericRefinements), s(e.facetsRefinements) || (n.facetsRefinements = e.facetsRefinements), s(e.disjunctiveFacetsRefinements) || (n.disjunctiveFacetsRefinements = e.disjunctiveFacetsRefinements), s(e.hierarchicalFacetsRefinements) || (n.hierarchicalFacetsRefinements = e.hierarchicalFacetsRefinements));
            var l = a(t, function(e) {
                return -1 === e.indexOf("attribute:")
            });
            return i(l, function(t) {
                n[t] = e[t]
            }), n
        }
        var i = n(14),
            a = n(46),
            o = n(10),
            s = n(27),
            u = n(65);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(66),
            i = n(28),
            a = n(20),
            o = n(27),
            s = n(67),
            u = n(18),
            c = n(46),
            l = n(143),
            f = {
                addRefinement: function(e, t, n) {
                    if (f.isRefined(e, t, n)) return e;
                    var r = "" + n,
                        i = e[t] ? e[t].concat(r) : [r],
                        a = {};
                    return a[t] = i, s({}, a, e)
                },
                removeRefinement: function(e, t, n) {
                    if (r(n)) return f.clearRefinement(e, t);
                    var i = "" + n;
                    return f.clearRefinement(e, function(e, n) {
                        return t === n && i === e
                    })
                },
                toggleRefinement: function(e, t, n) {
                    if (r(n)) throw new Error("toggleRefinement should be used with a value");
                    return f.isRefined(e, t, n) ? f.removeRefinement(e, t, n) : f.addRefinement(e, t, n)
                },
                clearRefinement: function(e, t, n) {
                    if (r(t)) return o(e) ? e : {};
                    if (i(t)) return o(e[t]) ? e : l(e, t);
                    if (a(t)) {
                        var s = !1,
                            f = u(e, function(e, r, i) {
                                var a = c(r, function(e) {
                                    return !t(e, i, n)
                                });
                                return o(a) ? s = !0 : (a.length !== r.length && (s = !0), e[i] = a), e
                            }, {});
                        return s ? f : e
                    }
                },
                isRefined: function(e, t, i) {
                    var a = n(65),
                        o = !!e[t] && e[t].length > 0;
                    if (r(i) || !o) return o;
                    var s = "" + i;
                    return -1 !== a(e[t], s)
                }
            };
        e.exports = f
    }, function(e, t) {
        function n(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                var a = e[t];
                a && (i[r++] = a)
            }
            return i
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return e && e.length ? a(e, i(t, 2)) : 0
        }
        var i = n(9),
            a = n(316);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n, r = -1, i = e.length; ++r < i;) {
                var a = t(e[r]);
                void 0 !== a && (n = void 0 === n ? a : n + a)
            }
            return n
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            return null == e ? [] : i(e, a(e))
        }
        var i = n(318),
            a = n(7);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            return i(t, function(t) {
                return e[t]
            })
        }
        var i = n(21);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = -1;
            t = i(t.length ? t : [l], u(a));
            var f = o(e, function(e, n, a) {
                return {
                    criteria: i(t, function(t) {
                        return t(e)
                    }),
                    index: ++r,
                    value: e
                }
            });
            return s(f, function(e, t) {
                return c(e, t, n)
            })
        }
        var i = n(21),
            a = n(9),
            o = n(142),
            s = n(320),
            u = n(79),
            c = n(321),
            l = n(25);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            for (var r = -1, a = e.criteria, o = t.criteria, s = a.length, u = n.length; ++r < s;) {
                var c = i(a[r], o[r]);
                if (c) {
                    if (r >= u) return c;
                    return c * ("desc" == n[r] ? -1 : 1)
                }
            }
            return e.index - t.index
        }
        var i = n(322);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            if (e !== t) {
                var n = void 0 !== e,
                    r = null === e,
                    a = e === e,
                    o = i(e),
                    s = void 0 !== t,
                    u = null === t,
                    c = t === t,
                    l = i(t);
                if (!u && !l && !o && e > t || o && s && c && !u && !l || r && s && c || !n && c || !a) return 1;
                if (!r && !o && !l && e < t || l && n && a && !r && !o || u && n && a || !s && a || !c) return -1
            }
            return 0
        }
        var i = n(47);
        e.exports = r
    }, function(e, t, n) {
        var r = n(22),
            i = n(69),
            a = n(50),
            o = n(34),
            s = r(function(e, t) {
                var n = o(t, a(s));
                return i(e, 32, void 0, t, n)
            });
        s.placeholder = {}, e.exports = s
    }, function(e, t, n) {
        function r(e, t, n) {
            function r() {
                return (this && this !== a && this instanceof r ? u : e).apply(s ? n : this, arguments)
            }
            var s = t & o,
                u = i(e);
            return r
        }
        var i = n(70),
            a = n(5),
            o = 1;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            function r() {
                for (var a = arguments.length, p = Array(a), d = a, h = u(r); d--;) p[d] = arguments[d];
                var m = a < 3 && p[0] !== h && p[a - 1] !== h ? [] : c(p, h);
                return (a -= m.length) < n ? s(e, t, o, r.placeholder, void 0, p, m, void 0, void 0, n - a) : i(this && this !== l && this instanceof r ? f : e, this, p)
            }
            var f = a(e);
            return r
        }
        var i = n(43),
            a = n(70),
            o = n(163),
            s = n(166),
            u = n(50),
            c = n(34),
            l = n(5);
        e.exports = r
    }, function(e, t) {
        function n(e, t) {
            for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
            return r
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            var t = o(e),
                n = s[t];
            if ("function" != typeof n || !(t in i.prototype)) return !1;
            if (e === n) return !0;
            var r = a(n);
            return !!r && e === r[0]
        }
        var i = n(103),
            a = n(167),
            o = n(328),
            s = n(330);
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            for (var t = e.name + "", n = i[t], r = o.call(i, t) ? n.length : 0; r--;) {
                var a = n[r],
                    s = a.func;
                if (null == s || s == e) return a.name
            }
            return t
        }
        var i = n(329),
            a = Object.prototype,
            o = a.hasOwnProperty;
        e.exports = r
    }, function(e, t) {
        var n = {};
        e.exports = n
    }, function(e, t, n) {
        function r(e) {
            if (u(e) && !s(e) && !(e instanceof i)) {
                if (e instanceof a) return e;
                if (f.call(e, "__wrapped__")) return c(e)
            }
            return new a(e)
        }
        var i = n(103),
            a = n(169),
            o = n(104),
            s = n(2),
            u = n(8),
            c = n(331),
            l = Object.prototype,
            f = l.hasOwnProperty;
        r.prototype = o.prototype, r.prototype.constructor = r, e.exports = r
    }, function(e, t, n) {
        function r(e) {
            if (e instanceof i) return e.clone();
            var t = new a(e.__wrapped__, e.__chain__);
            return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        var i = n(103),
            a = n(169),
            o = n(63);
        e.exports = r
    }, function(e, t) {
        function n(e) {
            var t = e.match(r);
            return t ? t[1].split(i) : []
        }
        var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
            i = /,? & /;
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            var n = t.length;
            if (!n) return e;
            var i = n - 1;
            return t[i] = (n > 1 ? "& " : "") + t[i], t = t.join(n > 2 ? ", " : " "), e.replace(r, "{\n/* [wrapped with " + t + "] */\n")
        }
        var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
        e.exports = n
    }, function(e, t, n) {
        function r(e, t) {
            return i(o, function(n) {
                var r = "_." + n[0];
                t & n[1] && !a(e, r) && e.push(r)
            }), e.sort()
        }
        var i = n(88),
            a = n(83),
            o = [
                ["ary", 128],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", 32],
                ["partialRight", 64],
                ["rearg", 256]
            ];
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = e.length, r = o(t.length, n), s = i(e); r--;) {
                var u = t[r];
                e[r] = a(u, n) ? s[u] : void 0
            }
            return e
        }
        var i = n(63),
            a = n(40),
            o = Math.min;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            function u() {
                for (var t = -1, a = arguments.length, s = -1, f = r.length, p = Array(f + a), d = this && this !== o && this instanceof u ? l : e; ++s < f;) p[s] = r[s];
                for (; a--;) p[s++] = arguments[++t];
                return i(d, c ? n : this, p)
            }
            var c = t & s,
                l = a(e);
            return u
        }
        var i = n(43),
            a = n(70),
            o = n(5),
            s = 1;
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n = e[1],
                r = t[1],
                m = n | r,
                v = m < (u | c | p),
                g = r == p && n == f || r == p && n == d && e[7].length <= t[8] || r == (p | d) && t[7].length <= t[8] && n == f;
            if (!v && !g) return e;
            r & u && (e[2] = t[2], m |= n & u ? 0 : l);
            var y = t[3];
            if (y) {
                var b = e[3];
                e[3] = b ? i(b, y, t[4]) : y, e[4] = b ? o(e[3], s) : t[4]
            }
            return y = t[5], y && (b = e[5], e[5] = b ? a(b, y, t[6]) : y, e[6] = b ? o(e[5], s) : t[6]), y = t[7], y && (e[7] = y), r & p && (e[8] = null == e[8] ? t[8] : h(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = m, e
        }
        var i = n(164),
            a = n(165),
            o = n(34),
            s = "__lodash_placeholder__",
            u = 1,
            c = 2,
            l = 4,
            f = 8,
            p = 128,
            d = 256,
            h = Math.min;
        e.exports = r
    }, function(e, t, n) {
        var r = n(22),
            i = n(69),
            a = n(50),
            o = n(34),
            s = r(function(e, t) {
                var n = o(t, a(s));
                return i(e, 64, void 0, t, n)
            });
        s.placeholder = {}, e.exports = s
    }, function(e, t, n) {
        function r(e, t, n) {
            return e = s(e), n = null == n ? 0 : i(o(n), 0, e.length), t = a(t), e.slice(n, n + t.length) == t
        }
        var i = n(340),
            a = n(94),
            o = n(33),
            s = n(61);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n) {
            return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return function(t, n) {
                var r = e.hierarchicalFacets[n],
                    a = e.hierarchicalFacetsRefinements[r.name] && e.hierarchicalFacetsRefinements[r.name][0] || "",
                    o = e._getHierarchicalFacetSeparator(r),
                    s = e._getHierarchicalRootPath(r),
                    u = e._getHierarchicalShowParentLevel(r),
                    l = h(e._getHierarchicalFacetSortBy(r)),
                    f = i(l, o, s, u, a),
                    p = t;
                return s && (p = t.slice(s.split(o).length)), c(p, f, {
                    name: e.hierarchicalFacets[n].name,
                    count: null,
                    isRefined: !0,
                    path: null,
                    data: null
                })
            }
        }

        function i(e, t, n, r, i) {
            return function(s, c, f) {
                var h = s;
                if (f > 0) {
                    var m = 0;
                    for (h = s; m < f;) h = h && p(h.data, {
                        isRefined: !0
                    }), m++
                }
                if (h) {
                    var v = a(h.path || n, i, t, n, r);
                    h.data = l(u(d(c.data, v), o(t, i)), e[0], e[1])
                }
                return s
            }
        }

        function a(e, t, n, r, i) {
            return function(a, o) {
                return (!r || 0 === o.indexOf(r) && r !== o) && (!r && -1 === o.indexOf(n) || r && o.split(n).length - r.split(n).length === 1 || -1 === o.indexOf(n) && -1 === t.indexOf(n) || 0 === t.indexOf(o) || 0 === o.indexOf(e + n) && (i || 0 === o.indexOf(t)))
            }
        }

        function o(e, t) {
            return function(n, r) {
                return {
                    name: f(s(r.split(e))),
                    path: r,
                    count: n,
                    isRefined: t === r || 0 === t.indexOf(r + e),
                    data: null
                }
            }
        }
        e.exports = r;
        var s = n(149),
            u = n(10),
            c = n(18),
            l = n(160),
            f = n(157),
            p = n(11),
            d = n(342),
            h = n(172)
    }, function(e, t, n) {
        function r(e, t) {
            if (null == e) return {};
            var n = i(s(e), function(e) {
                return [e]
            });
            return t = a(t), o(e, n, function(e, n) {
                return t(e, n[0])
            })
        }
        var i = n(21),
            a = n(9),
            o = n(173),
            s = n(97);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            if (!s(e)) return e;
            t = a(t, e);
            for (var c = -1, l = t.length, f = l - 1, p = e; null != p && ++c < l;) {
                var d = u(t[c]),
                    h = n;
                if (c != f) {
                    var m = p[d];
                    h = r ? r(m, d, p) : void 0, void 0 === h && (h = s(m) ? m : o(t[c + 1]) ? [] : {})
                }
                i(p, d, h), p = p[d]
            }
            return e
        }
        var i = n(62),
            a = n(31),
            o = n(40),
            s = n(6),
            u = n(32);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            this.main = e, this.fn = t, this.lastResults = null
        }
        var i = n(174),
            a = n(105);
        i.inherits(r, a.EventEmitter), r.prototype.detach = function() {
            this.removeAllListeners(), this.main.detachDerivedHelper(this)
        }, r.prototype.getModifiedState = function(e) {
            return this.fn(e)
        }, e.exports = r
    }, function(e, t) {
        e.exports = function(e) {
            return e && "object" === typeof e && "function" === typeof e.copy && "function" === typeof e.fill && "function" === typeof e.readUInt8
        }
    }, function(e, t) {
        "function" === typeof Object.create ? e.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(10),
            a = n(18),
            o = n(100),
            s = n(2),
            u = {
                _getQueries: function(e, t) {
                    var n = [];
                    return n.push({
                        indexName: e,
                        params: u._getHitsSearchParams(t)
                    }), r(t.getRefinedDisjunctiveFacets(), function(r) {
                        n.push({
                            indexName: e,
                            params: u._getDisjunctiveFacetSearchParams(t, r)
                        })
                    }), r(t.getRefinedHierarchicalFacets(), function(r) {
                        var i = t.getHierarchicalFacetByName(r),
                            a = t.getHierarchicalRefinement(r),
                            o = t._getHierarchicalFacetSeparator(i);
                        a.length > 0 && a[0].split(o).length > 1 && n.push({
                            indexName: e,
                            params: u._getDisjunctiveFacetSearchParams(t, r, !0)
                        })
                    }), n
                },
                _getHitsSearchParams: function(e) {
                    var t = e.facets.concat(e.disjunctiveFacets).concat(u._getHitsHierarchicalFacetsAttributes(e)),
                        n = u._getFacetFilters(e),
                        r = u._getNumericFilters(e),
                        i = u._getTagFilters(e),
                        a = {
                            facets: t,
                            tagFilters: i
                        };
                    return n.length > 0 && (a.facetFilters = n), r.length > 0 && (a.numericFilters = r), o(e.getQueryParams(), a)
                },
                _getDisjunctiveFacetSearchParams: function(e, t, n) {
                    var r = u._getFacetFilters(e, t, n),
                        i = u._getNumericFilters(e, t),
                        a = u._getTagFilters(e),
                        s = {
                            hitsPerPage: 1,
                            page: 0,
                            attributesToRetrieve: [],
                            attributesToHighlight: [],
                            attributesToSnippet: [],
                            tagFilters: a,
                            analytics: !1,
                            clickAnalytics: !1
                        },
                        c = e.getHierarchicalFacetByName(t);
                    return s.facets = c ? u._getDisjunctiveHierarchicalFacetAttribute(e, c, n) : t, i.length > 0 && (s.numericFilters = i), r.length > 0 && (s.facetFilters = r), o(e.getQueryParams(), s)
                },
                _getNumericFilters: function(e, t) {
                    if (e.numericFilters) return e.numericFilters;
                    var n = [];
                    return r(e.numericRefinements, function(e, a) {
                        r(e, function(e, o) {
                            t !== a && r(e, function(e) {
                                if (s(e)) {
                                    var t = i(e, function(e) {
                                        return a + o + e
                                    });
                                    n.push(t)
                                } else n.push(a + o + e)
                            })
                        })
                    }), n
                },
                _getTagFilters: function(e) {
                    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                },
                _getFacetFilters: function(e, t, n) {
                    var i = [];
                    return r(e.facetsRefinements, function(e, t) {
                        r(e, function(e) {
                            i.push(t + ":" + e)
                        })
                    }), r(e.facetsExcludes, function(e, t) {
                        r(e, function(e) {
                            i.push(t + ":-" + e)
                        })
                    }), r(e.disjunctiveFacetsRefinements, function(e, n) {
                        if (n !== t && e && 0 !== e.length) {
                            var a = [];
                            r(e, function(e) {
                                a.push(n + ":" + e)
                            }), i.push(a)
                        }
                    }), r(e.hierarchicalFacetsRefinements, function(r, a) {
                        var o = r[0];
                        if (void 0 !== o) {
                            var s, u, c = e.getHierarchicalFacetByName(a),
                                l = e._getHierarchicalFacetSeparator(c),
                                f = e._getHierarchicalRootPath(c);
                            if (t === a) {
                                if (-1 === o.indexOf(l) || !f && !0 === n || f && f.split(l).length === o.split(l).length) return;
                                f ? (u = f.split(l).length - 1, o = f) : (u = o.split(l).length - 2, o = o.slice(0, o.lastIndexOf(l))), s = c.attributes[u]
                            } else u = o.split(l).length - 1, s = c.attributes[u];
                            s && i.push([s + ":" + o])
                        }
                    }), i
                },
                _getHitsHierarchicalFacetsAttributes: function(e) {
                    var t = [];
                    return a(e.hierarchicalFacets, function(t, n) {
                        var r = e.getHierarchicalRefinement(n.name)[0];
                        if (!r) return t.push(n.attributes[0]), t;
                        var i = e._getHierarchicalFacetSeparator(n),
                            a = r.split(i).length,
                            o = n.attributes.slice(0, a + 1);
                        return t.concat(o)
                    }, t)
                },
                _getDisjunctiveHierarchicalFacetAttribute: function(e, t, n) {
                    var r = e._getHierarchicalFacetSeparator(t);
                    if (!0 === n) {
                        var i = e._getHierarchicalRootPath(t),
                            a = 0;
                        return i && (a = i.split(r).length), [t.attributes[a]]
                    }
                    var o = e.getHierarchicalRefinement(t.name)[0] || "",
                        s = o.split(r).length - 1;
                    return t.attributes.slice(0, s + 1)
                },
                getSearchForFacetQuery: function(e, t, n, r) {
                    var i = r.isDisjunctiveFacet(e) ? r.clearRefinements(e) : r,
                        a = {
                            facetQuery: t,
                            facetName: e
                        };
                    return "number" === typeof n && (a.maxFacetHits = n), o(u._getHitsSearchParams(i), a)
                }
            };
        e.exports = u
    }, function(e, t, n) {
        "use strict";
        var r = n(175),
            i = n(7),
            a = {
                advancedSyntax: "aS",
                allowTyposOnNumericTokens: "aTONT",
                analyticsTags: "aT",
                analytics: "a",
                aroundLatLngViaIP: "aLLVIP",
                aroundLatLng: "aLL",
                aroundPrecision: "aP",
                aroundRadius: "aR",
                attributesToHighlight: "aTH",
                attributesToRetrieve: "aTR",
                attributesToSnippet: "aTS",
                disjunctiveFacetsRefinements: "dFR",
                disjunctiveFacets: "dF",
                distinct: "d",
                facetsExcludes: "fE",
                facetsRefinements: "fR",
                facets: "f",
                getRankingInfo: "gRI",
                hierarchicalFacetsRefinements: "hFR",
                hierarchicalFacets: "hF",
                highlightPostTag: "hPoT",
                highlightPreTag: "hPrT",
                hitsPerPage: "hPP",
                ignorePlurals: "iP",
                index: "idx",
                insideBoundingBox: "iBB",
                insidePolygon: "iPg",
                length: "l",
                maxValuesPerFacet: "mVPF",
                minimumAroundRadius: "mAR",
                minProximity: "mP",
                minWordSizefor1Typo: "mWS1T",
                minWordSizefor2Typos: "mWS2T",
                numericFilters: "nF",
                numericRefinements: "nR",
                offset: "o",
                optionalWords: "oW",
                page: "p",
                queryType: "qT",
                query: "q",
                removeWordsIfNoResults: "rWINR",
                replaceSynonymsInHighlight: "rSIH",
                restrictSearchableAttributes: "rSA",
                synonyms: "s",
                tagFilters: "tF",
                tagRefinements: "tR",
                typoTolerance: "tT",
                optionalTagFilters: "oTF",
                optionalFacetFilters: "oFF",
                snippetEllipsisText: "sET",
                disableExactOnAttributes: "dEOA",
                enableExactOnSingleWordQuery: "eEOSWQ"
            },
            o = r(a);
        e.exports = {
            ENCODED_PARAMETERS: i(o),
            decode: function(e) {
                return o[e]
            },
            encode: function(e) {
                return a[e]
            }
        }
    }, function(e, t, n) {
        function r(e, t) {
            return function(n, r) {
                return i(n, e, t(r), {})
            }
        }
        var i = n(350);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n, r) {
            return i(e, function(e, i, a) {
                t(r, n(e), i, a)
            }), r
        }
        var i = n(44);
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(352),
            i = n(353),
            a = n(176);
        e.exports = {
            formats: a,
            parse: i,
            stringify: r
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(107),
            i = n(176),
            a = {
                brackets: function(e) {
                    return e + "[]"
                },
                indices: function(e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function(e) {
                    return e
                }
            },
            o = Date.prototype.toISOString,
            s = {
                delimiter: "&",
                encode: !0,
                encoder: r.encode,
                encodeValuesOnly: !1,
                serializeDate: function(e) {
                    return o.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            },
            u = function e(t, n, i, a, o, u, c, l, f, p, d, h) {
                var m = t;
                if ("function" === typeof c) m = c(n, m);
                else if (m instanceof Date) m = p(m);
                else if (null === m) {
                    if (a) return u && !h ? u(n, s.encoder) : n;
                    m = ""
                }
                if ("string" === typeof m || "number" === typeof m || "boolean" === typeof m || r.isBuffer(m)) {
                    if (u) {
                        return [d(h ? n : u(n, s.encoder)) + "=" + d(u(m, s.encoder))]
                    }
                    return [d(n) + "=" + d(String(m))]
                }
                var v = [];
                if ("undefined" === typeof m) return v;
                var g;
                if (Array.isArray(c)) g = c;
                else {
                    var y = Object.keys(m);
                    g = l ? y.sort(l) : y
                }
                for (var b = 0; b < g.length; ++b) {
                    var _ = g[b];
                    o && null === m[_] || (v = Array.isArray(m) ? v.concat(e(m[_], i(n, _), i, a, o, u, c, l, f, p, d, h)) : v.concat(e(m[_], n + (f ? "." + _ : "[" + _ + "]"), i, a, o, u, c, l, f, p, d, h)))
                }
                return v
            };
        e.exports = function(e, t) {
            var n = e,
                o = t ? r.assign({}, t) : {};
            if (null !== o.encoder && void 0 !== o.encoder && "function" !== typeof o.encoder) throw new TypeError("Encoder has to be a function.");
            var c = "undefined" === typeof o.delimiter ? s.delimiter : o.delimiter,
                l = "boolean" === typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
                f = "boolean" === typeof o.skipNulls ? o.skipNulls : s.skipNulls,
                p = "boolean" === typeof o.encode ? o.encode : s.encode,
                d = "function" === typeof o.encoder ? o.encoder : s.encoder,
                h = "function" === typeof o.sort ? o.sort : null,
                m = "undefined" !== typeof o.allowDots && o.allowDots,
                v = "function" === typeof o.serializeDate ? o.serializeDate : s.serializeDate,
                g = "boolean" === typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
            if ("undefined" === typeof o.format) o.format = i.default;
            else if (!Object.prototype.hasOwnProperty.call(i.formatters, o.format)) throw new TypeError("Unknown format option provided.");
            var y, b, _ = i.formatters[o.format];
            "function" === typeof o.filter ? (b = o.filter, n = b("", n)) : Array.isArray(o.filter) && (b = o.filter, y = b);
            var w = [];
            if ("object" !== typeof n || null === n) return "";
            var P;
            P = o.arrayFormat in a ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
            var R = a[P];
            y || (y = Object.keys(n)), h && y.sort(h);
            for (var x = 0; x < y.length; ++x) {
                var S = y[x];
                f && null === n[S] || (w = w.concat(u(n[S], S, R, l, f, p ? d : null, b, h, m, v, _, g)))
            }
            var j = w.join(c),
                C = !0 === o.addQueryPrefix ? "?" : "";
            return j.length > 0 ? C + j : ""
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(107),
            i = Object.prototype.hasOwnProperty,
            a = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                decoder: r.decode,
                delimiter: "&",
                depth: 5,
                parameterLimit: 1e3,
                plainObjects: !1,
                strictNullHandling: !1
            },
            o = function(e, t) {
                for (var n = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = r.split(t.delimiter, o), u = 0; u < s.length; ++u) {
                    var c, l, f = s[u],
                        p = f.indexOf("]="),
                        d = -1 === p ? f.indexOf("=") : p + 1; - 1 === d ? (c = t.decoder(f, a.decoder), l = t.strictNullHandling ? null : "") : (c = t.decoder(f.slice(0, d), a.decoder), l = t.decoder(f.slice(d + 1), a.decoder)), i.call(n, c) ? n[c] = [].concat(n[c]).concat(l) : n[c] = l
                }
                return n
            },
            s = function(e, t, n) {
                for (var r = t, i = e.length - 1; i >= 0; --i) {
                    var a, o = e[i];
                    if ("[]" === o) a = [], a = a.concat(r);
                    else {
                        a = n.plainObjects ? Object.create(null) : {};
                        var s = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
                            u = parseInt(s, 10);
                        !isNaN(u) && o !== s && String(u) === s && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (a = [], a[u] = r) : a[s] = r
                    }
                    r = a
                }
                return r
            },
            u = function(e, t, n) {
                if (e) {
                    var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                        a = /(\[[^[\]]*])/,
                        o = /(\[[^[\]]*])/g,
                        u = a.exec(r),
                        c = u ? r.slice(0, u.index) : r,
                        l = [];
                    if (c) {
                        if (!n.plainObjects && i.call(Object.prototype, c) && !n.allowPrototypes) return;
                        l.push(c)
                    }
                    for (var f = 0; null !== (u = o.exec(r)) && f < n.depth;) {
                        if (f += 1, !n.plainObjects && i.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
                        l.push(u[1])
                    }
                    return u && l.push("[" + r.slice(u.index) + "]"), s(l, t, n)
                }
            };
        e.exports = function(e, t) {
            var n = t ? r.assign({}, t) : {};
            if (null !== n.decoder && void 0 !== n.decoder && "function" !== typeof n.decoder) throw new TypeError("Decoder has to be a function.");
            if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" === typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : a.delimiter, n.depth = "number" === typeof n.depth ? n.depth : a.depth, n.arrayLimit = "number" === typeof n.arrayLimit ? n.arrayLimit : a.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" === typeof n.decoder ? n.decoder : a.decoder, n.allowDots = "boolean" === typeof n.allowDots ? n.allowDots : a.allowDots, n.plainObjects = "boolean" === typeof n.plainObjects ? n.plainObjects : a.plainObjects, n.allowPrototypes = "boolean" === typeof n.allowPrototypes ? n.allowPrototypes : a.allowPrototypes, n.parameterLimit = "number" === typeof n.parameterLimit ? n.parameterLimit : a.parameterLimit, n.strictNullHandling = "boolean" === typeof n.strictNullHandling ? n.strictNullHandling : a.strictNullHandling, "" === e || null === e || "undefined" === typeof e) return n.plainObjects ? Object.create(null) : {};
            for (var i = "string" === typeof e ? o(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, c = Object.keys(i), l = 0; l < c.length; ++l) {
                var f = c[l],
                    p = u(f, i[f], n);
                s = r.merge(s, p, n)
            }
            return r.compact(s)
        }
    }, function(e, t, n) {
        var r = n(22),
            i = n(69),
            a = n(50),
            o = n(34),
            s = r(function(e, t, n) {
                var r = 1;
                if (n.length) {
                    var u = o(n, a(s));
                    r |= 32
                }
                return i(e, r, t, n, u)
            });
        s.placeholder = {}, e.exports = s
    }, function(e, t, n) {
        var r = n(356),
            i = n(151),
            a = i(function(e, t) {
                return null == e ? {} : r(e, t)
            });
        e.exports = a
    }, function(e, t, n) {
        function r(e, t) {
            return i(e, t, function(t, n) {
                return a(e, n)
            })
        }
        var i = n(173),
            a = n(140);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s() {
            return "#"
        }

        function u(e) {
            return function(t, n) {
                if (!n.getConfiguration) return t;
                var r = n.getConfiguration(t, e),
                    i = function e(t, n) {
                        return Array.isArray(t) ? (0, _.default)(t, n) : (0, P.default)(t) ? (0, y.default)({}, t, n, e) : void 0
                    };
                return (0, y.default)({}, t, r, i)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            f = n(358),
            p = r(f),
            d = n(75),
            h = r(d),
            m = n(14),
            v = r(m),
            g = n(182),
            y = r(g),
            b = n(380),
            _ = r(b),
            w = n(26),
            P = r(w),
            R = n(105),
            x = n(382),
            S = r(x),
            j = n(184),
            C = r(j),
            O = n(384),
            E = r(O),
            F = function(e, t, n) {
                return e(t, n)
            },
            N = function(e) {
                function t(e) {
                    var n = e.appId,
                        r = void 0 === n ? null : n,
                        o = e.apiKey,
                        s = void 0 === o ? null : o,
                        u = e.indexName,
                        l = void 0 === u ? null : u,
                        f = e.numberLocale,
                        d = e.searchParameters,
                        h = void 0 === d ? {} : d,
                        m = e.urlSync,
                        v = void 0 === m ? null : m,
                        g = e.searchFunction,
                        y = e.createAlgoliaClient,
                        b = void 0 === y ? F : y,
                        _ = e.stalledSearchDelay,
                        w = void 0 === _ ? 200 : _;
                    i(this, t);
                    var P = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (null === r || null === s || null === l) {
                        throw new Error("\nUsage: instantsearch({\n  appId: 'my_application_id',\n  apiKey: 'my_search_api_key',\n  indexName: 'my_index_name'\n});")
                    }
                    var R = b(p.default, r, s);
                    return R.addAlgoliaAgent("instantsearch.js " + C.default), P.client = R, P.helper = null, P.indexName = l, P.searchParameters = c({}, h, {
                        index: l
                    }), P.widgets = [], P.templatesConfig = {
                        helpers: (0, E.default)({
                            numberLocale: f
                        }),
                        compileOptions: {}
                    }, P._stalledSearchDelay = w, g && (P._searchFunction = g), P.urlSync = !0 === v ? {} : v, P
                }
                return o(t, e), l(t, [{
                    key: "addWidget",
                    value: function(e) {
                        this.addWidgets([e])
                    }
                }, {
                    key: "addWidgets",
                    value: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw new Error("You need to provide an array of widgets or call `addWidget()`");
                        e.forEach(function(e) {
                            if (void 0 === e.render && void 0 === e.init) throw new Error("Widget definition missing render or init method");
                            t.widgets.push(e)
                        }), this.started && (this.searchParameters = this.widgets.reduce(u({}), c({}, this.helper.state)), this.helper.setState(this.searchParameters), e.forEach(function(e) {
                            e.init && e.init({
                                state: t.helper.state,
                                helper: t.helper,
                                templatesConfig: t.templatesConfig,
                                createURL: t._createAbsoluteURL,
                                onHistoryChange: t._onHistoryChange,
                                instantSearchInstance: t
                            })
                        }), this.helper.search())
                    }
                }, {
                    key: "removeWidget",
                    value: function(e) {
                        this.removeWidgets([e])
                    }
                }, {
                    key: "removeWidgets",
                    value: function(e) {
                        var t = this;
                        if (!Array.isArray(e)) throw new Error("You need to provide an array of widgets or call `removeWidget()`");
                        e.forEach(function(e) {
                            if (!t.widgets.includes(e) || "function" !== typeof e.dispose) throw new Error("The widget you tried to remove does not implement the dispose method, therefore it is not possible to remove this widget");
                            t.widgets = t.widgets.filter(function(t) {
                                return t !== e
                            });
                            var n = e.dispose({
                                helper: t.helper,
                                state: t.helper.getState()
                            });
                            n && (t.searchParameters = t.widgets.filter(function(e) {
                                return "URLSync" !== e.constructor.name
                            }).reduce(u({}), c({}, n)), t.helper.setState(t.searchParameters))
                        }), this.widgets.length > 0 && this.helper.search()
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        this.helper && this.helper.clearCache().search()
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = this;
                        if (!this.widgets) throw new Error("No widgets were added to instantsearch.js");
                        if (this.started) throw new Error("start() has been already called once");
                        var t = void 0;
                        if (this.urlSync) {
                            var n = (0, S.default)(this.urlSync);
                            this._createURL = n.createURL.bind(n), this._createAbsoluteURL = function(t) {
                                return e._createURL(t, {
                                    absolute: !0
                                })
                            }, this._onHistoryChange = n.onHistoryChange.bind(n), this.widgets.push(n), t = n.searchParametersFromUrl
                        } else this._createURL = s, this._createAbsoluteURL = s, this._onHistoryChange = function() {};
                        this.searchParameters = this.widgets.reduce(u(t), this.searchParameters);
                        var r = (0, h.default)(this.client, this.searchParameters.index || this.indexName, this.searchParameters);
                        this._searchFunction && (this._mainHelperSearch = r.search.bind(r), r.search = function() {
                            var t = (0, h.default)({
                                addAlgoliaAgent: function() {},
                                search: function() {}
                            }, r.state.index, r.state);
                            t.once("search", function(t) {
                                r.overrideStateWithoutTriggeringChangeEvent(t), e._mainHelperSearch()
                            }), e._searchFunction(t)
                        }), this.helper = r, this._init(r.state, this.helper), this.helper.on("result", this._render.bind(this, this.helper)), this.helper.on("error", function(t) {
                            e.emit("error", t)
                        }), this._searchStalledTimer = null, this._isSearchStalled = !0, this.helper.search(), this.helper.on("search", function() {
                            e._isSearchStalled || e._searchStalledTimer || (e._searchStalledTimer = setTimeout(function() {
                                e._isSearchStalled = !0, e._render(e.helper, e.helper.lastResults, e.helper.lastResults._state)
                            }, e._stalledSearchDelay))
                        }), this.started = !0
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.removeWidgets(this.widgets)
                    }
                }, {
                    key: "createURL",
                    value: function(e) {
                        if (!this._createURL) throw new Error("You need to call start() before calling createURL()");
                        return this._createURL(this.helper.state.setQueryParameters(e))
                    }
                }, {
                    key: "_render",
                    value: function(e, t, n) {
                        var r = this;
                        this.helper.hasPendingRequests() || (clearTimeout(this._searchStalledTimer), this._searchStalledTimer = null, this._isSearchStalled = !1), (0, v.default)(this.widgets, function(i) {
                            i.render && i.render({
                                templatesConfig: r.templatesConfig,
                                results: t,
                                state: n,
                                helper: e,
                                createURL: r._createAbsoluteURL,
                                instantSearchInstance: r,
                                searchMetadata: {
                                    isSearchStalled: r._isSearchStalled
                                }
                            })
                        }), this.emit("render")
                    }
                }, {
                    key: "_init",
                    value: function(e, t) {
                        var n = this;
                        (0, v.default)(this.widgets, function(r) {
                            r.init && r.init({
                                state: e,
                                helper: t,
                                templatesConfig: n.templatesConfig,
                                createURL: n._createAbsoluteURL,
                                onHistoryChange: n._onHistoryChange,
                                instantSearchInstance: n
                            })
                        })
                    }
                }]), t
            }(R.EventEmitter);
        t.default = N
    }, function(e, t, n) {
        "use strict";
        var r = n(359),
            i = n(371);
        e.exports = i(r, "(lite) ")
    }, function(e, t, n) {
        function r(e, t, r) {
            var a = n(73)("algoliasearch"),
                o = n(51),
                s = n(108),
                c = n(109),
                l = "Usage: algoliasearch(applicationID, apiKey, opts)";
            if (!0 !== r._allowEmptyCredentials && !e) throw new u.AlgoliaSearchError("Please provide an application ID. " + l);
            if (!0 !== r._allowEmptyCredentials && !t) throw new u.AlgoliaSearchError("Please provide an API key. " + l);
            this.applicationID = e, this.apiKey = t, this.hosts = {
                read: [],
                write: []
            }, r = r || {};
            var f = r.protocol || "https:";
            if (this._timeouts = r.timeouts || {
                    connect: 1e3,
                    read: 2e3,
                    write: 3e4
                }, r.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = r.timeout), /:$/.test(f) || (f += ":"), "http:" !== r.protocol && "https:" !== r.protocol) throw new u.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + r.protocol + "`)");
            if (this._checkAppIdData(), r.hosts) s(r.hosts) ? (this.hosts.read = o(r.hosts), this.hosts.write = o(r.hosts)) : (this.hosts.read = o(r.hosts.read), this.hosts.write = o(r.hosts.write));
            else {
                var p = c(this._shuffleResult, function(t) {
                    return e + "-" + t + ".algolianet.com"
                });
                this.hosts.read = [this.applicationID + "-dsn.algolia.net"].concat(p), this.hosts.write = [this.applicationID + ".algolia.net"].concat(p)
            }
            this.hosts.read = c(this.hosts.read, i(f)), this.hosts.write = c(this.hosts.write, i(f)), this.extraHeaders = {}, this.cache = r._cache || {}, this._ua = r._ua, this._useCache = !(void 0 !== r._useCache && !r._cache) || r._useCache, this._useFallback = void 0 === r.useFallback || r.useFallback, this._setTimeout = r._setTimeout, a("init done, %j", this)
        }

        function i(e) {
            return function(t) {
                return e + "//" + t.toLowerCase()
            }
        }

        function a(e) {
            if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
            var t = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            var n = JSON.stringify(e);
            return Array.prototype.toJSON = t, n
        }

        function o(e) {
            for (var t, n, r = e.length; 0 !== r;) n = Math.floor(Math.random() * r), r -= 1, t = e[r], e[r] = e[n], e[n] = t;
            return e
        }

        function s(e) {
            var t = {};
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r;
                    r = "x-algolia-api-key" === n || "x-algolia-application-id" === n ? "**hidden for security purposes**" : e[n], t[n] = r
                }
            return t
        }
        e.exports = r;
        var u = n(72),
            c = n(360),
            l = n(361),
            f = n(368),
            p = Object({
                NODE_ENV: "production"
            }).RESET_APP_DATA_TIMER && parseInt(Object({
                NODE_ENV: "production"
            }).RESET_APP_DATA_TIMER, 10) || 12e4;
        r.prototype.initIndex = function(e) {
            return new l(this, e)
        }, r.prototype.setExtraHeader = function(e, t) {
            this.extraHeaders[e.toLowerCase()] = t
        }, r.prototype.getExtraHeader = function(e) {
            return this.extraHeaders[e.toLowerCase()]
        }, r.prototype.unsetExtraHeader = function(e) {
            delete this.extraHeaders[e.toLowerCase()]
        }, r.prototype.addAlgoliaAgent = function(e) {
            -1 === this._ua.indexOf(";" + e) && (this._ua += ";" + e)
        }, r.prototype._jsonRequest = function(e) {
            function t(n, c) {
                function g(e) {
                    var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
                    o("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, t, e.headers);
                    var n = 2 === Math.floor(t / 100),
                        a = new Date;
                    if (v.push({
                            currentHost: R,
                            headers: s(i),
                            content: r || null,
                            contentLength: void 0 !== r ? r.length : null,
                            method: c.method,
                            timeouts: c.timeouts,
                            url: c.url,
                            startTime: P,
                            endTime: a,
                            duration: a - P,
                            statusCode: t
                        }), n) return p._useCache && f && (f[w] = e.responseText), e.body;
                    if (4 !== Math.floor(t / 100)) return d += 1, b();
                    o("unrecoverable error");
                    var l = new u.AlgoliaSearchError(e.body && e.body.message, {
                        debugData: v,
                        statusCode: t
                    });
                    return p._promise.reject(l)
                }

                function y(t) {
                    o("error: %s, stack: %s", t.message, t.stack);
                    var n = new Date;
                    return v.push({
                        currentHost: R,
                        headers: s(i),
                        content: r || null,
                        contentLength: void 0 !== r ? r.length : null,
                        method: c.method,
                        timeouts: c.timeouts,
                        url: c.url,
                        startTime: P,
                        endTime: n,
                        duration: n - P
                    }), t instanceof u.AlgoliaSearchError || (t = new u.Unknown(t && t.message, t)), d += 1, t instanceof u.Unknown || t instanceof u.UnparsableJSON || d >= p.hosts[e.hostType].length && (h || !m) ? (t.debugData = v, p._promise.reject(t)) : t instanceof u.RequestTimeout ? _() : b()
                }

                function b() {
                    return o("retrying request"), p._incrementHostIndex(e.hostType), t(n, c)
                }

                function _() {
                    return o("retrying request with higher timeout"), p._incrementHostIndex(e.hostType), p._incrementTimeoutMultipler(), c.timeouts = p._getTimeoutsForRequest(e.hostType), t(n, c)
                }
                p._checkAppIdData();
                var w, P = new Date;
                if (p._useCache && (w = e.url), p._useCache && r && (w += "_body_" + c.body), p._useCache && f && void 0 !== f[w]) return o("serving response from cache"), p._promise.resolve(JSON.parse(f[w]));
                if (d >= p.hosts[e.hostType].length) return !m || h ? (o("could not get any response"), p._promise.reject(new u.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + p.applicationID, {
                    debugData: v
                }))) : (o("switching to fallback"), d = 0, c.method = e.fallback.method, c.url = e.fallback.url, c.jsonBody = e.fallback.body, c.jsonBody && (c.body = a(c.jsonBody)), i = p._computeRequestHeaders({
                    additionalUA: l,
                    headers: e.headers
                }), c.timeouts = p._getTimeoutsForRequest(e.hostType), p._setHostIndexByType(0, e.hostType), h = !0, t(p._request.fallback, c));
                var R = p._getHostByType(e.hostType),
                    x = R + c.url,
                    S = {
                        body: c.body,
                        jsonBody: c.jsonBody,
                        method: c.method,
                        headers: i,
                        timeouts: c.timeouts,
                        debug: o
                    };
                return o("method: %s, url: %s, headers: %j, timeouts: %d", S.method, x, S.headers, S.timeouts), n === p._request.fallback && o("using fallback"), n.call(p, x, S).then(g, y)
            }
            this._checkAppIdData();
            var r, i, o = n(73)("algoliasearch:" + e.url),
                l = e.additionalUA || "",
                f = e.cache,
                p = this,
                d = 0,
                h = !1,
                m = p._useFallback && p._request.fallback && e.fallback;
            this.apiKey.length > 500 && void 0 !== e.body && (void 0 !== e.body.params || void 0 !== e.body.requests) ? (e.body.apiKey = this.apiKey, i = this._computeRequestHeaders({
                additionalUA: l,
                withApiKey: !1,
                headers: e.headers
            })) : i = this._computeRequestHeaders({
                additionalUA: l,
                headers: e.headers
            }), void 0 !== e.body && (r = a(e.body)), o("request start");
            var v = [],
                g = t(p._request, {
                    url: e.url,
                    method: e.method,
                    body: r,
                    jsonBody: e.body,
                    timeouts: p._getTimeoutsForRequest(e.hostType)
                });
            if ("function" !== typeof e.callback) return g;
            g.then(function(t) {
                c(function() {
                    e.callback(null, t)
                }, p._setTimeout || setTimeout)
            }, function(t) {
                c(function() {
                    e.callback(t)
                }, p._setTimeout || setTimeout)
            })
        }, r.prototype._getSearchParams = function(e, t) {
            if (void 0 === e || null === e) return t;
            for (var n in e) null !== n && void 0 !== e[n] && e.hasOwnProperty(n) && (t += "" === t ? "" : "&", t += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[n]) ? a(e[n]) : e[n]));
            return t
        }, r.prototype._computeRequestHeaders = function(e) {
            var t = n(35),
                r = e.additionalUA ? this._ua + ";" + e.additionalUA : this._ua,
                i = {
                    "x-algolia-agent": r,
                    "x-algolia-application-id": this.applicationID
                };
            return !1 !== e.withApiKey && (i["x-algolia-api-key"] = this.apiKey), this.userToken && (i["x-algolia-usertoken"] = this.userToken), this.securityTags && (i["x-algolia-tagfilters"] = this.securityTags), t(this.extraHeaders, function(e, t) {
                i[t] = e
            }), e.headers && t(e.headers, function(e, t) {
                i[t] = e
            }), i
        }, r.prototype.search = function(e, t, r) {
            var i = n(108),
                a = n(109);
            if (!i(e)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
            "function" === typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
            var o = this,
                s = {
                    requests: a(e, function(e) {
                        var t = "";
                        return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
                            indexName: e.indexName,
                            params: o._getSearchParams(e.params, t)
                        }
                    })
                },
                u = a(s.requests, function(e, t) {
                    return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params)
                }).join("&"),
                c = "/1/indexes/*/queries";
            return void 0 !== t.strategy && (c += "?strategy=" + t.strategy), this._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: c,
                body: s,
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/*",
                    body: {
                        params: u
                    }
                },
                callback: r
            })
        }, r.prototype.setSecurityTags = function(e) {
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                for (var t = [], n = 0; n < e.length; ++n)
                    if ("[object Array]" === Object.prototype.toString.call(e[n])) {
                        for (var r = [], i = 0; i < e[n].length; ++i) r.push(e[n][i]);
                        t.push("(" + r.join(",") + ")")
                    } else t.push(e[n]);
                e = t.join(",")
            }
            this.securityTags = e
        }, r.prototype.setUserToken = function(e) {
            this.userToken = e
        }, r.prototype.clearCache = function() {
            this.cache = {}
        }, r.prototype.setRequestTimeout = function(e) {
            e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e)
        }, r.prototype.setTimeouts = function(e) {
            this._timeouts = e
        }, r.prototype.getTimeouts = function() {
            return this._timeouts
        }, r.prototype._getAppIdData = function() {
            var e = f.get(this.applicationID);
            return null !== e && this._cacheAppIdData(e), e
        }, r.prototype._setAppIdData = function(e) {
            return e.lastChange = (new Date).getTime(), this._cacheAppIdData(e), f.set(this.applicationID, e)
        }, r.prototype._checkAppIdData = function() {
            var e = this._getAppIdData(),
                t = (new Date).getTime();
            return null === e || t - e.lastChange > p ? this._resetInitialAppIdData(e) : e
        }, r.prototype._resetInitialAppIdData = function(e) {
            var t = e || {};
            return t.hostIndexes = {
                read: 0,
                write: 0
            }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || o([1, 2, 3]), this._setAppIdData(t)
        }, r.prototype._cacheAppIdData = function(e) {
            this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult
        }, r.prototype._partialAppIdDataUpdate = function(e) {
            var t = n(35),
                r = this._getAppIdData();
            return t(e, function(e, t) {
                r[t] = e
            }), this._setAppIdData(r)
        }, r.prototype._getHostByType = function(e) {
            return this.hosts[e][this._getHostIndexByType(e)]
        }, r.prototype._getTimeoutMultiplier = function() {
            return this._timeoutMultiplier
        }, r.prototype._getHostIndexByType = function(e) {
            return this._hostIndexes[e]
        }, r.prototype._setHostIndexByType = function(e, t) {
            var r = n(51),
                i = r(this._hostIndexes);
            return i[t] = e, this._partialAppIdDataUpdate({
                hostIndexes: i
            }), e
        }, r.prototype._incrementHostIndex = function(e) {
            return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e)
        }, r.prototype._incrementTimeoutMultipler = function() {
            var e = Math.max(this._timeoutMultiplier + 1, 4);
            return this._partialAppIdDataUpdate({
                timeoutMultiplier: e
            })
        }, r.prototype._getTimeoutsForRequest = function(e) {
            return {
                connect: this._timeouts.connect * this._timeoutMultiplier,
                complete: this._timeouts[e] * this._timeoutMultiplier
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            t(e, 0)
        }
    }, function(e, t, n) {
        function r(e, t) {
            this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
        }
        var i = n(181),
            a = n(362),
            o = n(363);
        e.exports = r, r.prototype.clearCache = function() {
            this.cache = {}
        }, r.prototype.search = i("query"), r.prototype.similarSearch = i("similarQuery"), r.prototype.browse = function(e, t, r) {
            var i, a, o = n(364),
                s = this;
            0 === arguments.length || 1 === arguments.length && "function" === typeof arguments[0] ? (i = 0, r = arguments[0], e = void 0) : "number" === typeof arguments[0] ? (i = arguments[0], "number" === typeof arguments[1] ? a = arguments[1] : "function" === typeof arguments[1] && (r = arguments[1], a = void 0), e = void 0, t = void 0) : "object" === typeof arguments[0] ? ("function" === typeof arguments[1] && (r = arguments[1]), t = arguments[0], e = void 0) : "string" === typeof arguments[0] && "function" === typeof arguments[1] && (r = arguments[1], t = void 0), t = o({}, t || {}, {
                page: i,
                hitsPerPage: a,
                query: e
            });
            var u = this.as._getSearchParams(t, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/browse",
                body: {
                    params: u
                },
                hostType: "read",
                callback: r
            })
        }, r.prototype.browseFrom = function(e, t) {
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                body: {
                    cursor: e
                },
                hostType: "read",
                callback: t
            })
        }, r.prototype.searchForFacetValues = function(e, t) {
            var r = n(51),
                i = n(365);
            if (void 0 === e.facetName || void 0 === e.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");
            var a = e.facetName,
                o = i(r(e), function(e) {
                    return "facetName" === e
                }),
                s = this.as._getSearchParams(o, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(a) + "/query",
                hostType: "read",
                body: {
                    params: s
                },
                callback: t
            })
        }, r.prototype.searchFacet = a(function(e, t) {
            return this.searchForFacetValues(e, t)
        }, o("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), r.prototype._search = function(e, t, n, r) {
            return this.as._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                body: {
                    params: e
                },
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName),
                    body: {
                        params: e
                    }
                },
                callback: n,
                additionalUA: r
            })
        }, r.prototype.getObject = function(e, t, n) {
            var r = this;
            1 !== arguments.length && "function" !== typeof t || (n = t, t = void 0);
            var i = "";
            if (void 0 !== t) {
                i = "?attributes=";
                for (var a = 0; a < t.length; ++a) 0 !== a && (i += ","), i += t[a]
            }
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e) + i,
                hostType: "read",
                callback: n
            })
        }, r.prototype.getObjects = function(e, t, r) {
            var i = n(108),
                a = n(109);
            if (!i(e)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
            var o = this;
            1 !== arguments.length && "function" !== typeof t || (r = t, t = void 0);
            var s = {
                requests: a(e, function(e) {
                    var n = {
                        indexName: o.indexName,
                        objectID: e
                    };
                    return t && (n.attributesToRetrieve = t.join(",")), n
                })
            };
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/*/objects",
                hostType: "read",
                body: s,
                callback: r
            })
        }, r.prototype.as = null, r.prototype.indexName = null, r.prototype.typeAheadArgs = null, r.prototype.typeAheadValueOption = null
    }, function(e, t) {
        e.exports = function(e, t) {
            function n() {
                return r || (console.warn(t), r = !0), e.apply(this, arguments)
            }
            var r = !1;
            return n
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + e.toLowerCase().replace(/[\.\(\)]/g, "")
        }
    }, function(e, t, n) {
        var r = n(35);
        e.exports = function e(t) {
            var n = Array.prototype.slice.call(arguments);
            return r(n, function(n) {
                for (var r in n) n.hasOwnProperty(r) && ("object" === typeof t[r] && "object" === typeof n[r] ? t[r] = e({}, t[r], n[r]) : void 0 !== n[r] && (t[r] = n[r]))
            }), t
        }
    }, function(e, t, n) {
        e.exports = function(e, t) {
            var r = n(366),
                i = n(35),
                a = {};
            return i(r(e), function(n) {
                !0 !== t(n) && (a[n] = e[n])
            }), a
        }
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            a = Array.prototype.slice,
            o = n(367),
            s = Object.prototype.propertyIsEnumerable,
            u = !s.call({
                toString: null
            }, "toString"),
            c = s.call(function() {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            f = function(e) {
                var t = e.constructor;
                return t && t.prototype === e
            },
            p = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            d = function() {
                if ("undefined" === typeof window) return !1;
                for (var e in window) try {
                    if (!p["$" + e] && r.call(window, e) && null !== window[e] && "object" === typeof window[e]) try {
                        f(window[e])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }(),
            h = function(e) {
                if ("undefined" === typeof window || !d) return f(e);
                try {
                    return f(e)
                } catch (e) {
                    return !1
                }
            },
            m = function(e) {
                var t = null !== e && "object" === typeof e,
                    n = "[object Function]" === i.call(e),
                    a = o(e),
                    s = t && "[object String]" === i.call(e),
                    f = [];
                if (!t && !n && !a) throw new TypeError("Object.keys called on a non-object");
                var p = c && n;
                if (s && e.length > 0 && !r.call(e, 0))
                    for (var d = 0; d < e.length; ++d) f.push(String(d));
                if (a && e.length > 0)
                    for (var m = 0; m < e.length; ++m) f.push(String(m));
                else
                    for (var v in e) p && "prototype" === v || !r.call(e, v) || f.push(String(v));
                if (u)
                    for (var g = h(e), y = 0; y < l.length; ++y) g && "constructor" === l[y] || !r.call(e, l[y]) || f.push(l[y]);
                return f
            };
        m.shim = function() {
            if (Object.keys) {
                if (! function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2)) {
                    var e = Object.keys;
                    Object.keys = function(t) {
                        return e(o(t) ? a.call(t) : t)
                    }
                }
            } else Object.keys = m;
            return Object.keys || m
        }, e.exports = m
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function(e) {
            var t = r.call(e),
                n = "[object Arguments]" === t;
            return n || (n = "[object Array]" !== t && null !== e && "object" === typeof e && "number" === typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), n
        }
    }, function(e, t, n) {
        (function(t) {
            function r(e, t) {
                return u("localStorage failed with", t), o(), s = l, s.get(e)
            }

            function i(e, t) {
                return 1 === arguments.length ? s.get(e) : s.set(e, t)
            }

            function a() {
                try {
                    return "localStorage" in t && null !== t.localStorage && (t.localStorage[c] || t.localStorage.setItem(c, JSON.stringify({})), !0)
                } catch (e) {
                    return !1
                }
            }

            function o() {
                try {
                    t.localStorage.removeItem(c)
                } catch (e) {}
            }
            var s, u = n(73)("algoliasearch:src/hostIndexState.js"),
                c = "algoliasearch-client-js",
                l = {
                    state: {},
                    set: function(e, t) {
                        return this.state[e] = t, this.state[e]
                    },
                    get: function(e) {
                        return this.state[e] || null
                    }
                },
                f = {
                    set: function(e, n) {
                        l.set(e, n);
                        try {
                            var i = JSON.parse(t.localStorage[c]);
                            return i[e] = n, t.localStorage[c] = JSON.stringify(i), i[e]
                        } catch (t) {
                            return r(e, t)
                        }
                    },
                    get: function(e) {
                        try {
                            return JSON.parse(t.localStorage[c])[e] || null
                        } catch (t) {
                            return r(e, t)
                        }
                    }
                };
            s = a() ? f : l, e.exports = {
                get: i,
                set: i,
                supportsLocalStorage: a
            }
        }).call(t, n(38))
    }, function(e, t, n) {
        function r(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }

        function i(e) {
            function n() {
                if (n.enabled) {
                    var e = n,
                        r = +new Date,
                        i = r - (c || r);
                    e.diff = i, e.prev = c, e.curr = r, c = r;
                    for (var a = new Array(arguments.length), o = 0; o < a.length; o++) a[o] = arguments[o];
                    a[0] = t.coerce(a[0]), "string" !== typeof a[0] && a.unshift("%O");
                    var s = 0;
                    a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        s++;
                        var i = t.formatters[r];
                        if ("function" === typeof i) {
                            var o = a[s];
                            n = i.call(e, o), a.splice(s, 1), s--
                        }
                        return n
                    }), t.formatArgs.call(e, a);
                    (n.log || t.log || console.log.bind(console)).apply(e, a)
                }
            }
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" === typeof t.init && t.init(n), n
        }

        function a(e) {
            t.save(e), t.names = [], t.skips = [];
            for (var n = ("string" === typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function o() {
            t.enable("")
        }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function u(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = o, t.enable = a, t.enabled = s, t.humanize = n(370), t.names = [], t.skips = [], t.formatters = {};
        var c
    }, function(e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * o;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= s ? Math.round(e / s) + "m" : e >= o ? Math.round(e / o) + "s" : e + "ms"
        }

        function i(e) {
            return a(e, c, "day") || a(e, u, "hour") || a(e, s, "minute") || a(e, o, "second") || e + " ms"
        }

        function a(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var o = 1e3,
            s = 60 * o,
            u = 60 * s,
            c = 24 * u,
            l = 365.25 * c;
        e.exports = function(e, t) {
            t = t || {};
            var a = typeof e;
            if ("string" === a && e.length > 0) return n(e);
            if ("number" === a && !1 === isNaN(e)) return t.long ? i(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(372),
            i = r.Promise || n(373).Promise;
        e.exports = function(e, t) {
            function a(e, t, r) {
                var i = n(51),
                    s = n(378);
                return r = i(r || {}), void 0 === r.protocol && (r.protocol = s()), r._ua = r._ua || a.ua, new o(e, t, r)
            }

            function o() {
                e.apply(this, arguments)
            }
            var s = n(180),
                u = n(72),
                c = n(374),
                l = n(376),
                f = n(377);
            t = t || "", a.version = n(379), a.ua = "Algolia for vanilla JavaScript " + t + a.version, a.initPlaces = f(a), r.__algolia = {
                debug: n(73),
                algoliasearch: a
            };
            var p = {
                hasXMLHttpRequest: "XMLHttpRequest" in r,
                hasXDomainRequest: "XDomainRequest" in r
            };
            return p.hasXMLHttpRequest && (p.cors = "withCredentials" in new XMLHttpRequest), s(o, e), o.prototype._request = function(e, t) {
                return new i(function(n, r) {
                    function i() {
                        if (!h) {
                            clearTimeout(d);
                            var e;
                            try {
                                e = {
                                    body: JSON.parse(v.responseText),
                                    responseText: v.responseText,
                                    statusCode: v.status,
                                    headers: v.getAllResponseHeaders && v.getAllResponseHeaders() || {}
                                }
                            } catch (t) {
                                e = new u.UnparsableJSON({
                                    more: v.responseText
                                })
                            }
                            e instanceof u.UnparsableJSON ? r(e) : n(e)
                        }
                    }

                    function a(e) {
                        h || (clearTimeout(d), r(new u.Network({
                            more: e
                        })))
                    }

                    function o() {
                        h = !0, v.abort(), r(new u.RequestTimeout)
                    }

                    function s() {
                        g = !0, clearTimeout(d), d = setTimeout(o, t.timeouts.complete)
                    }

                    function l() {
                        g || s()
                    }

                    function f() {
                        !g && v.readyState > 1 && s()
                    }
                    if (!p.cors && !p.hasXDomainRequest) return void r(new u.Network("CORS not supported"));
                    e = c(e, t.headers);
                    var d, h, m = t.body,
                        v = p.cors ? new XMLHttpRequest : new XDomainRequest,
                        g = !1;
                    d = setTimeout(o, t.timeouts.connect), v.onprogress = l, "onreadystatechange" in v && (v.onreadystatechange = f), v.onload = i, v.onerror = a, v instanceof XMLHttpRequest ? v.open(t.method, e, !0) : v.open(t.method, e), p.cors && (m && ("POST" === t.method ? v.setRequestHeader("content-type", "application/x-www-form-urlencoded") : v.setRequestHeader("content-type", "application/json")), v.setRequestHeader("accept", "application/json")), v.send(m)
                })
            }, o.prototype._request.fallback = function(e, t) {
                return e = c(e, t.headers), new i(function(n, r) {
                    l(e, t, function(e, t) {
                        if (e) return void r(e);
                        n(t)
                    })
                })
            }, o.prototype._promise = {
                reject: function(e) {
                    return i.reject(e)
                },
                resolve: function(e) {
                    return i.resolve(e)
                },
                delay: function(e) {
                    return new i(function(t) {
                        setTimeout(t, e)
                    })
                }
            }, a
        }
    }, function(e, t, n) {
        (function(t) {
            var n;
            n = "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}, e.exports = n
        }).call(t, n(38))
    }, function(e, t, n) {
        (function(t, n) {
            ! function(t, n) {
                e.exports = n()
            }(0, function() {
                "use strict";

                function e(e) {
                    var t = typeof e;
                    return null !== e && ("object" === t || "function" === t)
                }

                function r(e) {
                    return "function" === typeof e
                }

                function i(e) {
                    V = e
                }

                function a(e) {
                    B = e
                }

                function o() {
                    return "undefined" !== typeof D ? function() {
                        D(u)
                    } : s()
                }

                function s() {
                    var e = setTimeout;
                    return function() {
                        return e(u, 1)
                    }
                }

                function u() {
                    for (var e = 0; e < U; e += 2) {
                        (0, $[e])($[e + 1]), $[e] = void 0, $[e + 1] = void 0
                    }
                    U = 0
                }

                function c(e, t) {
                    var n = this,
                        r = new this.constructor(f);
                    void 0 === r[Y] && E(r);
                    var i = n._state;
                    if (i) {
                        var a = arguments[i - 1];
                        B(function() {
                            return j(i, r, a, n._result)
                        })
                    } else R(n, r, e, t);
                    return r
                }

                function l(e) {
                    var t = this;
                    if (e && "object" === typeof e && e.constructor === t) return e;
                    var n = new t(f);
                    return b(n, e), n
                }

                function f() {}

                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function d() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function h(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return ee.error = e, ee
                    }
                }

                function m(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (e) {
                        return e
                    }
                }

                function v(e, t, n) {
                    B(function(e) {
                        var r = !1,
                            i = m(n, t, function(n) {
                                r || (r = !0, t !== n ? b(e, n) : w(e, n))
                            }, function(t) {
                                r || (r = !0, P(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, P(e, i))
                    }, e)
                }

                function g(e, t) {
                    t._state === X ? w(e, t._result) : t._state === Z ? P(e, t._result) : R(t, void 0, function(t) {
                        return b(e, t)
                    }, function(t) {
                        return P(e, t)
                    })
                }

                function y(e, t, n) {
                    t.constructor === e.constructor && n === c && t.constructor.resolve === l ? g(e, t) : n === ee ? (P(e, ee.error), ee.error = null) : void 0 === n ? w(e, t) : r(n) ? v(e, t, n) : w(e, t)
                }

                function b(t, n) {
                    t === n ? P(t, p()) : e(n) ? y(t, n, h(n)) : w(t, n)
                }

                function _(e) {
                    e._onerror && e._onerror(e._result), x(e)
                }

                function w(e, t) {
                    e._state === G && (e._result = t, e._state = X, 0 !== e._subscribers.length && B(x, e))
                }

                function P(e, t) {
                    e._state === G && (e._state = Z, e._result = t, B(_, e))
                }

                function R(e, t, n, r) {
                    var i = e._subscribers,
                        a = i.length;
                    e._onerror = null, i[a] = t, i[a + X] = n, i[a + Z] = r, 0 === a && e._state && B(x, e)
                }

                function x(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? j(n, r, i, a) : i(a);
                        e._subscribers.length = 0
                    }
                }

                function S(e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return ee.error = e, ee
                    }
                }

                function j(e, t, n, i) {
                    var a = r(n),
                        o = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0;
                    if (a) {
                        if (o = S(n, i), o === ee ? (c = !0, s = o.error, o.error = null) : u = !0, t === o) return void P(t, d())
                    } else o = i, u = !0;
                    t._state !== G || (a && u ? b(t, o) : c ? P(t, s) : e === X ? w(t, o) : e === Z && P(t, o))
                }

                function C(e, t) {
                    try {
                        t(function(t) {
                            b(e, t)
                        }, function(t) {
                            P(e, t)
                        })
                    } catch (t) {
                        P(e, t)
                    }
                }

                function O() {
                    return te++
                }

                function E(e) {
                    e[Y] = te++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function F() {
                    return new Error("Array Methods must be provided an Array")
                }

                function N(e) {
                    return new ne(this, e).promise
                }

                function k(e) {
                    var t = this;
                    return new t(I(e) ? function(n, r) {
                        for (var i = e.length, a = 0; a < i; a++) t.resolve(e[a]).then(n, r)
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }

                function T(e) {
                    var t = this,
                        n = new t(f);
                    return P(n, e), n
                }

                function M() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function A() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function L() {
                    var e = void 0;
                    if ("undefined" !== typeof n) e = n;
                    else if ("undefined" !== typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return
                    }
                    e.Promise = re
                }
                var H = void 0;
                H = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var I = H,
                    U = 0,
                    D = void 0,
                    V = void 0,
                    B = function(e, t) {
                        $[U] = e, $[U + 1] = t, 2 === (U += 2) && (V ? V(u) : J())
                    },
                    Q = "undefined" !== typeof window ? window : void 0,
                    q = Q || {},
                    W = q.MutationObserver || q.WebKitMutationObserver,
                    z = "undefined" === typeof self && "undefined" !== typeof t && "[object process]" === {}.toString.call(t),
                    K = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
                    $ = new Array(1e3),
                    J = void 0;
                J = z ? function() {
                    return function() {
                        return t.nextTick(u)
                    }
                }() : W ? function() {
                    var e = 0,
                        t = new W(u),
                        n = document.createTextNode("");
                    return t.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = e = ++e % 2
                        }
                }() : K ? function() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = u,
                        function() {
                            return e.port2.postMessage(0)
                        }
                }() : void 0 === Q ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return D = e.runOnLoop || e.runOnContext, o()
                    } catch (e) {
                        return s()
                    }
                }() : s();
                var Y = Math.random().toString(36).substring(2),
                    G = void 0,
                    X = 1,
                    Z = 2,
                    ee = {
                        error: null
                    },
                    te = 0,
                    ne = function() {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(f), this.promise[Y] || E(this.promise), I(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : P(this.promise, F())
                        }
                        return e.prototype._enumerate = function(e) {
                            for (var t = 0; this._state === G && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function(e, t) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === l) {
                                var i = h(e);
                                if (i === c && e._state !== G) this._settledAt(e._state, t, e._result);
                                else if ("function" !== typeof i) this._remaining--, this._result[t] = e;
                                else if (n === re) {
                                    var a = new n(f);
                                    y(a, e, i), this._willSettleAt(a, t)
                                } else this._willSettleAt(new n(function(t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(r(e), t)
                        }, e.prototype._settledAt = function(e, t, n) {
                            var r = this.promise;
                            r._state === G && (this._remaining--, e === Z ? P(r, n) : this._result[t] = n), 0 === this._remaining && w(r, this._result)
                        }, e.prototype._willSettleAt = function(e, t) {
                            var n = this;
                            R(e, void 0, function(e) {
                                return n._settledAt(X, t, e)
                            }, function(e) {
                                return n._settledAt(Z, t, e)
                            })
                        }, e
                    }(),
                    re = function() {
                        function e(t) {
                            this[Y] = O(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" !== typeof t && M(), this instanceof e ? C(this, t) : A())
                        }
                        return e.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, e.prototype.finally = function(e) {
                            var t = this,
                                n = t.constructor;
                            return t.then(function(t) {
                                return n.resolve(e()).then(function() {
                                    return t
                                })
                            }, function(t) {
                                return n.resolve(e()).then(function() {
                                    throw t
                                })
                            })
                        }, e
                    }();
                return re.prototype.then = c, re.all = N, re.race = k, re.resolve = l, re.reject = T, re._setScheduler = i, re._setAsap = a, re._asap = B, re.polyfill = L, re.Promise = re, re
            })
        }).call(t, n(71), n(38))
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return /\?/.test(e) ? e += "&" : e += "?", e + i(t)
        }
        e.exports = r;
        var i = n(375)
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }
        var i = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function(e, t, n, s) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" === typeof e ? r(o(e), function(o) {
                var s = encodeURIComponent(i(o)) + n;
                return a(e[o]) ? r(e[o], function(e) {
                    return s + encodeURIComponent(i(e))
                }).join(t) : s + encodeURIComponent(i(e[o]))
            }).join(t) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(e)) : ""
        };
        var a = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            o = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            function r() {
                t.debug("JSONP: success"), v || p || (v = !0, f || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), s(), n(new i.JSONPScriptFail)))
            }

            function o() {
                "loaded" !== this.readyState && "complete" !== this.readyState || r()
            }

            function s() {
                clearTimeout(g), h.onload = null, h.onreadystatechange = null, h.onerror = null, d.removeChild(h)
            }

            function u() {
                try {
                    delete window[m], delete window[m + "_loaded"]
                } catch (e) {
                    window[m] = window[m + "_loaded"] = void 0
                }
            }

            function c() {
                t.debug("JSONP: Script timeout"), p = !0, s(), n(new i.RequestTimeout)
            }

            function l() {
                t.debug("JSONP: Script error"), v || p || (s(), n(new i.JSONPScriptError))
            }
            if ("GET" !== t.method) return void n(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
            t.debug("JSONP: start");
            var f = !1,
                p = !1;
            a += 1;
            var d = document.getElementsByTagName("head")[0],
                h = document.createElement("script"),
                m = "algoliaJSONP_" + a,
                v = !1;
            window[m] = function(e) {
                if (u(), p) return void t.debug("JSONP: Late answer, ignoring");
                f = !0, s(), n(null, {
                    body: e
                })
            }, e += "&callback=" + m, t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
            var g = setTimeout(c, t.timeouts.complete);
            h.onreadystatechange = o, h.onload = r, h.onerror = l, h.async = !0, h.defer = !0, h.src = e, d.appendChild(h)
        }
        e.exports = r;
        var i = n(72),
            a = 0
    }, function(e, t, n) {
        function r(e) {
            return function(t, r, a) {
                var o = n(51);
                a = a && o(a) || {}, a.hosts = a.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" !== typeof t && void 0 !== t || (t = "", r = "", a._allowEmptyCredentials = !0);
                var s = e(t, r, a),
                    u = s.initIndex("places");
                return u.search = i("query", "/1/places/query"), u.getObject = function(e, t) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/places/" + encodeURIComponent(e),
                        hostType: "read",
                        callback: t
                    })
                }, u
            }
        }
        e.exports = r;
        var i = n(181)
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = window.document.location.protocol;
            return "http:" !== e && "https:" !== e && (e = "http:"), e
        }
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        e.exports = "3.24.9"
    }, function(e, t, n) {
        var r = n(153),
            i = n(22),
            a = n(183),
            o = n(86),
            s = i(function(e) {
                return a(r(e, 1, o, !0))
            });
        e.exports = s
    }, function(e, t, n) {
        var r = n(136),
            i = n(168),
            a = n(58),
            o = r && 1 / a(new r([, -0]))[1] == 1 / 0 ? function(e) {
                return new r(e)
            } : i;
        e.exports = o
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = e;
            return function() {
                var e = Date.now(),
                    n = e - t;
                return t = e, n
            }
        }

        function o(e) {
            return s() + window.location.pathname + e
        }

        function s() {
            return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }

        function u() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.useHash || !1,
                n = e.urlUtils;
            return new w(n || (t ? b : _), e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(75),
            f = r(l),
            p = n(106),
            d = r(p),
            h = n(15),
            m = r(h),
            v = n(383),
            g = r(v),
            y = f.default.AlgoliaSearchHelper,
            b = {
                ignoreNextPopState: !1,
                character: "#",
                onpopstate: function(e) {
                    var t = this;
                    this._onHashChange = function(n) {
                        if (t.ignoreNextPopState) return void(t.ignoreNextPopState = !1);
                        e(n)
                    }, window.addEventListener("hashchange", this._onHashChange)
                },
                pushState: function(e) {
                    this.ignoreNextPopState = !0, window.location.assign(o(this.createURL(e)))
                },
                createURL: function(e) {
                    return window.location.search + this.character + e
                },
                readUrl: function() {
                    return window.location.hash.slice(1)
                },
                dispose: function() {
                    window.removeEventListener("hashchange", this._onHashChange), window.location.assign(o(""))
                }
            },
            _ = {
                character: "?",
                onpopstate: function(e) {
                    this._onPopState = function() {
                        return e.apply(void 0, arguments)
                    }, window.addEventListener("popstate", this._onPopState)
                },
                pushState: function(e, t) {
                    var n = t.getHistoryState;
                    window.history.pushState(n(), "", o(this.createURL(e)))
                },
                createURL: function(e) {
                    return this.character + e + document.location.hash
                },
                readUrl: function() {
                    return window.location.search.slice(1)
                },
                dispose: function() {
                    window.removeEventListener("popstate", this._onPopState), window.history.pushState(null, null, o(""))
                }
            },
            w = function() {
                function e(t, n) {
                    i(this, e), this.urlUtils = t, this.originalConfig = null, this.timer = a(Date.now()), this.mapping = n.mapping || {}, this.getHistoryState = n.getHistoryState || function() {
                        return null
                    }, this.threshold = n.threshold || 700, this.trackedParameters = n.trackedParameters || ["query", "attribute:*", "index", "page", "hitsPerPage"], this.firstRender = !0, this.searchParametersFromUrl = y.getConfigurationFromQueryString(this.urlUtils.readUrl(), {
                        mapping: this.mapping
                    })
                }
                return c(e, [{
                    key: "init",
                    value: function(e) {
                        var t = e.state;
                        this.initState = t
                    }
                }, {
                    key: "getConfiguration",
                    value: function(e) {
                        return this.originalConfig = (0, f.default)({
                            addAlgoliaAgent: function() {}
                        }, e.index, e).state, this.searchParametersFromUrl
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var t = this,
                            n = e.helper,
                            r = e.state;
                        if (this.firstRender) {
                            this.firstRender = !1, this.onHistoryChange(this.onPopState.bind(this, n)), n.on("change", function(e) {
                                return t.renderURLFromState(e)
                            });
                            this.getQueryString(this.initState) !== this.getQueryString(r) && this.renderURLFromState(r)
                        }
                    }
                }, {
                    key: "dispose",
                    value: function(e) {
                        e.helper.removeListener("change", this.renderURLFromState), this.urlUtils.dispose()
                    }
                }, {
                    key: "onPopState",
                    value: function(e, t) {
                        clearTimeout(this.urlUpdateTimeout);
                        var n = e.getState(this.trackedParameters),
                            r = (0, g.default)({}, this.originalConfig, n);
                        (0, m.default)(r, t) || e.overrideStateWithoutTriggeringChangeEvent(t).search()
                    }
                }, {
                    key: "renderURLFromState",
                    value: function(e) {
                        var t = this,
                            n = this.getQueryString(e);
                        clearTimeout(this.urlUpdateTimeout), this.urlUpdateTimeout = setTimeout(function() {
                            t.urlUtils.pushState(n, {
                                getHistoryState: t.getHistoryState
                            })
                        }, this.threshold)
                    }
                }, {
                    key: "getQueryString",
                    value: function(e) {
                        var t = this.urlUtils.readUrl(),
                            n = y.getForeignConfigurationInQueryString(t, {
                                mapping: this.mapping
                            });
                        return d.default.getQueryStringFromState(e.filter(this.trackedParameters), {
                            moreAttributes: n,
                            mapping: this.mapping,
                            safe: !0
                        })
                    }
                }, {
                    key: "createURL",
                    value: function(e, t) {
                        var n = t.absolute,
                            r = e.filter(this.trackedParameters),
                            i = this.urlUtils.createURL(f.default.url.getQueryStringFromState(r, {
                                mapping: this.mapping
                            }));
                        return n ? o(i) : i
                    }
                }, {
                    key: "onHistoryChange",
                    value: function(e) {
                        var t = this;
                        this.urlUtils.onpopstate(function() {
                            var n = t.urlUtils.readUrl(),
                                r = y.getConfigurationFromQueryString(n, {
                                    mapping: t.mapping
                                }),
                                i = (0, g.default)({}, t.originalConfig, r);
                            e(i)
                        })
                    }
                }]), e
            }();
        t.default = u
    }, function(e, t, n) {
        var r = n(62),
            i = n(23),
            a = n(68),
            o = n(13),
            s = n(41),
            u = n(7),
            c = Object.prototype,
            l = c.hasOwnProperty,
            f = a(function(e, t) {
                if (s(t) || o(t)) return void i(t, u(t), e);
                for (var n in t) l.call(t, n) && r(e, n, t[n])
            });
        e.exports = f
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.numberLocale;
            return {
                formatNumber: function(e, n) {
                    return Number(n(e)).toLocaleString(t)
                }
            }
        }
    }, function(e, t, n) {
        function r(e) {
            return e && e.length ? i(e) : []
        }
        var i = n(183);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t, n) {
            t = n ? void 0 : t;
            var o = i(e, a, void 0, void 0, void 0, void 0, void 0, t);
            return o.placeholder = r.placeholder, o
        }
        var i = n(69),
            a = 8;
        r.placeholder = {}, e.exports = r
    }, function(e, t, n) {
        var r = n(388);
        r.Template = n(389).Template, r.template = r.Template, e.exports = r
    }, function(e, t, n) {
        ! function(e) {
            function t(e) {
                "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
            }

            function n(e) {
                return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
            }

            function r(e, t, n) {
                if (t.charAt(n) != e.charAt(0)) return !1;
                for (var r = 1, i = e.length; r < i; r++)
                    if (t.charAt(n + r) != e.charAt(r)) return !1;
                return !0
            }

            function i(t, n, r, s) {
                var u = [],
                    c = null,
                    l = null,
                    f = null;
                for (l = r[r.length - 1]; t.length > 0;) {
                    if (f = t.shift(), l && "<" == l.tag && !(f.tag in w)) throw new Error("Illegal content in < super tag.");
                    if (e.tags[f.tag] <= e.tags.$ || a(f, s)) r.push(f), f.nodes = i(t, f.tag, r, s);
                    else {
                        if ("/" == f.tag) {
                            if (0 === r.length) throw new Error("Closing tag without opener: /" + f.n);
                            if (c = r.pop(), f.n != c.n && !o(f.n, c.n, s)) throw new Error("Nesting error: " + c.n + " vs. " + f.n);
                            return c.end = f.i, u
                        }
                        "\n" == f.tag && (f.last = 0 == t.length || "\n" == t[0].tag)
                    }
                    u.push(f)
                }
                if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
                return u
            }

            function a(e, t) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n].o == e.n) return e.tag = "#", !0
            }

            function o(e, t, n) {
                for (var r = 0, i = n.length; r < i; r++)
                    if (n[r].c == e && n[r].o == t) return !0
            }

            function s(e) {
                var t = [];
                for (var n in e) t.push('"' + c(n) + '": function(c,p,t,i) {' + e[n] + "}");
                return "{ " + t.join(",") + " }"
            }

            function u(e) {
                var t = [];
                for (var n in e.partials) t.push('"' + c(n) + '":{name:"' + c(e.partials[n].name) + '", ' + u(e.partials[n]) + "}");
                return "partials: {" + t.join(",") + "}, subs: " + s(e.subs)
            }

            function c(e) {
                return e.replace(y, "\\\\").replace(m, '\\"').replace(v, "\\n").replace(g, "\\r").replace(b, "\\u2028").replace(_, "\\u2029")
            }

            function l(e) {
                return ~e.indexOf(".") ? "d" : "f"
            }

            function f(e, t) {
                var n = "<" + (t.prefix || ""),
                    r = n + e.n + P++;
                return t.partials[r] = {
                    name: e.n,
                    partials: {}
                }, t.code += 't.b(t.rp("' + c(r) + '",c,p,"' + (e.indent || "") + '"));', r
            }

            function p(e, t) {
                t.code += "t.b(t.t(t." + l(e.n) + '("' + c(e.n) + '",c,p,0)));'
            }

            function d(e) {
                return "t.b(" + e + ");"
            }
            var h = /\S/,
                m = /\"/g,
                v = /\n/g,
                g = /\r/g,
                y = /\\/g,
                b = /\u2028/,
                _ = /\u2029/;
            e.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            }, e.scan = function(i, a) {
                function o() {
                    d.length > 0 && (m.push({
                        tag: "_t",
                        text: new String(d)
                    }), d = "")
                }

                function s() {
                    for (var t = !0, n = y; n < m.length; n++)
                        if (!(t = e.tags[m[n].tag] < e.tags._v || "_t" == m[n].tag && null === m[n].text.match(h))) return !1;
                    return t
                }

                function u(e, t) {
                    if (o(), e && s())
                        for (var n, r = y; r < m.length; r++) m[r].text && ((n = m[r + 1]) && ">" == n.tag && (n.indent = m[r].text.toString()), m.splice(r, 1));
                    else t || m.push({
                        tag: "\n"
                    });
                    v = !1, y = m.length
                }
                var c = i.length,
                    l = 0,
                    f = null,
                    p = null,
                    d = "",
                    m = [],
                    v = !1,
                    g = 0,
                    y = 0,
                    b = "{{",
                    _ = "}}";
                for (a && (a = a.split(" "), b = a[0], _ = a[1]), g = 0; g < c; g++) 0 == l ? r(b, i, g) ? (--g, o(), l = 1) : "\n" == i.charAt(g) ? u(v) : d += i.charAt(g) : 1 == l ? (g += b.length - 1, p = e.tags[i.charAt(g + 1)], f = p ? i.charAt(g + 1) : "_v", "=" == f ? (g = function(e, t) {
                    var r = "=" + _,
                        i = e.indexOf(r, t),
                        a = n(e.substring(e.indexOf("=", t) + 1, i)).split(" ");
                    return b = a[0], _ = a[a.length - 1], i + r.length - 1
                }(i, g), l = 0) : (p && g++, l = 2), v = g) : r(_, i, g) ? (m.push({
                    tag: f,
                    n: n(d),
                    otag: b,
                    ctag: _,
                    i: "/" == f ? v - b.length : g + _.length
                }), d = "", g += _.length - 1, l = 0, "{" == f && ("}}" == _ ? g++ : t(m[m.length - 1]))) : d += i.charAt(g);
                return u(v, !0), m
            };
            var w = {
                _t: !0,
                "\n": !0,
                $: !0,
                "/": !0
            };
            e.stringify = function(t, n, r) {
                return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + u(t) + "}"
            };
            var P = 0;
            e.generate = function(t, n, r) {
                P = 0;
                var i = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                return e.walk(t, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)
            }, e.wrapMain = function(e) {
                return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
            }, e.template = e.Template, e.makeTemplate = function(e, t, n) {
                var r = this.makePartials(e);
                return r.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(r, t, this, n)
            }, e.makePartials = function(e) {
                var t, n = {
                    subs: {},
                    partials: e.partials,
                    name: e.name
                };
                for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
                for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
                return n
            }, e.codegen = {
                "#": function(t, n) {
                    n.code += "if(t.s(t." + l(t.n) + '("' + c(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', e.walk(t.nodes, n), n.code += "});c.pop();}"
                },
                "^": function(t, n) {
                    n.code += "if(!t.s(t." + l(t.n) + '("' + c(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, n), n.code += "};"
                },
                ">": f,
                "<": function(t, n) {
                    var r = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: !0
                    };
                    e.walk(t.nodes, r);
                    var i = n.partials[f(t, n)];
                    i.subs = r.subs, i.partials = r.partials
                },
                $: function(t, n) {
                    var r = {
                        subs: {},
                        code: "",
                        partials: n.partials,
                        prefix: t.n
                    };
                    e.walk(t.nodes, r), n.subs[t.n] = r.code, n.inPartial || (n.code += 't.sub("' + c(t.n) + '",c,p,i);')
                },
                "\n": function(e, t) {
                    t.code += d('"\\n"' + (e.last ? "" : " + i"))
                },
                _v: function(e, t) {
                    t.code += "t.b(t.v(t." + l(e.n) + '("' + c(e.n) + '",c,p,0)));'
                },
                _t: function(e, t) {
                    t.code += d('"' + c(e.text) + '"')
                },
                "{": p,
                "&": p
            }, e.walk = function(t, n) {
                for (var r, i = 0, a = t.length; i < a; i++)(r = e.codegen[t[i].tag]) && r(t[i], n);
                return n
            }, e.parse = function(e, t, n) {
                return n = n || {}, i(e, "", [], n.sectionTags || [])
            }, e.cache = {}, e.cacheKey = function(e, t) {
                return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
            }, e.compile = function(t, n) {
                n = n || {};
                var r = e.cacheKey(t, n),
                    i = this.cache[r];
                if (i) {
                    var a = i.partials;
                    for (var o in a) delete a[o].instance;
                    return i
                }
                return i = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n), this.cache[r] = i
            }
        }(t)
    }, function(e, t, n) {
        ! function(e) {
            function t(e, t, n) {
                var r;
                return t && "object" == typeof t && (void 0 !== t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))), r
            }

            function n(e, t, n, r, i, a) {
                function o() {}

                function s() {}
                o.prototype = e, s.prototype = e.subs;
                var u, c = new o;
                c.subs = new s, c.subsText = {}, c.buf = "", r = r || {}, c.stackSubs = r, c.subsText = a;
                for (u in t) r[u] || (r[u] = t[u]);
                for (u in r) c.subs[u] = r[u];
                i = i || {}, c.stackPartials = i;
                for (u in n) i[u] || (i[u] = n[u]);
                for (u in i) c.partials[u] = i[u];
                return c
            }

            function r(e) {
                return String(null === e || void 0 === e ? "" : e)
            }

            function i(e) {
                return e = r(e), l.test(e) ? e.replace(a, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : e
            }
            e.Template = function(e, t, n, r) {
                e = e || {}, this.r = e.code || this.r, this.c = n, this.options = r || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
            }, e.Template.prototype = {
                r: function(e, t, n) {
                    return ""
                },
                v: i,
                t: r,
                render: function(e, t, n) {
                    return this.ri([e], t || {}, n)
                },
                ri: function(e, t, n) {
                    return this.r(e, t, n)
                },
                ep: function(e, t) {
                    var r = this.partials[e],
                        i = t[r.name];
                    if (r.instance && r.base == i) return r.instance;
                    if ("string" == typeof i) {
                        if (!this.c) throw new Error("No compiler available.");
                        i = this.c.compile(i, this.options)
                    }
                    if (!i) return null;
                    if (this.partials[e].base = i, r.subs) {
                        t.stackText || (t.stackText = {});
                        for (key in r.subs) t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                        i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, t.stackText)
                    }
                    return this.partials[e].instance = i, i
                },
                rp: function(e, t, n, r) {
                    var i = this.ep(e, n);
                    return i ? i.ri(t, n, r) : ""
                },
                rs: function(e, t, n) {
                    var r = e[e.length - 1];
                    if (!f(r)) return void n(e, t, this);
                    for (var i = 0; i < r.length; i++) e.push(r[i]), n(e, t, this), e.pop()
                },
                s: function(e, t, n, r, i, a, o) {
                    var s;
                    return (!f(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, r, i, a, o)), s = !!e, !r && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
                },
                d: function(e, n, r, i) {
                    var a, o = e.split("."),
                        s = this.f(o[0], n, r, i),
                        u = this.options.modelGet,
                        c = null;
                    if ("." === e && f(n[n.length - 2])) s = n[n.length - 1];
                    else
                        for (var l = 1; l < o.length; l++) a = t(o[l], s, u), void 0 !== a ? (c = s, s = a) : s = "";
                    return !(i && !s) && (i || "function" != typeof s || (n.push(c), s = this.mv(s, n, r), n.pop()), s)
                },
                f: function(e, n, r, i) {
                    for (var a = !1, o = null, s = !1, u = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                        if (o = n[c], void 0 !== (a = t(e, o, u))) {
                            s = !0;
                            break
                        }
                    return s ? (i || "function" != typeof a || (a = this.mv(a, n, r)), a) : !i && ""
                },
                ls: function(e, t, n, i, a) {
                    var o = this.options.delimiters;
                    return this.options.delimiters = a, this.b(this.ct(r(e.call(t, i)), t, n)), this.options.delimiters = o, !1
                },
                ct: function(e, t, n) {
                    if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                    return this.c.compile(e, this.options).render(t, n)
                },
                b: function(e) {
                    this.buf += e
                },
                fl: function() {
                    var e = this.buf;
                    return this.buf = "", e
                },
                ms: function(e, t, n, r, i, a, o) {
                    var s, u = t[t.length - 1],
                        c = e.call(u);
                    return "function" == typeof c ? !!r || (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, s.substring(i, a), o)) : c
                },
                mv: function(e, t, n) {
                    var i = t[t.length - 1],
                        a = e.call(i);
                    return "function" == typeof a ? this.ct(r(a.call(i)), i, n) : a
                },
                sub: function(e, t, n, r) {
                    var i = this.subs[e];
                    i && (this.activeSub = e, i(t, n, this, r), this.activeSub = !1)
                }
            };
            var a = /&/g,
                o = /</g,
                s = />/g,
                u = /\'/g,
                c = /\"/g,
                l = /[&<>\"\']/,
                f = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
        }(t)
    }, function(e, t, n) {
        function r(e) {
            return e = a(e), e && s.test(e) ? e.replace(o, i) : e
        }
        var i = n(391),
            a = n(61),
            o = /[&<>"']/g,
            s = RegExp(o.source);
        e.exports = r
    }, function(e, t, n) {
        var r = n(392),
            i = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            a = r(i);
        e.exports = a
    }, function(e, t) {
        function n(e) {
            return function(t) {
                return null == e ? void 0 : e[t]
            }
        }
        e.exports = n
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = s(e) ? i : o;
            return n && u(e, t, n) && (t = void 0), r(e, a(t, 3))
        }
        var i = n(130),
            a = n(9),
            o = n(394),
            s = n(2),
            u = n(99);
        e.exports = r
    }, function(e, t, n) {
        function r(e, t) {
            var n;
            return i(e, function(e, r, i) {
                return !(n = t(e, r, i))
            }), !!n
        }
        var i = n(45);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Math.round(e / t) * t;
            return n < 1 && (n = 1), n
        }

        function i(e) {
            if (e.min === e.max) return [];
            var t = void 0;
            t = e.avg < 100 ? 1 : e.avg < 1e3 ? 10 : 100;
            for (var n = r(Math.round(e.avg), t), i = Math.ceil(e.min), a = r(Math.floor(e.max), t); a > e.max;) a -= t;
            var o = void 0,
                s = void 0,
                u = [];
            if (i !== a) {
                for (o = i, u.push({
                        to: o
                    }); o < n;) s = u[u.length - 1].to, o = r(s + (n - i) / 3, t), o <= s && (o = s + 1), u.push({
                    from: s,
                    to: o
                });
                for (; o < a;) s = u[u.length - 1].to, o = r(s + (a - n) / 3, t), o <= s && (o = s + 1), u.push({
                    from: s,
                    to: o
                });
                1 === u.length && o !== n && (u.push({
                    from: o,
                    to: n
                }), o = n), 1 === u.length ? (u[0].from = e.min, u[0].to = e.max) : delete u[u.length - 1].to
            }
            return u
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            i = n(74),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = (0, r.deprecate)(a.default, "'connectRangeSlider' was replaced by 'connectRange'.\n  Please see https://community.algolia.com/instantsearch.js/v2/connectors/connectRange.html")
    }, function(e, t, n) {
        function r(e) {
            return "number" == typeof e && a(e)
        }
        var i = n(5),
            a = i.isFinite;
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return (0, p.checkRendering)(e, d),
                function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.attributes,
                        r = t.separator,
                        i = void 0 === r ? " > " : r,
                        u = t.rootPath,
                        l = void 0 === u ? null : u,
                        p = s(n, 1),
                        h = p[0];
                    if (!n || !Array.isArray(n) || 0 === n.length) throw new Error(d);
                    return {
                        getConfiguration: function(e) {
                            if (e.hierarchicalFacets) {
                                var t = (0, c.default)(e.hierarchicalFacets, function(e) {
                                    return e.name === h
                                });
                                if (t) return (0, f.default)(t.attributes, n) && t.separator === i || console.warn("Using Breadcrumb & HierarchicalMenu on the same facet with different options. Adding that one will override the configuration of the HierarchicalMenu. Check your options."), {}
                            }
                            return {
                                hierarchicalFacets: [{
                                    attributes: n,
                                    name: h,
                                    separator: i,
                                    rootPath: l
                                }]
                            }
                        },
                        init: function(n) {
                            var r = n.createURL,
                                i = n.helper,
                                a = n.instantSearchInstance;
                            this._createURL = function(e) {
                                if (!e) {
                                    var t = i.getHierarchicalFacetBreadcrumb(h);
                                    if (t.length > 0) return r(i.state.toggleRefinement(h, t[0]))
                                }
                                return r(i.state.toggleRefinement(h, e))
                            }, this._refine = function(e) {
                                if (e) i.toggleRefinement(h, e).search();
                                else {
                                    var t = i.getHierarchicalFacetBreadcrumb(h);
                                    t.length > 0 && i.toggleRefinement(h, t[0]).search()
                                }
                            }, e({
                                createURL: this._createURL,
                                canRefine: !1,
                                instantSearchInstance: a,
                                items: [],
                                refine: this._refine,
                                widgetParams: t
                            }, !0)
                        },
                        render: function(n) {
                            var r = n.instantSearchInstance,
                                i = n.results,
                                u = n.state,
                                c = s(u.hierarchicalFacets, 1),
                                l = c[0].name,
                                f = i.getFacetValues(l),
                                p = o(a(f));
                            e({
                                canRefine: p.length > 0,
                                createURL: this._createURL,
                                instantSearchInstance: r,
                                items: p,
                                refine: this._refine,
                                widgetParams: t
                            }, !1)
                        }
                    }
                }
        }

        function a(e) {
            return e.data.reduce(function(e, t) {
                if (t.isRefined && (e.push({
                        name: t.name,
                        value: t.path
                    }), Array.isArray(t.data))) {
                    var n = a(t);
                    e = e.concat(n)
                }
                return e
            }, [])
        }

        function o(e) {
            return e.map(function(t, n) {
                return {
                    name: t.name,
                    value: n + 1 === e.length ? null : e[n + 1].value
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.default = i;
        var u = n(11),
            c = r(u),
            l = n(15),
            f = r(l),
            p = n(0),
            d = "Usage:\nvar customBreadcrumb = connectBreadcrumb(function renderFn(params, isFirstRendering) {\n  // params = {\n  //   createURL,\n  //   items,\n  //   refine,\n  //   instantSearchInstance,\n  //   widgetParams,\n  // }\n});\nsearch.addWidget(\n  customBreadcrumb({\n    attributes,\n    [ rootPath = null ],\n  })\n);\nFull documentation available at https://community.algolia.com/instantsearch.js/v2/connectors/connectBreadcrumb.html\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(400);
        Object.defineProperty(t, "clearAll", {
            enumerable: !0,
            get: function() {
                return r(i).default
            }
        });
        var a = n(409);
        Object.defineProperty(t, "currentRefinedValues", {
            enumerable: !0,
            get: function() {
                return r(a).default
            }
        });
        var o = n(412);
        Object.defineProperty(t, "hierarchicalMenu", {
            enumerable: !0,
            get: function() {
                return r(o).default
            }
        });
        var s = n(416);
        Object.defineProperty(t, "hits", {
            enumerable: !0,
            get: function() {
                return r(s).default
            }
        });
        var u = n(419);
        Object.defineProperty(t, "hitsPerPageSelector", {
            enumerable: !0,
            get: function() {
                return r(u).default
            }
        });
        var c = n(420);
        Object.defineProperty(t, "infiniteHits", {
            enumerable: !0,
            get: function() {
                return r(c).default
            }
        });
        var l = n(423);
        Object.defineProperty(t, "menu", {
            enumerable: !0,
            get: function() {
                return r(l).default
            }
        });
        var f = n(426);
        Object.defineProperty(t, "refinementList", {
            enumerable: !0,
            get: function() {
                return r(f).default
            }
        });
        var p = n(429);
        Object.defineProperty(t, "numericRefinementList", {
            enumerable: !0,
            get: function() {
                return r(p).default
            }
        });
        var d = n(431);
        Object.defineProperty(t, "numericSelector", {
            enumerable: !0,
            get: function() {
                return r(d).default
            }
        });
        var h = n(432);
        Object.defineProperty(t, "pagination", {
            enumerable: !0,
            get: function() {
                return r(h).default
            }
        });
        var m = n(440);
        Object.defineProperty(t, "priceRanges", {
            enumerable: !0,
            get: function() {
                return r(m).default
            }
        });
        var v = n(444);
        Object.defineProperty(t, "rangeInput", {
            enumerable: !0,
            get: function() {
                return r(v).default
            }
        });
        var g = n(447);
        Object.defineProperty(t, "searchBox", {
            enumerable: !0,
            get: function() {
                return r(g).default
            }
        });
        var y = n(449);
        Object.defineProperty(t, "rangeSlider", {
            enumerable: !0,
            get: function() {
                return r(y).default
            }
        });
        var b = n(459);
        Object.defineProperty(t, "sortBySelector", {
            enumerable: !0,
            get: function() {
                return r(b).default
            }
        });
        var _ = n(460);
        Object.defineProperty(t, "starRating", {
            enumerable: !0,
            get: function() {
                return r(_).default
            }
        });
        var w = n(463);
        Object.defineProperty(t, "stats", {
            enumerable: !0,
            get: function() {
                return r(w).default
            }
        });
        var P = n(466);
        Object.defineProperty(t, "toggle", {
            enumerable: !0,
            get: function() {
                return r(P).default
            }
        });
        var R = n(468);
        Object.defineProperty(t, "analytics", {
            enumerable: !0,
            get: function() {
                return r(R).default
            }
        });
        var x = n(469);
        Object.defineProperty(t, "breadcrumb", {
            enumerable: !0,
            get: function() {
                return r(x).default
            }
        });
        var S = n(472);
        Object.defineProperty(t, "menuSelect", {
            enumerable: !0,
            get: function() {
                return r(S).default
            }
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.templates,
                r = void 0 === n ? m.default : n,
                i = e.cssClasses,
                o = void 0 === i ? {} : i,
                s = e.collapsible,
                u = void 0 !== s && s,
                c = e.autoHideContainer,
                p = void 0 === c || c,
                h = e.excludeAttributes,
                b = void 0 === h ? [] : h,
                _ = e.clearsQuery,
                w = void 0 !== _ && _;
            if (!t) throw new Error(y);
            var P = (0, f.getContainerNode)(t),
                R = {
                    root: (0, l.default)(v(null), o.root),
                    header: (0, l.default)(v("header"), o.header),
                    body: (0, l.default)(v("body"), o.body),
                    footer: (0, l.default)(v("footer"), o.footer),
                    link: (0, l.default)(v("link"), o.link)
                },
                x = g({
                    containerNode: P,
                    cssClasses: R,
                    collapsible: u,
                    autoHideContainer: p,
                    renderState: {},
                    templates: r
                });
            try {
                return (0, d.default)(x, function() {
                    return (0, a.unmountComponentAtNode)(P)
                })({
                    excludeAttributes: b,
                    clearsQuery: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(405),
            u = r(s),
            c = n(3),
            l = r(c),
            f = n(0),
            p = n(186),
            d = r(p),
            h = n(408),
            m = r(h),
            v = (0, f.bemHelper)("ais-clear-all"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    i = e.autoHideContainer,
                    s = e.renderState,
                    c = e.templates;
                return function(e, l) {
                    var p = e.refine,
                        d = e.hasRefinements,
                        h = e.createURL,
                        v = e.instantSearchInstance;
                    if (l) return void(s.templateProps = (0, f.prepareTemplateProps)({
                        defaultTemplates: m.default,
                        templatesConfig: v.templatesConfig,
                        templates: c
                    }));
                    var g = i && !d;
                    (0, a.render)(o.default.createElement(u.default, {
                        refine: p,
                        collapsible: r,
                        cssClasses: n,
                        hasRefinements: d,
                        shouldAutoHideContainer: g,
                        templateProps: s.templateProps,
                        url: h()
                    }), t)
                }
            },
            y = "Usage:\nclearAll({\n  container,\n  [ cssClasses.{root,header,body,footer,link}={} ],\n  [ templates.{header,link,footer}={link: 'Clear all'} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n  [ excludeAttributes=[] ]\n})"
    }, function(e, t, n) {
        e.exports = n(402)()
    }, function(e, t, n) {
        "use strict";
        var r = n(112),
            i = n(113),
            a = n(403);
        e.exports = function() {
            function e(e, t, n, r, o, s) {
                s !== a && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        ! function() {
            "use strict";

            function t() {}

            function n(e, n) {
                var r, i, a, o, s = T;
                for (o = arguments.length; o-- > 2;) k.push(arguments[o]);
                for (n && null != n.children && (k.length || k.push(n.children), delete n.children); k.length;)
                    if ((i = k.pop()) && void 0 !== i.pop)
                        for (o = i.length; o--;) k.push(i[o]);
                    else !0 !== i && !1 !== i || (i = null), (a = "function" != typeof e) && (null == i ? i = "" : "number" == typeof i ? i = String(i) : "string" != typeof i && (a = !1)), a && r ? s[s.length - 1] += i : s === T ? s = [i] : s.push(i), r = a;
                var u = new t;
                return u.nodeName = e, u.children = s, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== N.vnode && N.vnode(u), u
            }

            function r(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function i(e, t) {
                return n(e.nodeName, r(r({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
            }

            function a(e) {
                !e.__d && (e.__d = !0) && 1 == A.push(e) && (N.debounceRendering || setTimeout)(o)
            }

            function o() {
                var e, t = A;
                for (A = []; e = t.pop();) e.__d && j(e)
            }

            function s(e, t, n) {
                return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && u(e, t.nodeName) : n || e._componentConstructor === t.nodeName
            }

            function u(e, t) {
                return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase()
            }

            function c(e) {
                var t = r({}, e.attributes);
                t.children = e.children;
                var n = e.nodeName.defaultProps;
                if (void 0 !== n)
                    for (var i in n) void 0 === t[i] && (t[i] = n[i]);
                return t
            }

            function l(e, t) {
                var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
                return n.__n = e, n
            }

            function f(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }

            function p(e, t, n, r, i) {
                if ("className" === t && (t = "class"), "key" === t);
                else if ("ref" === t) n && n(null), r && r(e);
                else if ("class" !== t || i)
                    if ("style" === t) {
                        if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                            if ("string" != typeof n)
                                for (var a in n) a in r || (e.style[a] = "");
                            for (var a in r) e.style[a] = "number" == typeof r[a] && !1 === M.test(a) ? r[a] + "px" : r[a]
                        }
                    } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
                else if ("o" == t[0] && "n" == t[1]) {
                    var o = t !== (t = t.replace(/Capture$/, ""));
                    t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, h, o) : e.removeEventListener(t, h, o), (e.__l || (e.__l = {}))[t] = r
                } else if ("list" !== t && "type" !== t && !i && t in e) d(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
                else {
                    var s = i && t !== (t = t.replace(/^xlink\:?/, ""));
                    null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
                } else e.className = r || ""
            }

            function d(e, t, n) {
                try {
                    e[t] = n
                } catch (e) {}
            }

            function h(e) {
                return this.__l[e.type](N.event && N.event(e) || e)
            }

            function m() {
                for (var e; e = L.pop();) N.afterMount && N.afterMount(e), e.componentDidMount && e.componentDidMount()
            }

            function v(e, t, n, r, i, a) {
                H++ || (I = null != i && void 0 !== i.ownerSVGElement, U = null != e && !("__preactattr_" in e));
                var o = g(e, t, n, r, a);
                return i && o.parentNode !== i && i.appendChild(o), --H || (U = !1, a || m()), o
            }

            function g(e, t, n, r, i) {
                var a = e,
                    o = I;
                if (null == t && (t = ""), "string" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : (a = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(a, e), b(e, !0))), a.__preactattr_ = !0, a;
                if ("function" == typeof t.nodeName) return C(e, t, n, r);
                if (I = "svg" === t.nodeName || "foreignObject" !== t.nodeName && I, (!e || !u(e, String(t.nodeName))) && (a = l(String(t.nodeName), I), e)) {
                    for (; e.firstChild;) a.appendChild(e.firstChild);
                    e.parentNode && e.parentNode.replaceChild(a, e), b(e, !0)
                }
                var s = a.firstChild,
                    c = a.__preactattr_ || (a.__preactattr_ = {}),
                    f = t.children;
                return !U && f && 1 === f.length && "string" == typeof f[0] && null != s && void 0 !== s.splitText && null == s.nextSibling ? s.nodeValue != f[0] && (s.nodeValue = f[0]) : (f && f.length || null != s) && y(a, f, n, r, U || null != c.dangerouslySetInnerHTML), w(a, t.attributes, c), I = o, a
            }

            function y(e, t, n, r, i) {
                var a, o, u, c, l = e.childNodes,
                    p = [],
                    d = {},
                    h = 0,
                    m = 0,
                    v = l.length,
                    y = 0,
                    _ = t ? t.length : 0;
                if (0 !== v)
                    for (var w = 0; w < v; w++) {
                        var P = l[w],
                            R = P.__preactattr_,
                            x = _ && R ? P._component ? P._component.__k : R.key : null;
                        null != x ? (h++, d[x] = P) : (R || (void 0 !== P.splitText ? !i || P.nodeValue.trim() : i)) && (p[y++] = P)
                    }
                if (0 !== _)
                    for (var w = 0; w < _; w++) {
                        u = t[w], c = null;
                        var x = u.key;
                        if (null != x) h && void 0 !== d[x] && (c = d[x], d[x] = void 0, h--);
                        else if (!c && m < y)
                            for (a = m; a < y; a++)
                                if (void 0 !== p[a] && s(o = p[a], u, i)) {
                                    c = o, p[a] = void 0, a === y - 1 && y--, a === m && m++;
                                    break
                                }
                        c = g(c, u, n, r), c && c !== e && (w >= v ? e.appendChild(c) : c !== l[w] && (c === l[w + 1] ? f(l[w]) : e.insertBefore(c, l[w] || null)))
                    }
                if (h)
                    for (var w in d) void 0 !== d[w] && b(d[w], !1);
                for (; m <= y;) void 0 !== (c = p[y--]) && b(c, !1)
            }

            function b(e, t) {
                var n = e._component;
                n ? O(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || f(e), _(e))
            }

            function _(e) {
                for (e = e.lastChild; e;) {
                    var t = e.previousSibling;
                    b(e, !0), e = t
                }
            }

            function w(e, t, n) {
                var r;
                for (r in n) t && null != t[r] || null == n[r] || p(e, r, n[r], n[r] = void 0, I);
                for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || p(e, r, n[r], n[r] = t[r], I)
            }

            function P(e) {
                var t = e.constructor.name;
                (D[t] || (D[t] = [])).push(e)
            }

            function R(e, t, n) {
                var r, i = D[e.name];
                if (e.prototype && e.prototype.render ? (r = new e(t, n), E.call(r, t, n)) : (r = new E(t, n), r.constructor = e, r.render = x), i)
                    for (var a = i.length; a--;)
                        if (i[a].constructor === e) {
                            r.__b = i[a].__b, i.splice(a, 1);
                            break
                        }
                return r
            }

            function x(e, t, n) {
                return this.constructor(e, n)
            }

            function S(e, t, n, r, i) {
                e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === N.syncComponentUpdates && e.base ? a(e) : j(e, 1, i)), e.__r && e.__r(e))
            }

            function j(e, t, n, i) {
                if (!e.__x) {
                    var a, o, s, u = e.props,
                        l = e.state,
                        f = e.context,
                        p = e.__p || u,
                        d = e.__s || l,
                        h = e.__c || f,
                        g = e.base,
                        y = e.__b,
                        _ = g || y,
                        w = e._component,
                        P = !1;
                    if (g && (e.props = p, e.state = d, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, l, f) ? P = !0 : e.componentWillUpdate && e.componentWillUpdate(u, l, f), e.props = u, e.state = l, e.context = f), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !P) {
                        a = e.render(u, l, f), e.getChildContext && (f = r(r({}, f), e.getChildContext()));
                        var x, C, E = a && a.nodeName;
                        if ("function" == typeof E) {
                            var F = c(a);
                            o = w, o && o.constructor === E && F.key == o.__k ? S(o, F, 1, f, !1) : (x = o, e._component = o = R(E, F, f), o.__b = o.__b || y, o.__u = e, S(o, F, 0, f, !1), j(o, 1, n, !0)), C = o.base
                        } else s = _, x = w, x && (s = e._component = null), (_ || 1 === t) && (s && (s._component = null), C = v(s, a, f, n || !g, _ && _.parentNode, !0));
                        if (_ && C !== _ && o !== w) {
                            var k = _.parentNode;
                            k && C !== k && (k.replaceChild(C, _), x || (_._component = null, b(_, !1)))
                        }
                        if (x && O(x), e.base = C, C && !i) {
                            for (var T = e, M = e; M = M.__u;)(T = M).base = C;
                            C._component = T, C._componentConstructor = T.constructor
                        }
                    }
                    if (!g || n ? L.unshift(e) : P || (m(), e.componentDidUpdate && e.componentDidUpdate(p, d, h), N.afterUpdate && N.afterUpdate(e)), null != e.__h)
                        for (; e.__h.length;) e.__h.pop().call(e);
                    H || i || m()
                }
            }

            function C(e, t, n, r) {
                for (var i = e && e._component, a = i, o = e, s = i && e._componentConstructor === t.nodeName, u = s, l = c(t); i && !u && (i = i.__u);) u = i.constructor === t.nodeName;
                return i && u && (!r || i._component) ? (S(i, l, 3, n, r), e = i.base) : (a && !s && (O(a), e = o = null), i = R(t.nodeName, l, n), e && !i.__b && (i.__b = e, o = null), S(i, l, 1, n, r), e = i.base, o && e !== o && (o._component = null, b(o, !1))), e
            }

            function O(e) {
                N.beforeUnmount && N.beforeUnmount(e);
                var t = e.base;
                e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
                var n = e._component;
                n ? O(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, f(t), P(e), _(t)), e.__r && e.__r(null)
            }

            function E(e, t) {
                this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}
            }

            function F(e, t, n) {
                return v(n, e, {}, !1, t, !1)
            }
            var N = {},
                k = [],
                T = [],
                M = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
                A = [],
                L = [],
                H = 0,
                I = !1,
                U = !1,
                D = {};
            r(E.prototype, {
                setState: function(e, t) {
                    var n = this.state;
                    this.__s || (this.__s = r({}, n)), r(n, "function" == typeof e ? e(n, this.props) : e), t && (this.__h = this.__h || []).push(t), a(this)
                },
                forceUpdate: function(e) {
                    e && (this.__h = this.__h || []).push(e), j(this, 2)
                },
                render: function() {}
            });
            var V = {
                h: n,
                createElement: n,
                cloneElement: i,
                Component: E,
                render: F,
                rerender: o,
                options: N
            };
            e.exports = V
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawClearAll = void 0;
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = n(16),
            d = r(p),
            h = n(0),
            m = n(12),
            v = r(m),
            g = n(19),
            y = r(g),
            b = t.RawClearAll = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.props.url !== e.url || this.props.hasRefinements !== e.hasRefinements
                    }
                }, {
                    key: "handleClick",
                    value: function(e) {
                        (0, h.isSpecialClick)(e) || (e.preventDefault(), this.props.refine())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.hasRefinements,
                            n = e.cssClasses,
                            r = {
                                hasRefinements: t
                            };
                        return f.default.createElement("a", {
                            className: t ? n.link : n.link + " " + n.link + "-disabled",
                            href: this.props.url,
                            onClick: this.handleClick
                        }, f.default.createElement(d.default, s({
                            data: r,
                            templateKey: "link"
                        }, this.props.templateProps)))
                    }
                }]), t
            }(l.Component);
        t.default = (0, v.default)((0, y.default)(b))
    }, function(e, t, n) {
        "use strict";
        var r = n(112),
            i = n(113),
            a = n(407);
        e.exports = function() {
            function e(e, t, n, r, o, s) {
                s !== a && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            link: "Clear all",
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.attributes,
                r = void 0 === n ? [] : n,
                i = e.onlyListedAttributes,
                o = void 0 !== i && i,
                s = e.clearAll,
                c = void 0 === s ? "before" : s,
                f = e.templates,
                d = void 0 === f ? O.default : f,
                m = e.transformData,
                g = e.autoHideContainer,
                b = void 0 === g || g,
                w = e.cssClasses,
                R = void 0 === w ? {} : w,
                x = e.collapsible,
                S = void 0 !== x && x,
                C = e.clearsQuery,
                T = void 0 !== C && C,
                M = (0, l.default)(m) || (0, _.default)(m) || (0, y.default)(m) && (0, _.default)(m.item),
                A = ["header", "item", "clearAll", "footer"],
                L = (0, y.default)(d) && (0, P.default)(d, function(e, t, n) {
                    return e && -1 !== A.indexOf(n) && ((0, h.default)(t) || (0, _.default)(t))
                }, !0),
                H = ["root", "header", "body", "clearAll", "list", "item", "link", "count", "footer"],
                I = (0, y.default)(R) && (0, P.default)(R, function(e, t, n) {
                    return e && -1 !== H.indexOf(n) && (0, h.default)(t) || (0, v.default)(t)
                }, !0);
            if (!((0, h.default)(t) || (0, E.isDomElement)(t)) || !(0, v.default)(r) || !(0, p.default)(o) || -1 === [!1, "before", "after"].indexOf(c) || !(0, y.default)(d) || !L || !M || !(0, p.default)(b) || !I) throw new Error(k);
            var U = (0, E.getContainerNode)(t),
                D = {
                    root: (0, u.default)(F(null), R.root),
                    header: (0, u.default)(F("header"), R.header),
                    body: (0, u.default)(F("body"), R.body),
                    clearAll: (0, u.default)(F("clear-all"), R.clearAll),
                    list: (0, u.default)(F("list"), R.list),
                    item: (0, u.default)(F("item"), R.item),
                    link: (0, u.default)(F("link"), R.link),
                    count: (0, u.default)(F("count"), R.count),
                    footer: (0, u.default)(F("footer"), R.footer)
                },
                V = N({
                    containerNode: U,
                    clearAllPosition: c,
                    collapsible: S,
                    cssClasses: D,
                    autoHideContainer: b,
                    renderState: {},
                    templates: d,
                    transformData: m
                });
            try {
                return (0, j.default)(V, function() {
                    return (0, a.unmountComponentAtNode)(U)
                })({
                    attributes: r,
                    onlyListedAttributes: o,
                    clearAll: c,
                    clearsQuery: T
                })
            } catch (e) {
                throw new Error(k)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(66),
            l = r(c),
            f = n(188),
            p = r(f),
            d = n(28),
            h = r(d),
            m = n(2),
            v = r(m),
            g = n(26),
            y = r(g),
            b = n(20),
            _ = r(b),
            w = n(18),
            P = r(w),
            R = n(410),
            x = r(R),
            S = n(187),
            j = r(S),
            C = n(411),
            O = r(C),
            E = n(0),
            F = (0, E.bemHelper)("ais-current-refined-values"),
            N = function(e) {
                var t = e.autoHideContainer,
                    n = e.clearAllPosition,
                    r = e.collapsible,
                    i = e.containerNode,
                    s = e.cssClasses,
                    u = e.renderState,
                    c = e.transformData,
                    l = e.templates;
                return function(e, f) {
                    var p = e.attributes,
                        d = e.clearAllClick,
                        h = e.clearAllURL,
                        m = e.refine,
                        v = e.createURL,
                        g = e.refinements,
                        y = e.instantSearchInstance;
                    if (f) return void(u.templateProps = (0, E.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: O.default,
                        templatesConfig: y.templatesConfig,
                        templates: l
                    }));
                    var b = t && g && 0 === g.length,
                        _ = g.map(function(e) {
                            return m.bind(null, e)
                        }),
                        w = g.map(function(e) {
                            return v(e)
                        });
                    (0, a.render)(o.default.createElement(x.default, {
                        attributes: p,
                        clearAllClick: d,
                        clearAllPosition: n,
                        clearAllURL: h,
                        clearRefinementClicks: _,
                        clearRefinementURLs: w,
                        collapsible: r,
                        cssClasses: s,
                        refinements: g,
                        shouldAutoHideContainer: b,
                        templateProps: u.templateProps
                    }), i)
                }
            },
            k = "Usage:\ncurrentRefinedValues({\n  container,\n  [ attributes: [{name[, label, template, transformData]}] ],\n  [ onlyListedAttributes = false ],\n  [ clearAll = 'before' ] // One of ['before', 'after', false]\n  [ templates.{header,item,clearAll,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer = true ],\n  [ cssClasses.{root, header, body, clearAll, list, item, link, count, footer} = {} ],\n  [ collapsible = false ]\n  [ clearsQuery = false ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e) {
            var t = {};
            return void 0 !== e.template && (t.templates = {
                item: e.template
            }), void 0 !== e.transformData && (t.transformData = e.transformData), t
        }

        function u(e, t, n) {
            var r = (0, S.default)(t);
            return r.cssClasses = n, void 0 !== e.label && (r.label = e.label), void 0 !== r.operator && (r.displayOperator = r.operator, ">=" === r.operator && (r.displayOperator = "&ge;"), "<=" === r.operator && (r.displayOperator = "&le;")), r
        }

        function c(e) {
            return function(t) {
                (0, w.isSpecialClick)(t) || (t.preventDefault(), e())
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawCurrentRefinedValues = void 0;
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            p = n(4),
            d = (r(p), n(1)),
            h = r(d),
            m = n(16),
            v = r(m),
            g = n(19),
            y = r(g),
            b = n(12),
            _ = r(b),
            w = n(0),
            P = n(10),
            R = r(P),
            x = n(203),
            S = r(x),
            j = n(15),
            C = r(j),
            O = t.RawCurrentRefinedValues = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), f(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0, C.default)(this.props.refinements, e.refinements)
                    }
                }, {
                    key: "_clearAllElement",
                    value: function(e, t) {
                        if (t === e) {
                            var n = this.props,
                                r = n.refinements,
                                i = n.cssClasses;
                            return h.default.createElement("a", {
                                className: r && r.length > 0 ? i.clearAll : i.clearAll + " " + i.clearAll + "-disabled",
                                href: this.props.clearAllURL,
                                onClick: c(this.props.clearAllClick)
                            }, h.default.createElement(v.default, l({
                                templateKey: "clearAll"
                            }, this.props.templateProps)))
                        }
                    }
                }, {
                    key: "_refinementElement",
                    value: function(e, t) {
                        var n = this.props.attributes[e.attributeName] || {},
                            r = u(n, e, this.props.cssClasses),
                            i = s(n),
                            a = e.attributeName + (e.operator ? e.operator : ":") + (e.exclude ? e.exclude : "") + e.name;
                        return h.default.createElement("div", {
                            className: this.props.cssClasses.item,
                            key: a
                        }, h.default.createElement("a", {
                            className: this.props.cssClasses.link,
                            href: this.props.clearRefinementURLs[t],
                            onClick: c(this.props.clearRefinementClicks[t])
                        }, h.default.createElement(v.default, l({
                            data: r,
                            templateKey: "item"
                        }, this.props.templateProps, i))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = (0, R.default)(this.props.refinements, function(t, n) {
                                return e._refinementElement(t, n)
                            });
                        return h.default.createElement("div", null, this._clearAllElement("before", this.props.clearAllPosition), h.default.createElement("div", {
                            className: this.props.cssClasses.list
                        }, t), this._clearAllElement("after", this.props.clearAllPosition))
                    }
                }]), t
            }(d.Component);
        t.default = (0, _.default)((0, y.default)(O))
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.label,
                n = e.operator,
                r = e.displayOperator,
                i = e.exclude,
                a = e.name,
                o = e.count,
                s = e.cssClasses,
                u = e.query,
                c = n ? r : "",
                l = t ? t + " " + (c || ":") + " " : c,
                f = void 0 === o ? 0 : o,
                p = u ? "" : '<span class="' + s.count + '">' + f + "</span>";
            return l + " " + (i ? "-" : "") + " " + a + " " + p
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: r,
            clearAll: "Clear all",
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributes,
                r = e.separator,
                i = void 0 === r ? " > " : r,
                o = e.rootPath,
                s = void 0 === o ? null : o,
                c = e.showParentLevel,
                f = void 0 === c || c,
                p = e.limit,
                d = void 0 === p ? 10 : p,
                b = e.sortBy,
                _ = void 0 === b ? ["name:asc"] : b,
                w = e.cssClasses,
                P = void 0 === w ? {} : w,
                R = e.autoHideContainer,
                x = void 0 === R || R,
                S = e.templates,
                j = void 0 === S ? h.default : S,
                C = e.collapsible,
                O = void 0 !== C && C,
                E = e.transformData;
            if (!t || !n || !n.length) throw new Error(y);
            var F = (0, m.getContainerNode)(t),
                N = {
                    root: (0, u.default)(v(null), P.root),
                    header: (0, u.default)(v("header"), P.header),
                    body: (0, u.default)(v("body"), P.body),
                    footer: (0, u.default)(v("footer"), P.footer),
                    list: (0, u.default)(v("list"), P.list),
                    depth: v("list", "lvl"),
                    item: (0, u.default)(v("item"), P.item),
                    active: (0, u.default)(v("item", "active"), P.active),
                    link: (0, u.default)(v("link"), P.link),
                    count: (0, u.default)(v("count"), P.count)
                },
                k = g({
                    autoHideContainer: x,
                    collapsible: O,
                    cssClasses: N,
                    containerNode: F,
                    transformData: E,
                    templates: j,
                    renderState: {}
                });
            try {
                return (0, l.default)(k, function() {
                    return (0, a.unmountComponentAtNode)(F)
                })({
                    attributes: n,
                    separator: i,
                    rootPath: s,
                    showParentLevel: f,
                    limit: d,
                    sortBy: _
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(189),
            l = r(c),
            f = n(36),
            p = r(f),
            d = n(415),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hierarchical-menu"),
            g = function(e) {
                var t = e.autoHideContainer,
                    n = e.collapsible,
                    r = e.cssClasses,
                    i = e.containerNode,
                    s = e.transformData,
                    u = e.templates,
                    c = e.renderState;
                return function(e, l) {
                    var f = e.createURL,
                        d = e.items,
                        v = e.refine,
                        g = e.instantSearchInstance;
                    if (l) return void(c.templateProps = (0, m.prepareTemplateProps)({
                        transformData: s,
                        defaultTemplates: h.default,
                        templatesConfig: g.templatesConfig,
                        templates: u
                    }));
                    var y = t && 0 === d.length;
                    (0, a.render)(o.default.createElement(p.default, {
                        collapsible: n,
                        createURL: f,
                        cssClasses: r,
                        facetValues: d,
                        shouldAutoHideContainer: y,
                        templateProps: c.templateProps,
                        toggleRefinement: v
                    }), i)
                }
            },
            y = "Usage:\nhierarchicalMenu({\n  container,\n  attributes,\n  [ separator=' > ' ],\n  [ rootPath ],\n  [ showParentLevel=false ],\n  [ limit=10 ],\n  [ sortBy=['name:asc'] ],\n  [ cssClasses.{root , header, body, footer, list, depth, item, active, link}={} ],\n  [ templates.{header, item, footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = n(16),
            d = r(p),
            h = n(15),
            m = r(h),
            v = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0, m.default)(this.props, e)
                    }
                }, {
                    key: "handleClick",
                    value: function(e) {
                        this.props.handleClick({
                            facetValueToRefine: this.props.facetValueToRefine,
                            isRefined: this.props.isRefined,
                            originalEvent: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return f.default.createElement("div", {
                            className: this.props.itemClassName,
                            onClick: this.handleClick
                        }, f.default.createElement(d.default, s({
                            data: this.props.templateData,
                            templateKey: this.props.templateKey
                        }, this.props.templateProps)), this.props.subItems)
                    }
                }]), t
            }(l.Component);
        t.default = v
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(4),
            c = (r(u), n(1)),
            l = r(c),
            f = l.default.createElement("symbol", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "sbx-icon-search-12",
                viewBox: "0 0 40 41"
            }, l.default.createElement("path", {
                d: "M30.967 27.727l-.03-.03c-.778-.777-2.038-.777-2.815 0l-1.21 1.21c-.78.78-.778 2.04 0 2.817l.03.03 4.025-4.027zm1.083 1.084L39.24 36c.778.778.78 2.037 0 2.816l-1.21 1.21c-.777.778-2.038.78-2.816 0l-7.19-7.19 4.026-4.025zM15.724 31.45c8.684 0 15.724-7.04 15.724-15.724C31.448 7.04 24.408 0 15.724 0 7.04 0 0 7.04 0 15.724c0 8.684 7.04 15.724 15.724 15.724zm0-3.93c6.513 0 11.793-5.28 11.793-11.794 0-6.513-5.28-11.793-11.793-11.793C9.21 3.93 3.93 9.21 3.93 15.725c0 6.513 5.28 11.793 11.794 11.793z",
                fillRule: "evenodd"
            })),
            p = l.default.createElement("symbol", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "sbx-icon-clear-2",
                viewBox: "0 0 20 20"
            }, l.default.createElement("path", {
                d: "M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z",
                fillRule: "evenodd"
            })),
            d = l.default.createElement("button", {
                type: "submit",
                title: "Submit your search query.",
                className: "sbx-sffv__submit"
            }, l.default.createElement("svg", {
                role: "img",
                "aria-label": "Search"
            }, l.default.createElement("use", {
                xlinkHref: "#sbx-icon-search-12"
            }))),
            h = l.default.createElement("button", {
                type: "reset",
                title: "Clear the search query.",
                className: "sbx-sffv__reset"
            }, l.default.createElement("svg", {
                role: "img",
                "aria-label": "Reset"
            }, l.default.createElement("use", {
                xlinkHref: "#sbx-icon-clear-2"
            }))),
            m = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "clearInput",
                    value: function() {
                        this.input && (this.input.value = "")
                    }
                }, {
                    key: "validateSearch",
                    value: function(e) {
                        if (e.preventDefault(), this.input) {
                            this.input.value && this.props.onValidate()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.placeholder,
                            r = t.onChange,
                            i = this.props.disabled ? "sbx-sffv__input sbx-sffv__input-disabled" : "sbx-sffv__input",
                            a = this.props.disabled ? "searchbox sbx-sffv sbx-sffv-disabled" : "searchbox sbx-sffv";
                        return l.default.createElement("form", {
                            noValidate: "novalidate",
                            className: a,
                            onReset: function() {
                                r("")
                            },
                            onSubmit: function(t) {
                                return e.validateSearch(t)
                            }
                        }, l.default.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                display: "none"
                            }
                        }, f, p), l.default.createElement("div", {
                            role: "search",
                            className: "sbx-sffv__wrapper"
                        }, l.default.createElement("input", {
                            type: "search",
                            name: "search",
                            placeholder: n,
                            autoComplete: "off",
                            required: "required",
                            className: i,
                            onChange: function(e) {
                                return r(e.target.value)
                            },
                            ref: function(t) {
                                e.input = t
                            },
                            disabled: this.props.disabled
                        }), d, h))
                    }
                }]), t
            }(c.Component);
        t.default = m
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}" href="{{url}}">{{label}} <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                i = e.templates,
                o = void 0 === i ? h.default : i,
                s = e.transformData,
                c = e.escapeHits,
                l = void 0 !== c && c;
            if (!t) throw new Error("Must provide a container." + y);
            if (o.item && o.allItems) throw new Error("Must contain only allItems OR item template." + y);
            var f = (0, m.getContainerNode)(t),
                d = {
                    root: (0, u.default)(v(null), r.root),
                    item: (0, u.default)(v("item"), r.item),
                    empty: (0, u.default)(v(null, "empty"), r.empty)
                },
                b = g({
                    containerNode: f,
                    cssClasses: d,
                    renderState: {},
                    transformData: s,
                    templates: o
                });
            try {
                return (0, p.default)(b, function() {
                    return (0, a.unmountComponentAtNode)(f)
                })({
                    escapeHits: l
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(204),
            l = r(c),
            f = n(190),
            p = r(f),
            d = n(418),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hits"),
            g = function(e) {
                var t = e.renderState,
                    n = e.cssClasses,
                    r = e.containerNode,
                    i = e.transformData,
                    s = e.templates;
                return function(e, u) {
                    var c = e.hits,
                        f = e.results,
                        p = e.instantSearchInstance;
                    if (u) return void(t.templateProps = (0, m.prepareTemplateProps)({
                        transformData: i,
                        defaultTemplates: h.default,
                        templatesConfig: p.templatesConfig,
                        templates: s
                    }));
                    (0, a.render)(o.default.createElement(l.default, {
                        cssClasses: n,
                        hits: c,
                        results: f,
                        templateProps: t.templateProps
                    }), r)
                }
            },
            y = "Usage:\nhits({\n  container,\n  [ cssClasses.{root,empty,item}={} ],\n  [ templates.{empty,item} | templates.{empty, allItems} ],\n  [ transformData.{empty,item} | transformData.{empty, allItems} ],\n})"
    }, function(e, t) {
        function n(e, t) {
            return null != e && i.call(e, t)
        }
        var r = Object.prototype,
            i = r.hasOwnProperty;
        e.exports = n
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            empty: "Не знайдено",
            item: function(e) {
                return JSON.stringify(e, null, 2)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.items,
                r = e.cssClasses,
                i = void 0 === r ? {} : r,
                o = e.autoHideContainer,
                s = void 0 !== o && o;
            if (!t) throw new Error(y);
            var c = (0, m.getContainerNode)(t),
                l = {
                    root: (0, u.default)(v(null), i.root),
                    select: (0, u.default)(v(null), i.select),
                    item: (0, u.default)(v("item"), i.item)
                },
                f = g({
                    containerNode: c,
                    cssClasses: l,
                    autoHideContainer: s
                });
            try {
                return (0, h.default)(f, function() {
                    return (0, a.unmountComponentAtNode)(c)
                })({
                    items: n
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(11),
            l = r(c),
            f = n(114),
            p = r(f),
            d = n(191),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-hits-per-page-selector"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer;
                return function(e, i) {
                    var s = e.items,
                        u = e.refine,
                        c = e.hasNoResults;
                    if (!i) {
                        var f = (0, l.default)(s, function(e) {
                                return e.isRefined
                            }) || {},
                            d = f.value;
                        (0, a.render)(o.default.createElement(p.default, {
                            cssClasses: n,
                            currentValue: d,
                            options: s,
                            setValue: u,
                            shouldAutoHideContainer: r && c
                        }), t)
                    }
                }
            },
            y = "Usage:\nhitsPerPageSelector({\n  container,\n  items,\n  [ cssClasses.{root,select,item}={} ],\n  [ autoHideContainer=false ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                i = e.showMoreLabel,
                o = void 0 === i ? "Show more results" : i,
                s = e.templates,
                c = void 0 === s ? p.default : s,
                l = e.transformData,
                f = e.escapeHits,
                d = void 0 !== f && f;
            if (!t) throw new Error("Must provide a container." + y);
            var b = (0, m.getContainerNode)(t),
                _ = {
                    root: (0, u.default)(v(null), r.root),
                    item: (0, u.default)(v("item"), r.item),
                    empty: (0, u.default)(v(null, "empty"), r.empty),
                    showmore: (0, u.default)(v("showmore"), r.showmore)
                },
                w = g({
                    containerNode: b,
                    cssClasses: _,
                    transformData: l,
                    templates: c,
                    showMoreLabel: o,
                    renderState: {}
                });
            try {
                return (0, h.default)(w, function() {
                    return (0, a.unmountComponentAtNode)(b)
                })({
                    escapeHits: d
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(421),
            l = r(c),
            f = n(422),
            p = r(f),
            d = n(192),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-infinite-hits"),
            g = function(e) {
                var t = e.cssClasses,
                    n = e.containerNode,
                    r = e.renderState,
                    i = e.templates,
                    s = e.transformData,
                    u = e.showMoreLabel;
                return function(e, c) {
                    var f = e.hits,
                        d = e.results,
                        h = e.showMore,
                        v = e.isLastPage,
                        g = e.instantSearchInstance;
                    if (c) return void(r.templateProps = (0, m.prepareTemplateProps)({
                        transformData: s,
                        defaultTemplates: p.default,
                        templatesConfig: g.templatesConfig,
                        templates: i
                    }));
                    (0, a.render)(o.default.createElement(l.default, {
                        cssClasses: t,
                        hits: f,
                        results: d,
                        showMore: h,
                        showMoreLabel: u,
                        templateProps: r.templateProps,
                        isLastPage: v
                    }), n)
                }
            },
            y = "\nUsage:\ninfiniteHits({\n  container,\n  [ escapeHits = false ],\n  [ showMoreLabel ],\n  [ cssClasses.{root,empty,item,showmore}={} ],\n  [ templates.{empty,item} | templates.{empty} ],\n  [ transformData.{empty,item} | transformData.{empty} ],\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(4),
            c = (r(u), n(1)),
            l = r(c),
            f = n(204),
            p = r(f),
            d = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.hits,
                            r = e.results,
                            i = e.showMore,
                            a = e.showMoreLabel,
                            o = e.templateProps,
                            s = this.props.isLastPage ? l.default.createElement("button", {
                                disabled: !0
                            }, a) : l.default.createElement("button", {
                                onClick: i
                            }, a);
                        return l.default.createElement("div", null, l.default.createElement(p.default, {
                            cssClasses: t,
                            hits: n,
                            results: r,
                            templateProps: o
                        }), l.default.createElement("div", {
                            className: t.showmore
                        }, s))
                    }
                }]), t
            }(c.Component);
        t.default = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            empty: "Не знайдено",
            item: function(e) {
                return JSON.stringify(e, null, 2)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.attributeName,
                r = e.sortBy,
                i = void 0 === r ? ["name:asc"] : r,
                s = e.limit,
                u = void 0 === s ? 10 : s,
                l = e.cssClasses,
                p = void 0 === l ? {} : l,
                h = e.templates,
                v = void 0 === h ? f.default : h,
                g = e.collapsible,
                P = void 0 !== g && g,
                R = e.transformData,
                x = e.autoHideContainer,
                S = void 0 === x || x,
                j = e.showMore,
                C = void 0 !== j && j;
            if (!t) throw new Error(w);
            var O = (0, d.default)(C);
            if (O && O.limit < u) throw new Error("showMore.limit configuration should be > than the limit in the main configuration");
            var E = (0, y.getContainerNode)(t),
                F = O && O.limit || void 0,
                N = O && (0, y.prefixKeys)("show-more-", O.templates),
                k = N ? a({}, v, N) : v,
                T = {
                    root: (0, c.default)(b(null), p.root),
                    header: (0, c.default)(b("header"), p.header),
                    body: (0, c.default)(b("body"), p.body),
                    footer: (0, c.default)(b("footer"), p.footer),
                    list: (0, c.default)(b("list"), p.list),
                    item: (0, c.default)(b("item"), p.item),
                    active: (0, c.default)(b("item", "active"), p.active),
                    link: (0, c.default)(b("link"), p.link),
                    count: (0, c.default)(b("count"), p.count)
                },
                M = _({
                    containerNode: E,
                    cssClasses: T,
                    collapsible: P,
                    autoHideContainer: S,
                    renderState: {},
                    templates: k,
                    transformData: R,
                    showMoreConfig: O
                });
            try {
                return (0, m.default)(M, function() {
                    return (0, o.unmountComponentAtNode)(E)
                })({
                    attributeName: n,
                    limit: u,
                    sortBy: i,
                    showMoreLimit: F
                })
            } catch (e) {
                throw new Error(w)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var o = n(1),
            s = r(o),
            u = n(3),
            c = r(u),
            l = n(424),
            f = r(l),
            p = n(206),
            d = r(p),
            h = n(111),
            m = r(h),
            v = n(36),
            g = r(v),
            y = n(0),
            b = (0, y.bemHelper)("ais-menu"),
            _ = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    i = e.autoHideContainer,
                    u = e.renderState,
                    c = e.templates,
                    l = e.transformData,
                    p = e.showMoreConfig;
                return function(e, d) {
                    var h = e.refine,
                        m = e.items,
                        v = e.createURL,
                        b = e.canRefine,
                        _ = e.instantSearchInstance,
                        w = e.isShowingMore,
                        P = e.toggleShowMore,
                        R = e.canToggleShowMore;
                    if (d) return void(u.templateProps = (0, y.prepareTemplateProps)({
                        transformData: l,
                        defaultTemplates: f.default,
                        templatesConfig: _.templatesConfig,
                        templates: c
                    }));
                    var x = m.map(function(e) {
                            return a({}, e, {
                                url: v(e.name)
                            })
                        }),
                        S = i && !b;
                    (0, o.render)(s.default.createElement(g.default, {
                        collapsible: r,
                        createURL: v,
                        cssClasses: n,
                        facetValues: x,
                        shouldAutoHideContainer: S,
                        showMore: null !== p,
                        templateProps: u.templateProps,
                        toggleRefinement: h,
                        toggleShowMore: P,
                        isShowingMore: w,
                        canToggleShowMore: R
                    }), t)
                }
            },
            w = "Usage:\nmenu({\n  container,\n  attributeName,\n  [ sortBy=['name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root,list,item} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ],\n  [ showMore.{templates: {active, inactive}, limit} ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}" href="{{url}}">{{label}} <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            active: '<a class="ais-show-more ais-show-more__active">Show less</a>',
            inactive: '<a class="ais-show-more ais-show-more__inactive">Show more</a>'
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.operator,
                i = void 0 === r ? "or" : r,
                s = e.sortBy,
                u = void 0 === s ? ["isRefined", "count:desc", "name:asc"] : s,
                l = e.limit,
                f = void 0 === l ? 10 : l,
                p = e.cssClasses,
                d = void 0 === p ? {} : p,
                h = e.templates,
                v = void 0 === h ? g.default : h,
                y = e.collapsible,
                _ = void 0 !== y && y,
                j = e.transformData,
                C = e.autoHideContainer,
                O = void 0 === C || C,
                E = e.showMore,
                F = void 0 !== E && E,
                N = e.searchForFacetValues,
                k = void 0 !== N && N;
            if (!t) throw new Error(S);
            var T = (0, w.default)(F);
            if (T && T.limit < f) throw new Error("showMore.limit configuration should be > than the limit in the main configuration");
            var M = !!k && Boolean(k.escapeFacetValues),
                A = T && T.limit || f,
                L = (0, P.getContainerNode)(t),
                H = T ? (0, P.prefixKeys)("show-more-", T.templates) : {},
                I = k ? k.templates || b.default : {},
                U = a({}, v, H, I),
                D = {
                    root: (0, c.default)(R(null), d.root),
                    header: (0, c.default)(R("header"), d.header),
                    body: (0, c.default)(R("body"), d.body),
                    footer: (0, c.default)(R("footer"), d.footer),
                    list: (0, c.default)(R("list"), d.list),
                    item: (0, c.default)(R("item"), d.item),
                    active: (0, c.default)(R("item", "active"), d.active),
                    label: (0, c.default)(R("label"), d.label),
                    checkbox: (0, c.default)(R("checkbox"), d.checkbox),
                    count: (0, c.default)(R("count"), d.count)
                },
                V = x({
                    containerNode: L,
                    cssClasses: D,
                    transformData: j,
                    templates: U,
                    renderState: {},
                    collapsible: _,
                    autoHideContainer: O,
                    showMoreConfig: T,
                    searchForFacetValues: k
                });
            try {
                return (0, m.default)(V, function() {
                    return (0, o.unmountComponentAtNode)(L)
                })({
                    attributeName: n,
                    operator: i,
                    limit: f,
                    showMoreLimit: A,
                    sortBy: u,
                    escapeFacetValues: M
                })
            } catch (e) {
                throw new Error(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var o = n(1),
            s = r(o),
            u = n(3),
            c = r(u),
            l = n(46),
            f = r(l),
            p = n(36),
            d = r(p),
            h = n(197),
            m = r(h),
            v = n(427),
            g = r(v),
            y = n(428),
            b = r(y),
            _ = n(206),
            w = r(_),
            P = n(0),
            R = (0, P.bemHelper)("ais-refinement-list"),
            x = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.transformData,
                    i = e.templates,
                    a = e.renderState,
                    u = e.collapsible,
                    c = e.autoHideContainer,
                    l = e.showMoreConfig,
                    p = e.searchForFacetValues;
                return function(e, h) {
                    var m = e.refine,
                        v = e.items,
                        y = e.createURL,
                        b = e.searchForItems,
                        _ = e.isFromSearch,
                        w = e.instantSearchInstance,
                        R = e.canRefine,
                        x = e.toggleShowMore,
                        S = e.isShowingMore,
                        j = e.hasExhaustiveItems,
                        C = e.canToggleShowMore;
                    if (h) return void(a.templateProps = (0, P.prepareTemplateProps)({
                        transformData: r,
                        defaultTemplates: g.default,
                        templatesConfig: w.templatesConfig,
                        templates: i
                    }));
                    var O = {
                        header: {
                            refinedFacetsCount: (0, f.default)(v, {
                                isRefined: !0
                            }).length
                        }
                    };
                    (0, o.render)(s.default.createElement(d.default, {
                        collapsible: u,
                        createURL: y,
                        cssClasses: n,
                        facetValues: v,
                        headerFooterData: O,
                        shouldAutoHideContainer: c && !1 === R,
                        templateProps: a.templateProps,
                        toggleRefinement: m,
                        searchFacetValues: p ? b : void 0,
                        searchPlaceholder: p.placeholder || "Search for other...",
                        isFromSearch: _,
                        showMore: null !== l,
                        toggleShowMore: x,
                        isShowingMore: S,
                        hasExhaustiveItems: j,
                        searchIsAlwaysActive: p.isAlwaysActive || !1,
                        canToggleShowMore: C
                    }), t)
                }
            },
            S = "Usage:\nrefinementList({\n  container,\n  attributeName,\n  [ operator='or' ],\n  [ sortBy=['isRefined', 'count:desc', 'name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root, header, body, footer, list, item, active, label, checkbox, count}],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n  [ showMore.{templates: {active, inactive}, limit} ],\n  [ collapsible=false ],\n  [ searchForFacetValues.{placeholder, templates: {noResults}, isAlwaysActive, escapeFacetValues}],\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox"\n         class="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n      {{{highlighted}}}\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            noResults: "Не знайдено"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.options,
                i = e.cssClasses,
                o = void 0 === i ? {} : i,
                s = e.templates,
                c = void 0 === s ? h.default : s,
                l = e.collapsible,
                f = void 0 !== l && l,
                d = e.transformData,
                b = e.autoHideContainer,
                _ = void 0 === b || b;
            if (!t || !n || !r) throw new Error(y);
            var w = (0, m.getContainerNode)(t),
                P = {
                    root: (0, u.default)(v(null), o.root),
                    header: (0, u.default)(v("header"), o.header),
                    body: (0, u.default)(v("body"), o.body),
                    footer: (0, u.default)(v("footer"), o.footer),
                    list: (0, u.default)(v("list"), o.list),
                    item: (0, u.default)(v("item"), o.item),
                    label: (0, u.default)(v("label"), o.label),
                    radio: (0, u.default)(v("radio"), o.radio),
                    active: (0, u.default)(v("item", "active"), o.active)
                },
                R = g({
                    containerNode: w,
                    collapsible: f,
                    autoHideContainer: _,
                    cssClasses: P,
                    renderState: {},
                    transformData: d,
                    templates: c
                });
            try {
                return (0, p.default)(R, function() {
                    return (0, a.unmountComponentAtNode)(w)
                })({
                    attributeName: n,
                    options: r
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(36),
            l = r(c),
            f = n(193),
            p = r(f),
            d = n(430),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-refinement-list"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.collapsible,
                    r = e.autoHideContainer,
                    i = e.cssClasses,
                    s = e.renderState,
                    u = e.transformData,
                    c = e.templates;
                return function(e, f) {
                    var p = e.createURL,
                        d = e.instantSearchInstance,
                        v = e.refine,
                        g = e.items,
                        y = e.hasNoResults;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: h.default,
                        templatesConfig: d.templatesConfig,
                        templates: c
                    }));
                    (0, a.render)(o.default.createElement(l.default, {
                        collapsible: n,
                        createURL: p,
                        cssClasses: i,
                        facetValues: g,
                        shouldAutoHideContainer: r && y,
                        templateProps: s.templateProps,
                        toggleRefinement: v
                    }), t)
                }
            },
            y = "Usage:\nnumericRefinementList({\n  container,\n  attributeName,\n  options,\n  [ cssClasses.{root,header,body,footer,list,item,active,label,radio,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="radio" class="{{cssClasses.radio}}" name="{{attributeName}}" {{#isRefined}}checked{{/isRefined}} />{{label}}\n</label>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.operator,
                r = void 0 === n ? "=" : n,
                i = e.attributeName,
                o = e.options,
                s = e.cssClasses,
                c = void 0 === s ? {} : s,
                l = e.autoHideContainer,
                f = void 0 !== l && l,
                g = (0, d.getContainerNode)(t);
            if (!t || !o || 0 === o.length || !i) throw new Error(v);
            var y = {
                    root: (0, u.default)(h(null), c.root),
                    select: (0, u.default)(h(null), c.select),
                    item: (0, u.default)(h("item"), c.item)
                },
                b = m({
                    autoHideContainer: f,
                    containerNode: g,
                    cssClasses: y
                });
            try {
                return (0, p.default)(b, function() {
                    return (0, a.unmountComponentAtNode)(g)
                })({
                    operator: r,
                    attributeName: i,
                    options: o
                })
            } catch (e) {
                throw new Error(v)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(114),
            l = r(c),
            f = n(194),
            p = r(f),
            d = n(0),
            h = (0, d.bemHelper)("ais-numeric-selector"),
            m = function(e) {
                var t = e.containerNode,
                    n = e.autoHideContainer,
                    r = e.cssClasses;
                return function(e, i) {
                    var s = e.currentRefinement,
                        u = e.refine,
                        c = e.hasNoResults,
                        f = e.options;
                    i || (0, a.render)(o.default.createElement(l.default, {
                        cssClasses: r,
                        currentValue: s,
                        options: f,
                        setValue: u,
                        shouldAutoHideContainer: n && c
                    }), t)
                }
            },
            v = "Usage: numericSelector({\n  container,\n  attributeName,\n  options,\n  cssClasses.{root,select,item},\n  autoHideContainer\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.labels,
                r = void 0 === n ? v : n,
                i = e.cssClasses,
                a = void 0 === i ? {} : i,
                u = e.maxPages,
                c = e.padding,
                f = void 0 === c ? 3 : c,
                p = e.showFirstLast,
                d = void 0 === p || p,
                _ = e.autoHideContainer,
                w = void 0 === _ || _,
                P = e.scrollTo,
                R = void 0 === P ? "body" : P;
            if (!t) throw new Error(b);
            var x = (0, m.getContainerNode)(t),
                S = !0 === R ? "body" : R,
                j = !1 !== S && (0, m.getContainerNode)(S),
                C = {
                    root: (0, l.default)(g(null), a.root),
                    item: (0, l.default)(g("item"), a.item),
                    link: (0, l.default)(g("link"), a.link),
                    page: (0, l.default)(g("item", "page"), a.page),
                    previous: (0, l.default)(g("item", "previous"), a.previous),
                    next: (0, l.default)(g("item", "next"), a.next),
                    first: (0, l.default)(g("item", "first"), a.first),
                    last: (0, l.default)(g("item", "last"), a.last),
                    active: (0, l.default)(g("item", "active"), a.active),
                    disabled: (0, l.default)(g("item", "disabled"), a.disabled)
                },
                O = (0, o.default)(r, v),
                E = y({
                    containerNode: x,
                    cssClasses: C,
                    labels: O,
                    showFirstLast: d,
                    padding: f,
                    autoHideContainer: w,
                    scrollToNode: j
                });
            try {
                return (0, h.default)(E, function() {
                    return (0, s.unmountComponentAtNode)(x)
                })({
                    maxPages: u
                })
            } catch (e) {
                throw new Error(b)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(67),
            o = r(a),
            s = n(1),
            u = r(s),
            c = n(3),
            l = r(c),
            f = n(433),
            p = r(f),
            d = n(195),
            h = r(d),
            m = n(0),
            v = {
                previous: "\u2039",
                next: "\u203a",
                first: "\xab",
                last: "\xbb"
            },
            g = (0, m.bemHelper)("ais-pagination"),
            y = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.labels,
                    i = e.showFirstLast,
                    a = e.padding,
                    o = e.autoHideContainer,
                    c = e.scrollToNode;
                return function(e, l) {
                    var f = e.createURL,
                        d = e.currentRefinement,
                        h = e.nbHits,
                        m = e.nbPages,
                        v = e.refine;
                    if (!l) {
                        var g = function(e) {
                                v(e), !1 !== c && c.scrollIntoView()
                            },
                            y = o && 0 === h;
                        (0, s.render)(u.default.createElement(p.default, {
                            createURL: f,
                            cssClasses: n,
                            currentPage: d,
                            labels: r,
                            nbHits: h,
                            nbPages: m,
                            padding: a,
                            setCurrentPage: g,
                            shouldAutoHideContainer: y,
                            showFirstLast: i
                        }), t)
                    }
                }
            },
            b = "Usage:\npagination({\n  container,\n  [ cssClasses.{root,item,page,previous,next,first,last,active,disabled}={} ],\n  [ labels.{previous,next,first,last} ],\n  [ maxPages ],\n  [ padding=3 ],\n  [ showFirstLast=true ],\n  [ autoHideContainer=true ],\n  [ scrollTo='body' ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawPagination = void 0;
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(4),
            c = (r(u), n(1)),
            l = r(c),
            f = n(14),
            p = r(f),
            d = n(434),
            h = r(d),
            m = n(0),
            v = n(12),
            g = r(v),
            y = n(436),
            b = r(y),
            _ = n(439),
            w = r(_),
            P = n(3),
            R = r(P),
            x = t.RawPagination = function(e) {
                function t(e) {
                    i(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, h.default)(e, t.defaultProps)));
                    return n.handleClick = n.handleClick.bind(n), n
                }
                return o(t, e), s(t, [{
                    key: "pageLink",
                    value: function(e) {
                        var t = e.label,
                            n = e.ariaLabel,
                            r = e.pageNumber,
                            i = e.additionalClassName,
                            a = void 0 === i ? null : i,
                            o = e.isDisabled,
                            s = void 0 !== o && o,
                            u = e.isActive,
                            c = void 0 !== u && u,
                            f = e.createURL,
                            p = {
                                item: (0, R.default)(this.props.cssClasses.item, a),
                                link: (0, R.default)(this.props.cssClasses.link)
                            };
                        s ? p.item = (0, R.default)(p.item, this.props.cssClasses.disabled) : c && (p.item = (0, R.default)(p.item, this.props.cssClasses.active));
                        var d = f && !s ? f(r) : "#";
                        return l.default.createElement(w.default, {
                            ariaLabel: n,
                            cssClasses: p,
                            handleClick: this.handleClick,
                            isDisabled: s,
                            key: t + r + n,
                            label: t,
                            pageNumber: r,
                            url: d
                        })
                    }
                }, {
                    key: "previousPageLink",
                    value: function(e, t) {
                        return this.pageLink({
                            ariaLabel: "Previous",
                            additionalClassName: this.props.cssClasses.previous,
                            isDisabled: 0 === this.props.nbHits || e.isFirstPage(),
                            label: this.props.labels.previous,
                            pageNumber: e.currentPage - 1,
                            createURL: t
                        })
                    }
                }, {
                    key: "nextPageLink",
                    value: function(e, t) {
                        return this.pageLink({
                            ariaLabel: "Next",
                            additionalClassName: this.props.cssClasses.next,
                            isDisabled: 0 === this.props.nbHits || e.isLastPage(),
                            label: this.props.labels.next,
                            pageNumber: e.currentPage + 1,
                            createURL: t
                        })
                    }
                }, {
                    key: "firstPageLink",
                    value: function(e, t) {
                        return this.pageLink({
                            ariaLabel: "First",
                            additionalClassName: this.props.cssClasses.first,
                            isDisabled: 0 === this.props.nbHits || e.isFirstPage(),
                            label: this.props.labels.first,
                            pageNumber: 0,
                            createURL: t
                        })
                    }
                }, {
                    key: "lastPageLink",
                    value: function(e, t) {
                        return this.pageLink({
                            ariaLabel: "Last",
                            additionalClassName: this.props.cssClasses.last,
                            isDisabled: 0 === this.props.nbHits || e.isLastPage(),
                            label: this.props.labels.last,
                            pageNumber: e.total - 1,
                            createURL: t
                        })
                    }
                }, {
                    key: "pages",
                    value: function(e, t) {
                        var n = this,
                            r = [];
                        return (0, p.default)(e.pages(), function(i) {
                            var a = i === e.currentPage;
                            r.push(n.pageLink({
                                ariaLabel: i + 1,
                                additionalClassName: n.props.cssClasses.page,
                                isActive: a,
                                label: i + 1,
                                pageNumber: i,
                                createURL: t
                            }))
                        }), r
                    }
                }, {
                    key: "handleClick",
                    value: function(e, t) {
                        (0, m.isSpecialClick)(t) || (t.preventDefault(), this.props.setCurrentPage(e))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = new b.default({
                                currentPage: this.props.currentPage,
                                total: this.props.nbPages,
                                padding: this.props.padding
                            }),
                            t = this.props.createURL;
                        return l.default.createElement("ul", {
                            className: this.props.cssClasses.root
                        }, this.props.showFirstLast ? this.firstPageLink(e, t) : null, this.previousPageLink(e, t), this.pages(e, t), this.nextPageLink(e, t), this.props.showFirstLast ? this.lastPageLink(e, t) : null)
                    }
                }]), t
            }(c.Component);
        x.defaultProps = {
            nbHits: 0,
            currentPage: 0,
            nbPages: 0
        }, t.default = (0, g.default)(x)
    }, function(e, t, n) {
        var r = n(43),
            i = n(22),
            a = n(435),
            o = n(182),
            s = i(function(e) {
                return e.push(void 0, a), r(o, void 0, e)
            });
        e.exports = s
    }, function(e, t, n) {
        function r(e, t, n, o, s, u) {
            return a(e) && a(t) && (u.set(t, e), i(e, t, void 0, r, u), u.delete(t)), e
        }
        var i = n(101),
            a = n(6);
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(207),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            s = function() {
                function e(t) {
                    r(this, e), this.currentPage = t.currentPage, this.total = t.total, this.padding = t.padding
                }
                return i(e, [{
                    key: "pages",
                    value: function() {
                        var e = this.total,
                            t = this.currentPage,
                            n = this.padding;
                        if (0 === e) return [0];
                        var r = this.nbPagesDisplayed(n, e);
                        if (r === e) return (0, o.default)(0, e);
                        var i = this.calculatePaddingLeft(t, n, e, r),
                            a = r - i,
                            s = t - i,
                            u = t + a;
                        return (0, o.default)(s, u)
                    }
                }, {
                    key: "nbPagesDisplayed",
                    value: function(e, t) {
                        return Math.min(2 * e + 1, t)
                    }
                }, {
                    key: "calculatePaddingLeft",
                    value: function(e, t, n, r) {
                        return e <= t ? e : e >= n - t ? r - (n - e) : t
                    }
                }, {
                    key: "isLastPage",
                    value: function() {
                        return this.currentPage === this.total - 1
                    }
                }, {
                    key: "isFirstPage",
                    value: function() {
                        return 0 === this.currentPage
                    }
                }]), e
            }();
        t.default = s
    }, function(e, t, n) {
        function r(e) {
            return function(t, n, r) {
                return r && "number" != typeof r && a(t, n, r) && (n = r = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), r = void 0 === r ? t < n ? 1 : -1 : o(r), i(t, n, r, e)
            }
        }
        var i = n(438),
            a = n(99),
            o = n(154);
        e.exports = r
    }, function(e, t) {
        function n(e, t, n, a) {
            for (var o = -1, s = i(r((t - e) / (n || 1)), 0), u = Array(s); s--;) u[a ? s : ++o] = e, e += n;
            return u
        }
        var r = Math.ceil,
            i = Math.max;
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = n(15),
            d = r(p),
            h = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleClick = this.handleClick.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0, d.default)(this.props, e)
                    }
                }, {
                    key: "handleClick",
                    value: function(e) {
                        this.props.handleClick(this.props.pageNumber, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.label,
                            r = e.ariaLabel,
                            i = e.url,
                            a = e.isDisabled,
                            o = "span",
                            u = {
                                className: t.link,
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            };
                        a || (o = "a", u = s({}, u, {
                            "aria-label": r,
                            href: i,
                            onClick: this.handleClick
                        }));
                        var c = f.default.createElement(o, u);
                        return f.default.createElement("li", {
                            className: t.item
                        }, c)
                    }
                }]), t
            }(l.Component);
        t.default = h
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.cssClasses,
                i = void 0 === r ? {} : r,
                s = e.templates,
                u = void 0 === s ? m.default : s,
                l = e.collapsible,
                f = void 0 !== l && l,
                p = e.labels,
                h = void 0 === p ? {} : p,
                _ = e.currency,
                w = void 0 === _ ? "$" : _,
                P = e.autoHideContainer,
                R = void 0 === P || P;
            if (!t) throw new Error(b);
            var x = (0, v.getContainerNode)(t),
                S = a({
                    button: "Go",
                    separator: "to"
                }, h),
                j = {
                    root: (0, c.default)(g(null), i.root),
                    header: (0, c.default)(g("header"), i.header),
                    body: (0, c.default)(g("body"), i.body),
                    list: (0, c.default)(g("list"), i.list),
                    link: (0, c.default)(g("link"), i.link),
                    item: (0, c.default)(g("item"), i.item),
                    active: (0, c.default)(g("item", "active"), i.active),
                    form: (0, c.default)(g("form"), i.form),
                    label: (0, c.default)(g("label"), i.label),
                    input: (0, c.default)(g("input"), i.input),
                    currency: (0, c.default)(g("currency"), i.currency),
                    button: (0, c.default)(g("button"), i.button),
                    separator: (0, c.default)(g("separator"), i.separator),
                    footer: (0, c.default)(g("footer"), i.footer)
                },
                C = void 0 !== h.currency ? h.currency : w,
                O = y({
                    containerNode: x,
                    templates: u,
                    renderState: {},
                    collapsible: f,
                    cssClasses: j,
                    labels: S,
                    currency: C,
                    autoHideContainer: R
                });
            try {
                return (0, d.default)(O, function() {
                    return (0, o.unmountComponentAtNode)(x)
                })({
                    attributeName: n
                })
            } catch (e) {
                throw new Error(b)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var o = n(1),
            s = r(o),
            u = n(3),
            c = r(u),
            l = n(441),
            f = r(l),
            p = n(196),
            d = r(p),
            h = n(443),
            m = r(h),
            v = n(0),
            g = (0, v.bemHelper)("ais-price-ranges"),
            y = function(e) {
                var t = e.containerNode,
                    n = e.templates,
                    r = e.renderState,
                    i = e.collapsible,
                    a = e.cssClasses,
                    u = e.labels,
                    c = e.currency,
                    l = e.autoHideContainer;
                return function(e, p) {
                    var d = e.refine,
                        h = e.items,
                        g = e.instantSearchInstance;
                    if (p) return void(r.templateProps = (0, v.prepareTemplateProps)({
                        defaultTemplates: m.default,
                        templatesConfig: g.templatesConfig,
                        templates: n
                    }));
                    var y = l && 0 === h.length;
                    (0, o.render)(s.default.createElement(f.default, {
                        collapsible: i,
                        cssClasses: a,
                        currency: c,
                        facetValues: h,
                        labels: u,
                        refine: d,
                        shouldAutoHideContainer: y,
                        templateProps: r.templateProps
                    }), t)
                }
            },
            b = "Usage:\npriceRanges({\n  container,\n  attributeName,\n  [ currency=$ ],\n  [ cssClasses.{root,header,body,list,item,active,link,form,label,input,currency,separator,button,footer} ],\n  [ templates.{header,item,footer} ],\n  [ labels.{currency,separator,button} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawPriceRanges = void 0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(4),
            f = (r(l), n(1)),
            p = r(f),
            d = n(16),
            h = r(d),
            m = n(442),
            v = r(m),
            g = n(3),
            y = r(g),
            b = n(15),
            _ = r(b),
            w = n(12),
            P = r(w),
            R = n(19),
            x = r(R),
            S = t.RawPriceRanges = function(e) {
                function t() {
                    return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, e), c(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.refine = this.refine.bind(this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return !(0, _.default)(this.props.facetValues, e.facetValues)
                    }
                }, {
                    key: "getForm",
                    value: function() {
                        var e = u({
                                currency: this.props.currency
                            }, this.props.labels),
                            t = void 0;
                        return t = 1 === this.props.facetValues.length ? {
                            from: void 0 !== this.props.facetValues[0].from ? this.props.facetValues[0].from : "",
                            to: void 0 !== this.props.facetValues[0].to ? this.props.facetValues[0].to : ""
                        } : {
                            from: "",
                            to: ""
                        }, p.default.createElement(v.default, {
                            cssClasses: this.props.cssClasses,
                            currentRefinement: t,
                            labels: e,
                            refine: this.refine
                        })
                    }
                }, {
                    key: "getItemFromFacetValue",
                    value: function(e) {
                        var t = (0, y.default)(this.props.cssClasses.item, i({}, this.props.cssClasses.active, e.isRefined)),
                            n = e.from + "_" + e.to,
                            r = this.refine.bind(this, e),
                            a = u({
                                currency: this.props.currency
                            }, e);
                        return p.default.createElement("div", {
                            className: t,
                            key: n
                        }, p.default.createElement("a", {
                            className: this.props.cssClasses.link,
                            href: e.url,
                            onClick: r
                        }, p.default.createElement(h.default, u({
                            data: a,
                            templateKey: "item"
                        }, this.props.templateProps))))
                    }
                }, {
                    key: "refine",
                    value: function(e, t) {
                        t.preventDefault(), this.props.refine(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return p.default.createElement("div", null, p.default.createElement("div", {
                            className: this.props.cssClasses.list
                        }, this.props.facetValues.map(function(t) {
                            return e.getItemFromFacetValue(t)
                        })), this.getForm())
                    }
                }]), t
            }(f.Component);
        S.defaultProps = {
            cssClasses: {}
        }, t.default = (0, P.default)((0, x.default)(S))
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = function(e) {
                function t(e) {
                    a(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        from: e.currentRefinement.from,
                        to: e.currentRefinement.to
                    }, n
                }
                return s(t, e), u(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.handleSubmit = this.handleSubmit.bind(this)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState({
                            from: e.currentRefinement.from,
                            to: e.currentRefinement.to
                        })
                    }
                }, {
                    key: "getInput",
                    value: function(e) {
                        var t = this;
                        return f.default.createElement("label", {
                            className: this.props.cssClasses.label
                        }, f.default.createElement("span", {
                            className: this.props.cssClasses.currency
                        }, this.props.labels.currency, " "), f.default.createElement("input", {
                            className: this.props.cssClasses.input,
                            onChange: function(n) {
                                return t.setState(i({}, e, n.target.value))
                            },
                            ref: function(n) {
                                return t[e] = n
                            },
                            type: "number",
                            value: this.state[e]
                        }))
                    }
                }, {
                    key: "handleSubmit",
                    value: function(e) {
                        var t = "" !== this.from.value ? parseInt(this.from.value, 10) : void 0,
                            n = "" !== this.to.value ? parseInt(this.to.value, 10) : void 0;
                        this.props.refine({
                            from: t,
                            to: n
                        }, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.getInput("from"),
                            n = this.getInput("to"),
                            r = this.handleSubmit;
                        return f.default.createElement("form", {
                            className: this.props.cssClasses.form,
                            onSubmit: r,
                            ref: function(t) {
                                return e.form = t
                            }
                        }, t, f.default.createElement("span", {
                            className: this.props.cssClasses.separator
                        }, " ", this.props.labels.separator, " "), n, f.default.createElement("button", {
                            className: this.props.cssClasses.button,
                            type: "submit"
                        }, this.props.labels.button))
                    }
                }]), t
            }(l.Component);
        p.defaultProps = {
            cssClasses: {},
            labels: {}
        }, t.default = p
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: "\n    {{#from}}\n      {{^to}}\n        &ge;\n      {{/to}}\n      {{currency}}{{#helpers.formatNumber}}{{from}}{{/helpers.formatNumber}}\n    {{/from}}\n    {{#to}}\n      {{#from}}\n        -\n      {{/from}}\n      {{^from}}\n        &le;\n      {{/from}}\n      {{#helpers.formatNumber}}{{to}}{{/helpers.formatNumber}}\n    {{/to}}\n  ",
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.min,
                i = e.max,
                o = e.precision,
                s = void 0 === o ? 0 : o,
                u = e.cssClasses,
                c = void 0 === u ? {} : u,
                f = e.templates,
                p = void 0 === f ? g.default : f,
                d = e.labels,
                v = void 0 === d ? {} : d,
                w = e.autoHideContainer,
                P = void 0 === w || w,
                R = e.collapsible,
                x = void 0 !== R && R;
            if (!t) throw new Error(_);
            var S = (0, m.getContainerNode)(t),
                j = a({
                    separator: "to",
                    submit: "Go"
                }, v),
                C = {
                    root: (0, l.default)(y(null), c.root),
                    header: (0, l.default)(y("header"), c.header),
                    body: (0, l.default)(y("body"), c.body),
                    form: (0, l.default)(y("form"), c.form),
                    fieldset: (0, l.default)(y("fieldset"), c.fieldset),
                    labelMin: (0, l.default)(y("labelMin"), c.labelMin),
                    inputMin: (0, l.default)(y("inputMin"), c.inputMin),
                    separator: (0, l.default)(y("separator"), c.separator),
                    labelMax: (0, l.default)(y("labelMax"), c.labelMax),
                    inputMax: (0, l.default)(y("inputMax"), c.inputMax),
                    submit: (0, l.default)(y("submit"), c.submit),
                    footer: (0, l.default)(y("footer"), c.footer)
                },
                O = b({
                    containerNode: S,
                    cssClasses: C,
                    templates: p,
                    labels: j,
                    autoHideContainer: P,
                    collapsible: x,
                    renderState: {}
                });
            try {
                return (0, h.default)(O)({
                    attributeName: n,
                    min: r,
                    max: i,
                    precision: s
                })
            } catch (e) {
                throw new Error(_)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            o = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
        t.default = i;
        var s = n(1),
            u = r(s),
            c = n(3),
            l = r(c),
            f = n(445),
            p = r(f),
            d = n(74),
            h = r(d),
            m = n(0),
            v = n(446),
            g = r(v),
            y = (0, m.bemHelper)("ais-range-input"),
            b = function(e) {
                var t = e.containerNode,
                    n = e.templates,
                    r = e.cssClasses,
                    i = e.labels,
                    a = e.autoHideContainer,
                    c = e.collapsible,
                    l = e.renderState;
                return function(e, f) {
                    var d = e.refine,
                        h = e.range,
                        v = e.start,
                        y = e.widgetParams,
                        b = e.instantSearchInstance;
                    if (f) return void(l.templateProps = (0, m.prepareTemplateProps)({
                        defaultTemplates: g.default,
                        templatesConfig: b.templatesConfig,
                        templates: n
                    }));
                    var _ = h.min,
                        w = h.max,
                        P = o(v, 2),
                        R = P[0],
                        x = P[1],
                        S = 1 / Math.pow(10, y.precision),
                        j = a && _ === w,
                        C = {
                            min: R !== -1 / 0 && R !== _ ? R : void 0,
                            max: x !== 1 / 0 && x !== w ? x : void 0
                        };
                    (0, s.render)(u.default.createElement(p.default, {
                        min: _,
                        max: w,
                        step: S,
                        values: C,
                        cssClasses: r,
                        labels: i,
                        refine: d,
                        shouldAutoHideContainer: j,
                        collapsible: c,
                        templateProps: l.templateProps
                    }), t)
                }
            },
            _ = "Usage:\nrangeInput({\n  container,\n  attributeName,\n  [ min ],\n  [ max ],\n  [ precision = 0 ],\n  [ cssClasses.{root, header, body, form, fieldset, labelMin, inputMin, separator, labelMax, inputMax, submit, footer} ],\n  [ templates.{header, footer} ],\n  [ labels.{separator, button} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawRangeInput = void 0;
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(4),
            p = (r(f), n(12)),
            d = r(p),
            h = n(19),
            m = r(h),
            v = t.RawRangeInput = function(e) {
                function t(e) {
                    a(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.onChange = function(e) {
                        return function(t) {
                            n.setState(i({}, e, t.currentTarget.value))
                        }
                    }, n.onSubmit = function(e) {
                        e.preventDefault(), n.props.refine([n.state.min, n.state.max])
                    }, n.state = {
                        min: e.values.min,
                        max: e.values.max
                    }, n
                }
                return s(t, e), u(t, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.setState({
                            min: e.values.min,
                            max: e.values.max
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.min,
                            n = e.max,
                            r = this.props,
                            i = r.min,
                            a = r.max,
                            o = r.step,
                            s = r.cssClasses,
                            u = r.labels,
                            c = i >= a;
                        return l.default.createElement("form", {
                            className: s.form,
                            onSubmit: this.onSubmit
                        }, l.default.createElement("fieldset", {
                            className: s.fieldset
                        }, l.default.createElement("label", {
                            className: s.labelMin
                        }, l.default.createElement("input", {
                            className: s.inputMin,
                            type: "number",
                            min: i,
                            max: a,
                            step: o,
                            value: t,
                            onChange: this.onChange("min"),
                            placeholder: i,
                            disabled: c
                        })), l.default.createElement("span", {
                            className: s.separator
                        }, u.separator), l.default.createElement("label", {
                            className: s.labelMax
                        }, l.default.createElement("input", {
                            className: s.inputMax,
                            type: "number",
                            min: i,
                            max: a,
                            step: o,
                            value: n,
                            onChange: this.onChange("max"),
                            placeholder: a,
                            disabled: c
                        })), l.default.createElement("button", {
                            role: "button",
                            className: s.submit,
                            disabled: c
                        }, u.submit)))
                    }
                }]), t
            }(c.Component);
        t.default = (0, d.default)((0, m.default)(v))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.containerNode,
                n = e.query,
                r = e.loadingIndicator,
                i = e.isSearchStalled,
                a = s(t);
            if (document.activeElement === a || n === a.value || (a.value = n), r) {
                var o = "INPUT" === t.tagName ? t.parentNode : t.firstChild;
                i ? o.classList.add("ais-stalled-search") : o.classList.remove("ais-stalled-search")
            }
        }

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.placeholder,
                r = void 0 === n ? "" : n,
                i = e.cssClasses,
                a = void 0 === i ? {} : i,
                o = e.poweredBy,
                s = void 0 !== o && o,
                u = e.wrapInput,
                c = void 0 === u || u,
                l = e.autofocus,
                f = void 0 === l ? "auto" : l,
                p = e.searchOnEnterKeyPressOnly,
                d = void 0 !== p && p,
                h = e.reset,
                m = void 0 === h || h,
                v = e.magnifier,
                g = void 0 === v || v,
                y = e.loadingIndicator,
                b = void 0 !== y && y,
                _ = e.queryHook;
            if (!t) throw new Error(k);
            var w = (0, x.getContainerNode)(t);
            "boolean" !== typeof f && (f = "auto"), !0 === s && (s = {});
            var P = F({
                containerNode: w,
                cssClasses: a,
                placeholder: r,
                poweredBy: s,
                templates: O.default,
                autofocus: f,
                searchOnEnterKeyPressOnly: d,
                wrapInput: c,
                reset: m,
                magnifier: g,
                loadingIndicator: b
            });
            try {
                return (0, j.default)(P, N(w))({
                    queryHook: _
                })
            } catch (e) {
                throw new Error(k)
            }
        }

        function o(e) {
            return "INPUT" === e.tagName ? e : document.createElement("input")
        }

        function s(e) {
            return "INPUT" === e.tagName ? e : e.querySelector("input")
        }

        function u(e, t) {
            var n = document.createElement("div");
            return (0, R.default)(E(null), t.root).split(" ").forEach(function(e) {
                return n.classList.add(e)
            }), n.appendChild(e), n
        }

        function c(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n)
        }

        function l(e) {
            return (e.currentTarget ? e.currentTarget : e.srcElement).value
        }

        function f(e, t) {
            return function(n) {
                return n.keyCode === e && t(n)
            }
        }

        function p(e) {
            return function(t) {
                return e(l(t))
            }
        }

        function d(e, t, n, r) {
            var i = {
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                placeholder: e,
                role: "textbox",
                spellcheck: "false",
                type: "text",
                value: n
            };
            (0, w.default)(i, function(e, n) {
                t.hasAttribute(n) || t.setAttribute(n, e)
            }), (0, R.default)(E("input"), r.input).split(" ").forEach(function(e) {
                return t.classList.add(e)
            })
        }

        function h(e, t, n, r) {
            var i = n.reset;
            t = b({
                cssClasses: {},
                template: i
            }, t);
            var a = {
                    root: (0, R.default)(E("reset"), t.cssClasses.root)
                },
                o = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: a
                    }
                }),
                s = y(o, (0, R.default)(E("reset-wrapper")));
            e.parentNode.appendChild(s), s.addEventListener("click", function(e) {
                e.preventDefault(), r()
            })
        }

        function m(e, t, n) {
            var r = n.magnifier;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var i = {
                    root: (0, R.default)(E("magnifier"), t.cssClasses.root)
                },
                a = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: i
                    }
                }),
                o = y(a, (0, R.default)(E("magnifier-wrapper")));
            e.parentNode.appendChild(o)
        }

        function v(e, t, n) {
            var r = n.loadingIndicator;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var i = {
                    root: (0, R.default)(E("loading-indicator"), t.cssClasses.root)
                },
                a = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: i
                    }
                }),
                o = y(a, (0, R.default)(E("loading-indicator-wrapper")));
            e.parentNode.appendChild(o)
        }

        function g(e, t, n) {
            var r = n.poweredBy;
            t = b({
                cssClasses: {},
                template: r
            }, t);
            var i = {
                    root: (0, R.default)(E("powered-by"), t.cssClasses.root),
                    link: (0, R.default)(E("powered-by-link"), t.cssClasses.link)
                },
                a = "https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&utm_content=" + location.hostname + "&utm_campaign=poweredby",
                o = (0, x.renderTemplate)({
                    templateKey: "template",
                    templates: t,
                    data: {
                        cssClasses: i,
                        url: a
                    }
                }),
                s = y(o);
            e.parentNode.insertBefore(s, e.nextSibling)
        }

        function y(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = document.createElement("div");
            return n.innerHTML = '<span class="' + t + '">' + e.trim() + "</span>", n.firstChild
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var b = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = a;
        var _ = n(14),
            w = r(_),
            P = n(3),
            R = r(P),
            x = n(0),
            S = n(198),
            j = r(S),
            C = n(448),
            O = r(C),
            E = (0, x.bemHelper)("ais-search-box"),
            F = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.placeholder,
                    a = e.poweredBy,
                    s = e.templates,
                    y = e.autofocus,
                    b = e.searchOnEnterKeyPressOnly,
                    _ = e.wrapInput,
                    w = e.reset,
                    P = e.magnifier,
                    x = e.loadingIndicator;
                return function(e, S) {
                    var j = e.refine,
                        C = e.clear,
                        O = e.query,
                        F = e.onHistoryChange,
                        N = e.isSearchStalled;
                    if (S) {
                        var k = window.addEventListener ? "input" : "propertychange",
                            T = o(t),
                            M = T === t,
                            A = O;
                        if (M) {
                            var L = document.createElement("div");
                            T.parentNode.insertBefore(L, T);
                            var H = T.parentNode,
                                I = _ ? u(T, n) : T;
                            H.replaceChild(I, L);
                            var U = T.value;
                            U && (A = U, j(U, !1))
                        } else {
                            var D = _ ? u(T, n) : T;
                            t.appendChild(D)
                        }
                        P && m(T, P, s), w && h(T, w, s, C), x && v(T, x, s), d(r, T, A, n), a && g(T, a, s), window.addEventListener("pageshow", function() {
                            T.value = A
                        }), F(function(e) {
                            T.value = e.query || ""
                        }), (!0 === y || "auto" === y && "" === A) && (T.focus(), T.setSelectionRange(A.length, A.length)), b ? (c(T, k, function(e) {
                            j(l(e), !1)
                        }), c(T, "keyup", function(e) {
                            13 === e.keyCode && j(l(e))
                        })) : (c(T, k, p(j)), ("propertychange" === k || window.attachEvent) && c(T, "keyup", f(8, p(j))))
                    } else i({
                        containerNode: t,
                        query: O,
                        loadingIndicator: x,
                        isSearchStalled: N
                    });
                    if (w) {
                        var V = "." + (0, R.default)(E("reset-wrapper"));
                        ("INPUT" === t.tagName ? t.parentNode.querySelector(V) : t.querySelector(V)).style.display = O && O.trim() ? "block" : "none"
                    }
                }
            },
            N = function(e) {
                return function() {
                    var t = document.createRange();
                    t.selectNodeContents(e), t.deleteContents()
                }
            },
            k = "Usage:\nsearchBox({\n  container,\n  [ placeholder ],\n  [ cssClasses.{input,poweredBy} ],\n  [ poweredBy=false || poweredBy.{template, cssClasses.{root,link}} ],\n  [ wrapInput ],\n  [ autofocus ],\n  [ searchOnEnterKeyPressOnly ],\n  [ queryHook ]\n  [ reset=true || reset.{template, cssClasses.{root}} ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            poweredBy: '\n<div class="{{cssClasses.root}}">\n  Search by\n  <a class="{{cssClasses.link}}" href="{{url}}" target="_blank">Algolia</a>\n</div>',
            reset: '\n<button type="reset" title="Clear the search query." class="{{cssClasses.root}}" style="display: none;">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 20 20" width="24px"\n    height="24px"\n >\n    <path\n      d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"\n      fill-rule="evenodd">\n    </path>\n  </svg>\n</button>\n  ',
            magnifier: '\n<div class="{{cssClasses.root}}" style="display: none;">\n  <svg\n    xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13"\n    viewBox="0 0 40 40"\n    width="24px"\n    height="24px"\n >\n    <path\n      d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"\n      fill-rule="evenodd">\n    </path>\n  </svg>\n</div>\n  ',
            loadingIndicator: '\n<div class="{{cssClasses.root}}">\n\x3c!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL --\x3e\n<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#BFC7D8">\n    <g fill="none" fill-rule="evenodd">\n        <g transform="translate(1 1)" stroke-width="2">\n            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>\n            <path d="M36 18c0-9.94-8.06-18-18-18">\n                <animateTransform\n                    attributeName="transform"\n                    type="rotate"\n                    from="0 18 18"\n                    to="360 18 18"\n                    dur="1s"\n                    repeatCount="indefinite"/>\n            </path>\n        </g>\n    </g>\n</svg>\n</div>\n  '
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.min,
                i = e.max,
                a = e.templates,
                s = void 0 === a ? m : a,
                u = e.cssClasses,
                l = void 0 === u ? {} : u,
                f = e.step,
                p = e.pips,
                b = void 0 === p || p,
                _ = e.precision,
                w = void 0 === _ ? 0 : _,
                P = e.tooltips,
                R = void 0 === P || P,
                x = e.autoHideContainer,
                S = void 0 === x || x,
                j = e.collapsible,
                C = void 0 !== j && j;
            if (!t) throw new Error(y);
            var O = (0, h.getContainerNode)(t),
                E = {
                    root: (0, c.default)(v(null), l.root),
                    header: (0, c.default)(v("header"), l.header),
                    body: (0, c.default)(v("body"), l.body),
                    footer: (0, c.default)(v("footer"), l.footer)
                },
                F = g({
                    containerNode: O,
                    step: f,
                    pips: b,
                    tooltips: R,
                    renderState: {},
                    templates: s,
                    autoHideContainer: S,
                    collapsible: C,
                    cssClasses: E
                });
            try {
                return (0, d.default)(F, function() {
                    return (0, o.unmountComponentAtNode)(O)
                })({
                    attributeName: n,
                    min: r,
                    max: i,
                    precision: w
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.default = i;
        var o = n(1),
            s = r(o),
            u = n(3),
            c = r(u),
            l = n(450),
            f = r(l),
            p = n(74),
            d = r(p),
            h = n(0),
            m = {
                header: "",
                footer: ""
            },
            v = (0, h.bemHelper)("ais-range-slider"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.pips,
                    i = e.step,
                    u = e.tooltips,
                    c = e.autoHideContainer,
                    l = e.collapsible,
                    p = e.renderState,
                    d = e.templates;
                return function(e, v) {
                    var g = e.refine,
                        y = e.range,
                        b = e.start,
                        _ = e.instantSearchInstance;
                    if (v) return void(p.templateProps = (0, h.prepareTemplateProps)({
                        defaultTemplates: m,
                        templatesConfig: _.templatesConfig,
                        templates: d
                    }));
                    var w = y.min,
                        P = y.max,
                        R = c && w === P,
                        x = a(b, 2),
                        S = x[0],
                        j = x[1],
                        C = S === -1 / 0 ? w : S,
                        O = j === 1 / 0 ? P : j,
                        E = [C > P ? P : C, O < w ? w : O];
                    (0, o.render)(s.default.createElement(f.default, {
                        cssClasses: n,
                        refine: g,
                        min: w,
                        max: P,
                        values: E,
                        tooltips: u,
                        step: i,
                        pips: r,
                        shouldAutoHideContainer: R,
                        collapsible: l,
                        templateProps: p.templateProps
                    }), t)
                }
            },
            y = "Usage:\nrangeSlider({\n  container,\n  attributeName,\n  [ min ],\n  [ max ],\n  [ pips = true ],\n  [ step = 1 ],\n  [ precision = 0 ],\n  [ tooltips=true ],\n  [ templates.{header, footer} ],\n  [ cssClasses.{root, header, body, footer} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ],\n});\n"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawSlider = void 0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            c = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(451),
            f = r(l),
            p = n(207),
            d = r(p),
            h = n(205),
            m = r(h),
            v = n(4),
            g = (r(v), n(1)),
            y = r(g),
            b = n(452),
            _ = r(b),
            w = n(3),
            P = r(w),
            R = n(458),
            x = r(R),
            S = n(12),
            j = r(S),
            C = n(19),
            O = r(C),
            E = t.RawSlider = function(e) {
                function t() {
                    var e, n, r, i;
                    a(this, t);
                    for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                    return n = r = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), r.handleChange = function(e) {
                        var t = e.values;
                        r.isDisabled || r.props.refine(t)
                    }, r.createHandleComponent = function(e) {
                        return function(t) {
                            var n = Math.round(100 * parseFloat(t["aria-valuenow"])) / 100,
                                r = (0, m.default)(e, "format") ? e.format(n) : n,
                                i = (0, P.default)("ais-range-slider--handle", t.className, {
                                    "ais-range-slider--handle-lower": 0 === t["data-handle-key"],
                                    "ais-range-slider--handle-upper": 1 === t["data-handle-key"]
                                });
                            return y.default.createElement("div", u({}, t, {
                                className: i
                            }), e ? y.default.createElement("div", {
                                className: "ais-range-slider--tooltip"
                            }, r) : null)
                        }
                    }, i = n, o(r, i)
                }
                return s(t, e), c(t, [{
                    key: "computeDefaultPitPoints",
                    value: function(e) {
                        var t = e.min,
                            n = e.max,
                            r = n - t,
                            a = r / 34;
                        return [t].concat(i((0, f.default)(33, function(e) {
                            return t + a * (e + 1)
                        })), [n])
                    }
                }, {
                    key: "computeSnapPoints",
                    value: function(e) {
                        var t = e.min,
                            n = e.max,
                            r = e.step;
                        if (r) return [].concat(i((0, d.default)(t, n, r)), [n])
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.tooltips,
                            n = e.step,
                            r = e.pips,
                            i = e.values,
                            a = this.isDisabled ? {
                                min: this.props.min,
                                max: this.props.max + .001
                            } : this.props,
                            o = a.min,
                            s = a.max,
                            u = this.computeSnapPoints({
                                min: o,
                                max: s,
                                step: n
                            }),
                            c = !1 === r ? [] : this.computeDefaultPitPoints({
                                min: o,
                                max: s
                            });
                        return y.default.createElement("div", {
                            className: this.isDisabled ? "ais-range-slider--disabled" : ""
                        }, y.default.createElement(_.default, {
                            handle: this.createHandleComponent(t),
                            onChange: this.handleChange,
                            min: o,
                            max: s,
                            pitComponent: x.default,
                            pitPoints: c,
                            snap: !0,
                            snapPoints: u,
                            values: this.isDisabled ? [o, s] : i,
                            disabled: this.isDisabled
                        }))
                    }
                }, {
                    key: "isDisabled",
                    get: function() {
                        return this.props.min >= this.props.max
                    }
                }]), t
            }(g.Component);
        t.default = (0, j.default)((0, O.default)(E))
    }, function(e, t, n) {
        function r(e, t) {
            if ((e = o(e)) < 1 || e > s) return [];
            var n = u,
                r = c(e, u);
            t = a(t), e -= u;
            for (var l = i(r, t); ++n < e;) t(n);
            return l
        }
        var i = n(116),
            a = n(87),
            o = n(33),
            s = 9007199254740991,
            u = 4294967295,
            c = Math.min;
        e.exports = r
    }, function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function s(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e) {
            return ["rheostat", "vertical" === e.orientation ? "rheostat-vertical" : "rheostat-horizontal"].concat(e.className.split(" ")).join(" ")
        }

        function c(e) {
            return Number(e.currentTarget.getAttribute("data-handle-key"))
        }

        function l(e) {
            e.stopPropagation(), e.preventDefault()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            p = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            d = n(1),
            h = r(d),
            m = n(453),
            v = r(m),
            g = n(456),
            y = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(g),
            b = n(457),
            _ = r(b),
            w = Object.prototype.hasOwnProperty,
            P = v.default.arrayOf(v.default.number),
            R = v.default.oneOfType([v.default.func, v.default.string]),
            x = function(e) {
                function t() {
                    return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, e), p(t, [{
                    key: "render",
                    value: function() {
                        function e() {
                            return h.default.createElement("button", f({}, this.props, {
                                type: "button"
                            }))
                        }
                        return e
                    }()
                }]), t
            }(h.default.Component),
            S = {
                algorithm: v.default.shape({
                    getValue: v.default.func,
                    getPosition: v.default.func
                }),
                children: v.default.node,
                className: v.default.string,
                disabled: v.default.bool,
                handle: R,
                max: v.default.number,
                min: v.default.number,
                onClick: v.default.func,
                onChange: v.default.func,
                onKeyPress: v.default.func,
                onSliderDragEnd: v.default.func,
                onSliderDragMove: v.default.func,
                onSliderDragStart: v.default.func,
                onValuesUpdated: v.default.func,
                orientation: v.default.oneOf(["horizontal", "vertical"]),
                pitComponent: R,
                pitPoints: P,
                progressBar: R,
                snap: v.default.bool,
                snapPoints: P,
                values: P
            },
            j = {
                algorithm: _.default,
                className: "",
                children: null,
                disabled: !1,
                handle: x,
                max: y.PERCENT_FULL,
                min: y.PERCENT_EMPTY,
                onClick: null,
                onChange: null,
                onKeyPress: null,
                onSliderDragEnd: null,
                onSliderDragMove: null,
                onSliderDragStart: null,
                onValuesUpdated: null,
                orientation: "horizontal",
                pitComponent: null,
                pitPoints: [],
                progressBar: "div",
                snap: !1,
                snapPoints: [],
                values: [y.PERCENT_EMPTY]
            },
            C = function(e) {
                function t(e) {
                    a(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                        r = n.props,
                        i = r.algorithm,
                        s = r.max,
                        c = r.min,
                        l = r.values;
                    return n.state = {
                        className: u(n.props),
                        handlePos: l.map(function(e) {
                            return i.getPosition(e, c, s)
                        }),
                        handleDimensions: 0,
                        mousePos: null,
                        sliderBox: {},
                        slidingIndex: null,
                        values: l
                    }, n.getPublicState = n.getPublicState.bind(n), n.getSliderBoundingBox = n.getSliderBoundingBox.bind(n), n.getProgressStyle = n.getProgressStyle.bind(n), n.getMinValue = n.getMinValue.bind(n), n.getMaxValue = n.getMaxValue.bind(n), n.getHandleDimensions = n.getHandleDimensions.bind(n), n.getClosestSnapPoint = n.getClosestSnapPoint.bind(n), n.getSnapPosition = n.getSnapPosition.bind(n), n.getNextPositionForKey = n.getNextPositionForKey.bind(n), n.getNextState = n.getNextState.bind(n), n.handleClick = n.handleClick.bind(n), n.getClosestHandle = n.getClosestHandle.bind(n), n.setStartSlide = n.setStartSlide.bind(n), n.startMouseSlide = n.startMouseSlide.bind(n), n.startTouchSlide = n.startTouchSlide.bind(n), n.handleMouseSlide = n.handleMouseSlide.bind(n), n.handleTouchSlide = n.handleTouchSlide.bind(n), n.handleSlide = n.handleSlide.bind(n), n.endSlide = n.endSlide.bind(n), n.handleKeydown = n.handleKeydown.bind(n), n.validatePosition = n.validatePosition.bind(n), n.validateValues = n.validateValues.bind(n), n.canMove = n.canMove.bind(n), n.fireChangeEvent = n.fireChangeEvent.bind(n), n.slideTo = n.slideTo.bind(n), n.updateNewValues = n.updateNewValues.bind(n), n
                }
                return s(t, e), p(t, [{
                    key: "componentWillReceiveProps",
                    value: function() {
                        function e(e) {
                            var t = this.props,
                                n = t.className,
                                r = t.disabled,
                                i = t.min,
                                a = t.max,
                                o = t.orientation,
                                s = this.state,
                                c = s.values,
                                l = s.slidingIndex,
                                f = e.min !== i || e.max !== a,
                                p = c.length !== e.values.length || c.some(function(t, n) {
                                    return e.values[n] !== t
                                }),
                                d = e.className !== n || e.orientation !== o,
                                h = e.disabled && !r;
                            d && this.setState({
                                className: u(e)
                            }), (f || p) && this.updateNewValues(e), h && null !== l && this.endSlide()
                        }
                        return e
                    }()
                }, {
                    key: "getPublicState",
                    value: function() {
                        function e() {
                            var e = this.props,
                                t = e.min;
                            return {
                                max: e.max,
                                min: t,
                                values: this.state.values
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getSliderBoundingBox",
                    value: function() {
                        function e() {
                            var e = this.refs.rheostat,
                                t = e.getDOMNode ? e.getDOMNode() : e,
                                n = t.getBoundingClientRect();
                            return {
                                height: n.height || t.clientHeight,
                                left: n.left,
                                top: n.top,
                                width: n.width || t.clientWidth
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getProgressStyle",
                    value: function() {
                        function e(e) {
                            var t = this.state.handlePos,
                                n = t[e];
                            if (0 === e) return "vertical" === this.props.orientation ? {
                                height: String(n) + "%",
                                top: 0
                            } : {
                                left: 0,
                                width: String(n) + "%"
                            };
                            var r = t[e - 1],
                                i = n - r;
                            return "vertical" === this.props.orientation ? {
                                height: i + "%",
                                top: String(r) + "%"
                            } : {
                                left: String(r) + "%",
                                width: i + "%"
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getMinValue",
                    value: function() {
                        function e(e) {
                            return this.state.values[e - 1] ? Math.max(this.props.min, this.state.values[e - 1]) : this.props.min
                        }
                        return e
                    }()
                }, {
                    key: "getMaxValue",
                    value: function() {
                        function e(e) {
                            return this.state.values[e + 1] ? Math.min(this.props.max, this.state.values[e + 1]) : this.props.max
                        }
                        return e
                    }()
                }, {
                    key: "getHandleDimensions",
                    value: function() {
                        function e(e, t) {
                            var n = e.currentTarget || null;
                            return n ? "vertical" === this.props.orientation ? n.clientHeight / t.height * y.PERCENT_FULL / 2 : n.clientWidth / t.width * y.PERCENT_FULL / 2 : 0
                        }
                        return e
                    }()
                }, {
                    key: "getClosestSnapPoint",
                    value: function() {
                        function e(e) {
                            return this.props.snapPoints.length ? this.props.snapPoints.reduce(function(t, n) {
                                return Math.abs(t - e) < Math.abs(n - e) ? t : n
                            }) : e
                        }
                        return e
                    }()
                }, {
                    key: "getSnapPosition",
                    value: function() {
                        function e(e) {
                            if (!this.props.snap) return e;
                            var t = this.props,
                                n = t.algorithm,
                                r = t.max,
                                i = t.min,
                                a = n.getValue(e, i, r),
                                o = this.getClosestSnapPoint(a);
                            return n.getPosition(o, i, r)
                        }
                        return e
                    }()
                }, {
                    key: "getNextPositionForKey",
                    value: function() {
                        function e(e, t) {
                            var n, r = this.state,
                                a = r.handlePos,
                                o = r.values,
                                s = this.props,
                                u = s.algorithm,
                                c = s.max,
                                l = s.min,
                                f = s.snapPoints,
                                p = this.props.snap,
                                d = o[e],
                                h = a[e],
                                m = h,
                                v = 1;
                            c >= 100 ? h = Math.round(h) : v = 100 / (c - l);
                            var g = null;
                            p && (g = f.indexOf(this.getClosestSnapPoint(o[e])));
                            var b = (n = {}, i(n, y.KEYS.LEFT, function(e) {
                                return -1 * e
                            }), i(n, y.KEYS.RIGHT, function(e) {
                                return 1 * e
                            }), i(n, y.KEYS.UP, function(e) {
                                return 1 * e
                            }), i(n, y.KEYS.DOWN, function(e) {
                                return -1 * e
                            }), i(n, y.KEYS.PAGE_DOWN, function(e) {
                                return e > 1 ? -e : -10 * e
                            }), i(n, y.KEYS.PAGE_UP, function(e) {
                                return e > 1 ? e : 10 * e
                            }), n);
                            if (w.call(b, t)) h += b[t](v), p && (h > m ? g < f.length - 1 && (d = f[g + 1]) : g > 0 && (d = f[g - 1]));
                            else if (t === y.KEYS.HOME) h = y.PERCENT_EMPTY, p && (d = f[0]);
                            else {
                                if (t !== y.KEYS.END) return null;
                                h = y.PERCENT_FULL, p && (d = f[f.length - 1])
                            }
                            return p ? u.getPosition(d, l, c) : h
                        }
                        return e
                    }()
                }, {
                    key: "getNextState",
                    value: function() {
                        function e(e, t) {
                            var n = this,
                                r = this.state.handlePos,
                                i = this.props,
                                a = i.max,
                                o = i.min,
                                s = this.validatePosition(e, t),
                                u = r.map(function(t, n) {
                                    return n === e ? s : t
                                });
                            return {
                                handlePos: u,
                                values: u.map(function(e) {
                                    return n.props.algorithm.getValue(e, o, a)
                                })
                            }
                        }
                        return e
                    }()
                }, {
                    key: "getClosestHandle",
                    value: function() {
                        function e(e) {
                            var t = this.state.handlePos;
                            return t.reduce(function(n, r, i) {
                                return Math.abs(t[i] - e) < Math.abs(t[n] - e) ? i : n
                            }, 0)
                        }
                        return e
                    }()
                }, {
                    key: "setStartSlide",
                    value: function() {
                        function e(e, t, n) {
                            var r = this.getSliderBoundingBox();
                            this.setState({
                                handleDimensions: this.getHandleDimensions(e, r),
                                mousePos: {
                                    x: t,
                                    y: n
                                },
                                sliderBox: r,
                                slidingIndex: c(e)
                            })
                        }
                        return e
                    }()
                }, {
                    key: "startMouseSlide",
                    value: function() {
                        function e(e) {
                            this.setStartSlide(e, e.clientX, e.clientY), "function" === typeof document.addEventListener ? (document.addEventListener("mousemove", this.handleMouseSlide, !1), document.addEventListener("mouseup", this.endSlide, !1)) : (document.attachEvent("onmousemove", this.handleMouseSlide), document.attachEvent("onmouseup", this.endSlide)), l(e)
                        }
                        return e
                    }()
                }, {
                    key: "startTouchSlide",
                    value: function() {
                        function e(e) {
                            if (!(e.changedTouches.length > 1)) {
                                var t = e.changedTouches[0];
                                this.setStartSlide(e, t.clientX, t.clientY), document.addEventListener("touchmove", this.handleTouchSlide, !1), document.addEventListener("touchend", this.endSlide, !1), this.props.onSliderDragStart && this.props.onSliderDragStart(), l(e)
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleMouseSlide",
                    value: function() {
                        function e(e) {
                            null !== this.state.slidingIndex && (this.handleSlide(e.clientX, e.clientY), l(e))
                        }
                        return e
                    }()
                }, {
                    key: "handleTouchSlide",
                    value: function() {
                        function e(e) {
                            if (null !== this.state.slidingIndex) {
                                if (e.changedTouches.length > 1) return void this.endSlide();
                                var t = e.changedTouches[0];
                                this.handleSlide(t.clientX, t.clientY), l(e)
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleSlide",
                    value: function() {
                        function e(e, t) {
                            var n = this.state,
                                r = n.slidingIndex,
                                i = n.sliderBox,
                                a = "vertical" === this.props.orientation ? (t - i.top) / i.height * y.PERCENT_FULL : (e - i.left) / i.width * y.PERCENT_FULL;
                            this.slideTo(r, a), this.canMove(r, a) && (this.setState({
                                x: e,
                                y: t
                            }), this.props.onSliderDragMove && this.props.onSliderDragMove())
                        }
                        return e
                    }()
                }, {
                    key: "endSlide",
                    value: function() {
                        function e() {
                            var e = this,
                                t = this.state.slidingIndex;
                            if (this.setState({
                                    slidingIndex: null
                                }), "function" === typeof document.removeEventListener ? (document.removeEventListener("mouseup", this.endSlide, !1), document.removeEventListener("touchend", this.endSlide, !1), document.removeEventListener("touchmove", this.handleTouchSlide, !1), document.removeEventListener("mousemove", this.handleMouseSlide, !1)) : (document.detachEvent("onmousemove", this.handleMouseSlide), document.detachEvent("onmouseup", this.endSlide)), this.props.onSliderDragEnd && this.props.onSliderDragEnd(), this.props.snap) {
                                var n = this.getSnapPosition(this.state.handlePos[t]);
                                this.slideTo(t, n, function() {
                                    return e.fireChangeEvent()
                                })
                            } else this.fireChangeEvent()
                        }
                        return e
                    }()
                }, {
                    key: "handleClick",
                    value: function() {
                        function e(e) {
                            var t = this;
                            if (!e.target.getAttribute("data-handle-key")) {
                                var n = this.getSliderBoundingBox(),
                                    r = "vertical" === this.props.orientation ? (e.clientY - n.top) / n.height : (e.clientX - n.left) / n.width,
                                    i = r * y.PERCENT_FULL,
                                    a = this.getClosestHandle(i),
                                    o = this.getSnapPosition(i);
                                this.slideTo(a, o, function() {
                                    return t.fireChangeEvent()
                                }), this.props.onClick && this.props.onClick()
                            }
                        }
                        return e
                    }()
                }, {
                    key: "handleKeydown",
                    value: function() {
                        function e(e) {
                            var t = this,
                                n = c(e);
                            if (e.keyCode === y.KEYS.ESC) return void e.currentTarget.blur();
                            var r = this.getNextPositionForKey(n, e.keyCode);
                            null !== r && (this.canMove(n, r) && (this.slideTo(n, r, function() {
                                return t.fireChangeEvent()
                            }), this.props.onKeyPress && this.props.onKeyPress()), l(e))
                        }
                        return e
                    }()
                }, {
                    key: "validatePosition",
                    value: function() {
                        function e(e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                i = n.handleDimensions;
                            return Math.max(Math.min(t, void 0 !== r[e + 1] ? r[e + 1] - i : y.PERCENT_FULL), void 0 !== r[e - 1] ? r[e - 1] + i : y.PERCENT_EMPTY)
                        }
                        return e
                    }()
                }, {
                    key: "validateValues",
                    value: function() {
                        function e(e, t) {
                            var n = t || this.props,
                                r = n.max,
                                i = n.min;
                            return e.map(function(e, t, n) {
                                var a = Math.max(Math.min(e, r), i);
                                return n.length && a < n[t - 1] ? n[t - 1] : a
                            })
                        }
                        return e
                    }()
                }, {
                    key: "canMove",
                    value: function() {
                        function e(e, t) {
                            var n = this.state,
                                r = n.handlePos,
                                i = n.handleDimensions;
                            return !(t < y.PERCENT_EMPTY) && (!(t > y.PERCENT_FULL) && (!(t > (void 0 !== r[e + 1] ? r[e + 1] - i : 1 / 0)) && !(t < (void 0 !== r[e - 1] ? r[e - 1] + i : -1 / 0))))
                        }
                        return e
                    }()
                }, {
                    key: "fireChangeEvent",
                    value: function() {
                        function e() {
                            var e = this.props.onChange;
                            e && e(this.getPublicState())
                        }
                        return e
                    }()
                }, {
                    key: "slideTo",
                    value: function() {
                        function e(e, t, n) {
                            var r = this,
                                i = this.getNextState(e, t);
                            this.setState(i, function() {
                                var e = r.props.onValuesUpdated;
                                e && e(r.getPublicState()), n && n()
                            })
                        }
                        return e
                    }()
                }, {
                    key: "updateNewValues",
                    value: function() {
                        function e(e) {
                            var t = this;
                            if (null === this.state.slidingIndex) {
                                var n = e.max,
                                    r = e.min,
                                    i = e.values,
                                    a = this.props.algorithm,
                                    o = this.validateValues(i, e);
                                this.setState({
                                    handlePos: o.map(function(e) {
                                        return a.getPosition(e, r, n)
                                    }),
                                    values: o
                                }, function() {
                                    return t.fireChangeEvent()
                                })
                            }
                        }
                        return e
                    }()
                }, {
                    key: "render",
                    value: function() {
                        function e() {
                            var e = this,
                                t = this.props,
                                n = t.algorithm,
                                r = t.children,
                                i = t.disabled,
                                a = t.handle,
                                o = t.max,
                                s = t.min,
                                u = t.orientation,
                                c = t.pitComponent,
                                l = t.pitPoints,
                                f = t.progressBar,
                                p = this.state,
                                d = p.className,
                                m = p.handlePos,
                                v = p.values;
                            return h.default.createElement("div", {
                                className: d,
                                ref: "rheostat",
                                onClick: !i && this.handleClick,
                                style: {
                                    position: "relative"
                                }
                            }, h.default.createElement("div", {
                                className: "rheostat-background"
                            }), m.map(function(t, n) {
                                var r = "vertical" === u ? {
                                    top: String(t) + "%",
                                    position: "absolute"
                                } : {
                                    left: String(t) + "%",
                                    position: "absolute"
                                };
                                return h.default.createElement(a, {
                                    "aria-valuemax": e.getMaxValue(n),
                                    "aria-valuemin": e.getMinValue(n),
                                    "aria-valuenow": v[n],
                                    "aria-disabled": i,
                                    "data-handle-key": n,
                                    className: "rheostat-handle",
                                    key: "handle-" + String(n),
                                    onClick: e.killEvent,
                                    onKeyDown: !i && e.handleKeydown,
                                    onMouseDown: !i && e.startMouseSlide,
                                    onTouchStart: !i && e.startTouchSlide,
                                    role: "slider",
                                    style: r,
                                    tabIndex: 0
                                })
                            }), m.map(function(t, n, r) {
                                return 0 === n && r.length > 1 ? null : h.default.createElement(f, {
                                    className: "rheostat-progress",
                                    key: "progress-bar-" + String(n),
                                    style: e.getProgressStyle(n)
                                })
                            }), c && l.map(function(e) {
                                var t = n.getPosition(e, s, o),
                                    r = "vertical" === u ? {
                                        top: String(t) + "%",
                                        position: "absolute"
                                    } : {
                                        left: String(t) + "%",
                                        position: "absolute"
                                    };
                                return h.default.createElement(c, {
                                    key: "pit-" + String(e),
                                    style: r
                                }, e)
                            }), r)
                        }
                        return e
                    }()
                }]), t
            }(h.default.Component);
        C.propTypes = S, C.defaultProps = j, t.default = C
    }, function(e, t, n) {
        e.exports = n(454)()
    }, function(e, t, n) {
        "use strict";
        var r = n(112),
            i = n(113),
            a = n(455);
        e.exports = function() {
            function e(e, t, n, r, o, s) {
                s !== a && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.KEYS = {
            DOWN: 40,
            END: 35,
            ESC: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            RIGHT: 39,
            UP: 38
        }, t.PERCENT_EMPTY = 0, t.PERCENT_FULL = 100
    }, function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            getPosition: function() {
                function e(e, t, n) {
                    return (e - t) / (n - t) * 100
                }
                return e
            }(),
            getValue: function() {
                function e(e, t, n) {
                    var r = e / 100;
                    return 0 === e ? t : 100 === e ? n : Math.round((n - t) * r + t)
                }
                return e
            }()
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(1),
            o = r(a),
            s = n(4),
            u = (r(s), n(102)),
            c = r(u),
            l = n(3),
            f = r(l),
            p = function(e) {
                var t = e.style,
                    n = e.children,
                    r = Math.round(parseFloat(t.left)),
                    a = (0, c.default)([0, 50, 100], r),
                    s = Array.isArray(n) ? n[0] : n,
                    u = Math.round(100 * parseFloat(s)) / 100;
                return o.default.createElement("div", {
                    style: i({}, t, {
                        marginLeft: 100 === r ? "-2px" : 0
                    }),
                    className: (0, f.default)("ais-range-slider--marker ais-range-slider--marker-horizontal", {
                        "ais-range-slider--marker-large": a
                    })
                }, a ? o.default.createElement("div", {
                    className: "ais-range-slider--value"
                }, u) : null)
            };
        t.default = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.indices,
                r = e.cssClasses,
                i = void 0 === r ? {} : r,
                o = e.autoHideContainer,
                s = void 0 !== o && o;
            if (!t) throw new Error(v);
            var c = (0, d.getContainerNode)(t),
                l = {
                    root: (0, u.default)(h(null), i.root),
                    select: (0, u.default)(h(null), i.select),
                    item: (0, u.default)(h("item"), i.item)
                },
                f = m({
                    containerNode: c,
                    cssClasses: l,
                    autoHideContainer: s
                });
            try {
                return (0, p.default)(f, function() {
                    return (0, a.unmountComponentAtNode)(c)
                })({
                    indices: n
                })
            } catch (e) {
                throw new Error(v)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(114),
            l = r(c),
            f = n(199),
            p = r(f),
            d = n(0),
            h = (0, d.bemHelper)("ais-sort-by-selector"),
            m = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer;
                return function(e, i) {
                    var s = e.currentRefinement,
                        u = e.options,
                        c = e.refine,
                        f = e.hasNoResults;
                    if (!i) {
                        var p = r && f;
                        (0, a.render)(o.default.createElement(l.default, {
                            cssClasses: n,
                            currentValue: s,
                            options: u,
                            setValue: c,
                            shouldAutoHideContainer: p
                        }), t)
                    }
                }
            },
            v = "Usage:\nsortBySelector({\n  container,\n  indices,\n  [cssClasses.{root,select,item}={}],\n  [autoHideContainer=false]\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.max,
                i = void 0 === r ? 5 : r,
                a = e.cssClasses,
                s = void 0 === a ? {} : a,
                u = e.labels,
                l = void 0 === u ? g.default : u,
                f = e.templates,
                p = void 0 === f ? m.default : f,
                h = e.collapsible,
                v = void 0 !== h && h,
                P = e.transformData,
                R = e.autoHideContainer,
                x = void 0 === R || R;
            if (!t) throw new Error(w);
            var S = (0, y.getContainerNode)(t),
                j = {
                    root: (0, c.default)(b(null), s.root),
                    header: (0, c.default)(b("header"), s.header),
                    body: (0, c.default)(b("body"), s.body),
                    footer: (0, c.default)(b("footer"), s.footer),
                    list: (0, c.default)(b("list"), s.list),
                    item: (0, c.default)(b("item"), s.item),
                    link: (0, c.default)(b("link"), s.link),
                    disabledLink: (0, c.default)(b("link", "disabled"), s.disabledLink),
                    count: (0, c.default)(b("count"), s.count),
                    star: (0, c.default)(b("star"), s.star),
                    emptyStar: (0, c.default)(b("star", "empty"), s.emptyStar),
                    active: (0, c.default)(b("item", "active"), s.active)
                },
                C = _({
                    containerNode: S,
                    cssClasses: j,
                    collapsible: v,
                    autoHideContainer: x,
                    renderState: {},
                    templates: p,
                    transformData: P,
                    labels: l
                });
            try {
                return (0, d.default)(C, function() {
                    return (0, o.unmountComponentAtNode)(S)
                })({
                    attributeName: n,
                    max: i
                })
            } catch (e) {
                throw new Error(w)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.default = i;
        var o = n(1),
            s = r(o),
            u = n(3),
            c = r(u),
            l = n(36),
            f = r(l),
            p = n(200),
            d = r(p),
            h = n(461),
            m = r(h),
            v = n(462),
            g = r(v),
            y = n(0),
            b = (0, y.bemHelper)("ais-star-rating"),
            _ = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.templates,
                    i = e.collapsible,
                    u = e.transformData,
                    c = e.autoHideContainer,
                    l = e.renderState,
                    p = e.labels;
                return function(e, d) {
                    var h = e.refine,
                        v = e.items,
                        g = e.createURL,
                        b = e.instantSearchInstance,
                        _ = e.hasNoResults;
                    if (d) return void(l.templateProps = (0, y.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: m.default,
                        templatesConfig: b.templatesConfig,
                        templates: r
                    }));
                    var w = c && _;
                    (0, o.render)(s.default.createElement(f.default, {
                        collapsible: i,
                        createURL: g,
                        cssClasses: n,
                        facetValues: v.map(function(e) {
                            return a({}, e, {
                                labels: p
                            })
                        }),
                        shouldAutoHideContainer: w,
                        templateProps: l.templateProps,
                        toggleRefinement: h
                    }), t)
                }
            },
            w = "Usage:\nstarRating({\n  container,\n  attributeName,\n  [ max=5 ],\n  [ cssClasses.{root,header,body,footer,list,item,active,link,disabledLink,star,emptyStar,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ labels.{andUp} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<a class="{{cssClasses.link}}{{^count}} {{cssClasses.disabledLink}}{{/count}}" {{#count}}href="{{href}}"{{/count}}>\n  {{#stars}}<span class="{{#.}}{{cssClasses.star}}{{/.}}{{^.}}{{cssClasses.emptyStar}}{{/.}}"></span>{{/stars}}\n  {{labels.andUp}}\n  {{#count}}<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n</a>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            andUp: "& Up"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.cssClasses,
                r = void 0 === n ? {} : n,
                i = e.autoHideContainer,
                o = void 0 === i || i,
                s = e.collapsible,
                c = void 0 !== s && s,
                l = e.transformData,
                f = e.templates,
                d = void 0 === f ? h.default : f;
            if (!t) throw new Error(y);
            var b = (0, m.getContainerNode)(t),
                _ = {
                    body: (0, u.default)(v("body"), r.body),
                    footer: (0, u.default)(v("footer"), r.footer),
                    header: (0, u.default)(v("header"), r.header),
                    root: (0, u.default)(v(null), r.root),
                    time: (0, u.default)(v("time"), r.time)
                },
                w = g({
                    containerNode: b,
                    cssClasses: _,
                    collapsible: c,
                    autoHideContainer: o,
                    renderState: {},
                    templates: d,
                    transformData: l
                });
            try {
                return (0, p.default)(w, function() {
                    return (0, a.unmountComponentAtNode)(b)
                })()
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(464),
            l = r(c),
            f = n(201),
            p = r(f),
            d = n(465),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-stats"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    i = e.autoHideContainer,
                    s = e.renderState,
                    u = e.templates,
                    c = e.transformData;
                return function(e, f) {
                    var p = e.hitsPerPage,
                        d = e.nbHits,
                        v = e.nbPages,
                        g = e.page,
                        y = e.processingTimeMS,
                        b = e.query,
                        _ = e.instantSearchInstance;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: h.default,
                        templatesConfig: _.templatesConfig,
                        templates: u
                    }));
                    var w = i && 0 === d;
                    (0, a.render)(o.default.createElement(l.default, {
                        collapsible: r,
                        cssClasses: n,
                        hitsPerPage: p,
                        nbHits: d,
                        nbPages: v,
                        page: g,
                        processingTimeMS: y,
                        query: b,
                        shouldAutoHideContainer: w,
                        templateProps: s.templateProps
                    }), t)
                }
            },
            y = "Usage:\nstats({\n  container,\n  [ templates.{header, body, footer} ],\n  [ transformData.{body} ],\n  [ autoHideContainer=true ],\n  [ cssClasses.{root, header, body, footer, time} ],\n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RawStats = void 0;
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(4),
            l = (r(c), n(1)),
            f = r(l),
            p = n(16),
            d = r(p),
            h = n(12),
            m = r(h),
            v = n(19),
            g = r(v),
            y = t.RawStats = function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.props.nbHits !== e.hits || this.props.processingTimeMS !== e.processingTimeMS
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            hasManyResults: this.props.nbHits > 1,
                            hasNoResults: 0 === this.props.nbHits,
                            hasOneResult: 1 === this.props.nbHits,
                            hitsPerPage: this.props.hitsPerPage,
                            nbHits: this.props.nbHits,
                            nbPages: this.props.nbPages,
                            page: this.props.page,
                            processingTimeMS: this.props.processingTimeMS,
                            query: this.props.query,
                            cssClasses: this.props.cssClasses
                        };
                        return f.default.createElement(d.default, s({
                            data: e,
                            templateKey: "body"
                        }, this.props.templateProps))
                    }
                }]), t
            }(l.Component);
        t.default = (0, m.default)((0, g.default)(y))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            body: '{{#hasNoResults}}No results{{/hasNoResults}}\n  {{#hasOneResult}}1 result{{/hasOneResult}}\n  {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}\n  <span class="{{cssClasses.time}}">found in {{processingTimeMS}}ms</span>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.container,
                n = e.attributeName,
                r = e.label,
                i = e.cssClasses,
                o = void 0 === i ? {} : i,
                s = e.templates,
                c = void 0 === s ? l.default : s,
                f = e.transformData,
                p = e.autoHideContainer,
                d = void 0 === p || p,
                b = e.collapsible,
                _ = void 0 !== b && b,
                w = e.values,
                P = void 0 === w ? {
                    on: !0,
                    off: void 0
                } : w;
            if (!t) throw new Error(y);
            var R = (0, m.getContainerNode)(t),
                x = {
                    root: (0, u.default)(v(null), o.root),
                    header: (0, u.default)(v("header"), o.header),
                    body: (0, u.default)(v("body"), o.body),
                    footer: (0, u.default)(v("footer"), o.footer),
                    list: (0, u.default)(v("list"), o.list),
                    item: (0, u.default)(v("item"), o.item),
                    active: (0, u.default)(v("item", "active"), o.active),
                    label: (0, u.default)(v("label"), o.label),
                    checkbox: (0, u.default)(v("checkbox"), o.checkbox),
                    count: (0, u.default)(v("count"), o.count)
                },
                S = g({
                    containerNode: R,
                    cssClasses: x,
                    collapsible: _,
                    autoHideContainer: d,
                    renderState: {},
                    templates: c,
                    transformData: f
                });
            try {
                return (0, h.default)(S, function() {
                    return (0, a.unmountComponentAtNode)(R)
                })({
                    attributeName: n,
                    label: r,
                    values: P
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(467),
            l = r(c),
            f = n(36),
            p = r(f),
            d = n(202),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-toggle"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.collapsible,
                    i = e.autoHideContainer,
                    s = e.renderState,
                    u = e.templates,
                    c = e.transformData;
                return function(e, f) {
                    var d = e.value,
                        h = e.createURL,
                        v = e.refine,
                        g = e.instantSearchInstance;
                    if (f) return void(s.templateProps = (0, m.prepareTemplateProps)({
                        transformData: c,
                        defaultTemplates: l.default,
                        templatesConfig: g.templatesConfig,
                        templates: u
                    }));
                    var y = i && (0 === d.count || null === d.count);
                    (0, a.render)(o.default.createElement(p.default, {
                        collapsible: r,
                        createURL: h,
                        cssClasses: n,
                        facetValues: [d],
                        shouldAutoHideContainer: y,
                        templateProps: s.templateProps,
                        toggleRefinement: function(e, t) {
                            return v({
                                isRefined: t
                            })
                        }
                    }), t)
                }
            },
            y = "Usage:\ntoggle({\n  container,\n  attributeName,\n  label,\n  [ values={on: true, off: undefined} ],\n  [ cssClasses.{root,header,body,footer,list,item,active,label,checkbox,count} ],\n  [ templates.{header,item,footer} ],\n  [ transformData.{item} ],\n  [ autoHideContainer=true ],\n  [ collapsible=false ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            footer: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.pushFunction,
                n = e.delay,
                r = void 0 === n ? 3e3 : n,
                a = e.triggerOnUIInteraction,
                o = void 0 !== a && a,
                s = e.pushInitialSearch,
                u = void 0 === s || s,
                c = e.pushPagination,
                l = void 0 !== c && c;
            if (!t) throw new Error(i);
            var f = null,
                p = function(e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n].join("+");
                            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(n) + "_" + encodeURIComponent(r))
                        }
                    return t.join("&")
                },
                d = function(e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            if (r.hasOwnProperty(">=") && r.hasOwnProperty("<=")) r[">="][0] === r["<="][0] ? t.push(n + "=" + n + "_" + r[">="]) : t.push(n + "=" + n + "_" + r[">="] + "to" + r["<="]);
                            else if (r.hasOwnProperty(">=")) t.push(n + "=" + n + "_from" + r[">="]);
                            else if (r.hasOwnProperty("<=")) t.push(n + "=" + n + "_to" + r["<="]);
                            else if (r.hasOwnProperty("=")) {
                                var i = [];
                                for (var a in r["="]) r["="].hasOwnProperty(a) && i.push(r["="][a]);
                                t.push(n + "=" + n + "_" + i.join("-"))
                            }
                        }
                    return t.join("&")
                },
                h = "",
                m = function(e) {
                    if (null !== e) {
                        var n = [],
                            r = p(Object.assign({}, e.state.disjunctiveFacetsRefinements, e.state.facetsRefinements, e.state.hierarchicalFacetsRefinements)),
                            i = d(e.state.numericRefinements);
                        "" !== r && n.push(r), "" !== i && n.push(i), n = n.join("&");
                        var a = "Query: " + e.state.query + ", " + n;
                        !0 === l && (a += ", Page: " + e.state.page), h !== a && (t(n, e.state, e.results), h = a)
                    }
                },
                v = void 0,
                g = !0;
            return !0 === u && (g = !1), {
                init: function() {
                    !0 === o && (document.addEventListener("click", function() {
                        m(f)
                    }), window.addEventListener("beforeunload", function() {
                        m(f)
                    }))
                },
                render: function(e) {
                    var t = e.results,
                        n = e.state;
                    if (!0 === g) return void(g = !1);
                    f = {
                        results: t,
                        state: n
                    }, v && clearTimeout(v), v = setTimeout(function() {
                        return m(f)
                    }, r)
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "Usage:\nanalytics({\n  pushFunction,\n  [ delay=3000 ],\n  [ triggerOnUIInteraction=false ],\n  [ pushInitialSearch=true ]\n})";
        t.default = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.attributes,
                n = e.autoHideContainer,
                r = void 0 !== n && n,
                i = e.container,
                a = e.cssClasses,
                o = void 0 === a ? {} : a,
                s = e.rootPath,
                c = void 0 === s ? null : s,
                l = e.separator,
                p = void 0 === l ? " > " : l,
                y = e.templates,
                b = void 0 === y ? d.default : y,
                _ = e.transformData;
            if (!i) throw new Error(g);
            var w = (0, h.getContainerNode)(i),
                P = {
                    disabledLabel: (0, u.default)(m("disabledLabel"), o.disabledLabel),
                    home: (0, u.default)(m("home"), o.home),
                    item: (0, u.default)(m("item"), o.item),
                    label: (0, u.default)(m("label"), o.label),
                    root: (0, u.default)(m("root"), o.root),
                    separator: (0, u.default)(m("separator"), o.separator)
                },
                R = v({
                    autoHideContainer: r,
                    containerNode: w,
                    cssClasses: P,
                    renderState: {},
                    separator: p,
                    templates: b,
                    transformData: _
                });
            try {
                return (0, f.connectBreadcrumb)(R)({
                    attributes: t,
                    rootPath: c
                })
            } catch (e) {
                throw new Error(g)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(470),
            l = r(c),
            f = n(185),
            p = n(471),
            d = r(p),
            h = n(0),
            m = (0, h.bemHelper)("ais-breadcrumb"),
            v = function(e) {
                var t = e.autoHideContainer,
                    n = e.containerNode,
                    r = e.cssClasses,
                    i = e.renderState,
                    s = e.separator,
                    u = e.templates,
                    c = e.transformData;
                return function(e, f) {
                    var p = e.canRefine,
                        m = e.createURL,
                        v = e.instantSearchInstance,
                        g = e.items,
                        y = e.refine;
                    if (f) return void(i.templateProps = (0, h.prepareTemplateProps)({
                        defaultTemplates: d.default,
                        templatesConfig: v.templatesConfig,
                        templates: u,
                        transformData: c
                    }));
                    var b = t && !p;
                    (0, a.render)(o.default.createElement(l.default, {
                        canRefine: p,
                        cssClasses: r,
                        createURL: m,
                        items: g,
                        refine: y,
                        separator: s,
                        shouldAutoHideContainer: b,
                        templateProps: i.templateProps
                    }), n)
                }
            },
            g = "Usage:\nbreadcrumb({\n  container,\n  attributes,\n  [ autoHideContainer=true ],\n  [ cssClasses.{disabledLabel, home, label, root, separator}={} ],\n  [ templates.{home, separator}]\n  [ transformData.{item} ],\n  \n})"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(4),
            p = r(f),
            d = n(16),
            h = r(d),
            m = n(12),
            v = r(m),
            g = (p.default.arrayOf(p.default.shape({
                name: p.default.string,
                value: p.default.string
            })), function(e) {
                function t() {
                    return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.createURL,
                            r = t.items,
                            i = t.refine,
                            a = t.cssClasses,
                            o = r.map(function(t, o) {
                                var u = o === r.length - 1,
                                    c = u ? l.default.createElement("a", {
                                        className: a.disabledLabel + " " + a.label
                                    }, t.name) : l.default.createElement("a", {
                                        className: a.label,
                                        href: n(t.value),
                                        onClick: function(e) {
                                            e.preventDefault(), i(t.value)
                                        }
                                    }, t.name);
                                return [l.default.createElement(h.default, s({
                                    key: t.name + o,
                                    rootProps: {
                                        className: a.separator
                                    },
                                    templateKey: "separator"
                                }, e.props.templateProps)), c]
                            }),
                            u = r.length > 0 ? [a.home, a.label] : [a.disabledLabel, a.home, a.label],
                            c = function(e) {
                                e.preventDefault(), i(null)
                            },
                            f = n(null);
                        return l.default.createElement("div", {
                            className: a.root
                        }, l.default.createElement("a", {
                            className: u.join(" "),
                            href: f,
                            onClick: c
                        }, l.default.createElement(h.default, s({
                            templateKey: "home"
                        }, this.props.templateProps))), o)
                    }
                }]), t
            }(c.PureComponent));
        t.default = (0, v.default)(g)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            home: "Home",
            separator: ""
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            var t = e.container,
                n = e.attributeName,
                r = e.sortBy,
                i = void 0 === r ? ["name:asc"] : r,
                a = e.limit,
                o = void 0 === a ? 10 : a,
                s = e.cssClasses,
                c = void 0 === s ? {} : s,
                f = e.templates,
                d = void 0 === f ? p.default : f,
                h = e.transformData,
                b = e.autoHideContainer,
                _ = void 0 === b || b;
            if (!t || !n) throw new Error(y);
            var w = (0, m.getContainerNode)(t),
                P = {
                    root: (0, u.default)(v(null), c.root),
                    header: (0, u.default)(v("header"), c.header),
                    footer: (0, u.default)(v("footer"), c.footer),
                    select: (0, u.default)(v("select"), c.select),
                    option: (0, u.default)(v("option"), c.option)
                },
                R = g({
                    containerNode: w,
                    cssClasses: P,
                    autoHideContainer: _,
                    renderState: {},
                    templates: d,
                    transformData: h
                });
            try {
                return (0, l.default)(R)({
                    attributeName: n,
                    limit: o,
                    sortBy: i
                })
            } catch (e) {
                throw new Error(y)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = i;
        var a = n(1),
            o = r(a),
            s = n(3),
            u = r(s),
            c = n(111),
            l = r(c),
            f = n(473),
            p = r(f),
            d = n(474),
            h = r(d),
            m = n(0),
            v = (0, m.bemHelper)("ais-menu-select"),
            g = function(e) {
                var t = e.containerNode,
                    n = e.cssClasses,
                    r = e.autoHideContainer,
                    i = e.renderState,
                    s = e.templates,
                    u = e.transformData;
                return function(e, c) {
                    var l = e.refine,
                        f = e.items,
                        d = e.canRefine,
                        v = e.instantSearchInstance;
                    if (c) return void(i.templateProps = (0, m.prepareTemplateProps)({
                        transformData: u,
                        defaultTemplates: p.default,
                        templatesConfig: v.templatesConfig,
                        templates: s
                    }));
                    var g = r && !d;
                    (0, a.render)(o.default.createElement(h.default, {
                        cssClasses: n,
                        items: f,
                        refine: l,
                        templateProps: i.templateProps,
                        shouldAutoHideContainer: g,
                        canRefine: d
                    }), t)
                }
            },
            y = "Usage:\nmenuSelect({\n  container,\n  attributeName,\n  [ sortBy=['name:asc'] ],\n  [ limit=10 ],\n  [ cssClasses.{root,select,option,header,footer} ]\n  [ templates.{header,item,footer,seeAllOption} ],\n  [ transformData.{item} ],\n  [ autoHideContainer ]\n})"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            header: "",
            item: "{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})",
            footer: "",
            seeAllOption: "See all"
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
        }

        function o(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            l = r(c),
            f = n(4),
            p = (r(f), n(16)),
            d = r(p),
            h = n(12),
            m = r(h),
            v = n(19),
            g = r(v),
            y = function(e) {
                function t() {
                    var e, n, r, o;
                    i(this, t);
                    for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                    return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), r.handleSelectChange = function(e) {
                        var t = e.target.value;
                        r.props.refine(t)
                    }, o = n, a(r, o)
                }
                return o(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.cssClasses,
                            n = e.templateProps,
                            r = e.items,
                            i = r.find(function(e) {
                                return e.isRefined
                            }) || {
                                value: ""
                            },
                            a = i.value;
                        return l.default.createElement("select", {
                            className: t.select,
                            value: a,
                            onChange: this.handleSelectChange
                        }, l.default.createElement("option", {
                            value: "",
                            className: t.option
                        }, l.default.createElement(d.default, s({
                            templateKey: "seeAllOption"
                        }, n))), r.map(function(e) {
                            return l.default.createElement("option", {
                                key: e.value,
                                value: e.value,
                                className: t.option
                            }, l.default.createElement(d.default, s({
                                data: e,
                                templateKey: "item"
                            }, n)))
                        }))
                    }
                }]), t
            }(c.Component);
        t.default = (0, m.default)((0, g.default)(y))
    }])
});
//# sourceMappingURL=instantsearch.min.js.map