!(function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    r.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 18));
})([
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "d", function () {
                return o;
            }),
            r.d(t, "c", function () {
                return a;
            }),
            r.d(t, "b", function () {
                return i;
            });
        var n = function (e, t) {
                0 === e.length
                    ? (t.innerHTML = "<li class='results-empty'>\n      <a href='#search-term'>".concat(t.dataset.resultsEmpty, "</a>\n    </li>"))
                    : (t.innerHTML = e.reduce(function (e, t) {
                          var r = t.href,
                              n = t.title;
                          return "".concat(e, "<li><a href='").concat(r, "'>").concat(n, "</a></li>");
                      }, ""));
            },
            o = function (e) {
                e.innerHTML = "<li class='searching'>\n    <a href='#search-results'>".concat(e.dataset.searching, "&hellip;</a>\n  </li>");
            },
            a = function (e) {
                if ("URLSearchParams" in window) return new URLSearchParams(window.location.search).get(e);
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
            },
            i = function (e, t) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                    (r.onload = function () {
                        if (r.status >= 200 && r.status < 400) {
                            var e = JSON.parse(r.responseText);
                            t(null, e);
                        } else t(new Error(r.statusText));
                    }),
                    (r.onerror = function () {
                        t(new Error("Failed to get JSON! ".concat(r.statusText)));
                    }),
                    r.send();
            };
    },
    function (e, t) {
        var r = Object.prototype.hasOwnProperty,
            n = Object.prototype.toString;
        e.exports = function (e, t, o) {
            if ("[object Function]" !== n.call(t)) throw new TypeError("iterator must be a function");
            var a = e.length;
            if (a === +a) for (var i = 0; i < a; i++) t.call(o, e[i], i, e);
            else for (var s in e) r.call(e, s) && t.call(o, e[s], s, e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return JSON.parse(JSON.stringify(e));
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(9);
        function o(e, t) {
            var n = r(1),
                o = this;
            "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (o.stack = new Error().stack || "Cannot get a stacktrace, browser is too old"),
                (this.name = "AlgoliaSearchError"),
                (this.message = e || "Unknown error"),
                t &&
                    n(t, function (e, t) {
                        o[t] = e;
                    });
        }
        function a(e, t) {
            function r() {
                var r = Array.prototype.slice.call(arguments, 0);
                "string" != typeof r[0] && r.unshift(t), o.apply(this, r), (this.name = "AlgoliaSearch" + e + "Error");
            }
            return n(r, o), r;
        }
        n(o, Error),
            (e.exports = {
                AlgoliaSearchError: o,
                UnparsableJSON: a("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
                RequestTimeout: a("RequestTimeout", "Request timedout before getting a response"),
                Network: a("Network", "Network issue, see err.more for details"),
                JSONPScriptFail: a("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
                JSONPScriptError: a("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
                Unknown: a("Unknown", "Unknown error occured"),
            });
    },
    function (e, t) {
        var r = {}.toString;
        e.exports =
            Array.isArray ||
            function (e) {
                return "[object Array]" == r.call(e);
            };
    },
    function (e, t, r) {
        var n = r(1);
        e.exports = function (e, t) {
            var r = [];
            return (
                n(e, function (n, o) {
                    r.push(t(n, o, e));
                }),
                r
            );
        };
    },
    function (e, t, r) {
        (function (n) {
            function o() {
                var e;
                try {
                    e = t.storage.debug;
                } catch (e) {}
                return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e;
            }
            ((t = e.exports = r(28)).log = function () {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }),
                (t.formatArgs = function (e) {
                    var r = this.useColors;
                    if (((e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff)), !r)) return;
                    var n = "color: " + this.color;
                    e.splice(1, 0, n, "color: inherit");
                    var o = 0,
                        a = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function (e) {
                        "%%" !== e && (o++, "%c" === e && (a = o));
                    }),
                        e.splice(a, 0, n);
                }),
                (t.save = function (e) {
                    try {
                        null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
                    } catch (e) {}
                }),
                (t.load = o),
                (t.useColors = function () {
                    if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                    return (
                        ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                        ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                        ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                        ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    );
                }),
                (t.storage =
                    "undefined" != typeof chrome && void 0 !== chrome.storage
                        ? chrome.storage.local
                        : (function () {
                              try {
                                  return window.localStorage;
                              } catch (e) {}
                          })()),
                (t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"]),
                (t.formatters.j = function (e) {
                    try {
                        return JSON.stringify(e);
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message;
                    }
                }),
                t.enable(o());
        }.call(this, r(8)));
    },
    function (e, t) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (r = window);
        }
        e.exports = r;
    },
    function (e, t) {
        var r,
            n,
            o = (e.exports = {});
        function a() {
            throw new Error("setTimeout has not been defined");
        }
        function i() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
            try {
                return r(e, 0);
            } catch (t) {
                try {
                    return r.call(null, e, 0);
                } catch (t) {
                    return r.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                r = "function" == typeof setTimeout ? setTimeout : a;
            } catch (e) {
                r = a;
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
                n = i;
            }
        })();
        var c,
            u = [],
            l = !1,
            p = -1;
        function f() {
            l && c && ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && h());
        }
        function h() {
            if (!l) {
                var e = s(f);
                l = !0;
                for (var t = u.length; t; ) {
                    for (c = u, u = []; ++p < t; ) c && c[p].run();
                    (p = -1), (t = u.length);
                }
                (c = null),
                    (l = !1),
                    (function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                        try {
                            n(e);
                        } catch (t) {
                            try {
                                return n.call(null, e);
                            } catch (t) {
                                return n.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function d(e, t) {
            (this.fun = e), (this.array = t);
        }
        function y() {}
        (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            u.push(new d(e, t)), 1 !== u.length || l || s(h);
        }),
            (d.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = y),
            (o.addListener = y),
            (o.once = y),
            (o.off = y),
            (o.removeListener = y),
            (o.removeAllListeners = y),
            (o.emit = y),
            (o.prependListener = y),
            (o.prependOnceListener = y),
            (o.listeners = function (e) {
                return [];
            }),
            (o.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (e, t) {
        "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                  (e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
              })
            : (e.exports = function (e, t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
              });
    },
    function (e, t, r) {
        e.exports = function (e, t) {
            return function (r, o, a) {
                if (("function" == typeof r && "object" == typeof o) || "object" == typeof a) throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                0 === arguments.length || "function" == typeof r ? ((a = r), (r = "")) : (1 !== arguments.length && "function" != typeof o) || ((a = o), (o = void 0)),
                    "object" == typeof r && null !== r ? ((o = r), (r = void 0)) : null == r && (r = "");
                var i,
                    s = "";
                return void 0 !== r && (s += e + "=" + encodeURIComponent(r)), void 0 !== o && (o.additionalUA && ((i = o.additionalUA), delete o.additionalUA), (s = this.as._getSearchParams(o, s))), this._search(s, t, a, i);
            };
        };
        var n = r(3);
    },
    function (e, t, r) {
        e.exports = function (e, t) {
            var n = r(25),
                o = r(1),
                a = {};
            return (
                o(n(e), function (r) {
                    !0 !== t(r) && (a[r] = e[r]);
                }),
                a
            );
        };
    },
    ,
    function (e, t, r) {
        "use strict";
        var n = r(19),
            o = r(30);
        e.exports = o(n, "(lite) ");
    },
    ,
    ,
    ,
    ,
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(13),
            o = r.n(n),
            a = r(0),
            i = window.algolia,
            s = i.appId,
            c = i.indexName,
            u = i.searchApiKey,
            l = o()(s, u).initIndex("".concat(c).concat(window.location.pathname.replace("/search/", ""))),
            p = function (e, t) {
                Object(a.d)(t),
                    e
                        ? l.search(e, { attributesToRetrieve: ["title", "href"], hitsPerPage: 10 }, function (e, r) {
                              e ? console.error(e) : Object(a.a)(r.hits, t);
                          })
                        : Object(a.a)([], t);
            },
            f = document.getElementById("search-form"),
            h = document.getElementById("search-term"),
            d = document.getElementById("search-results"),
            y = Object(a.c)("q");
        (h.value = y),
            h.focus(),
            p(y, d),
            f.addEventListener("submit", function (e) {
                e.preventDefault(), p(h.value, d);
            });
    },
    function (e, t, r) {
        (function (t) {
            e.exports = c;
            var n = r(3),
                o = r(20),
                a = r(21),
                i = r(27),
                s = (t.env.RESET_APP_DATA_TIMER && parseInt(t.env.RESET_APP_DATA_TIMER, 10)) || 12e4;
            function c(e, t, o) {
                var a = r(6)("algoliasearch"),
                    i = r(2),
                    s = r(4),
                    c = r(5),
                    l = "Usage: algoliasearch(applicationID, apiKey, opts)";
                if (!0 !== o._allowEmptyCredentials && !e) throw new n.AlgoliaSearchError("Please provide an application ID. " + l);
                if (!0 !== o._allowEmptyCredentials && !t) throw new n.AlgoliaSearchError("Please provide an API key. " + l);
                (this.applicationID = e),
                    (this.apiKey = t),
                    (this.hosts = { read: [], write: [] }),
                    (o = o || {}),
                    (this._timeouts = o.timeouts || { connect: 1e3, read: 2e3, write: 3e4 }),
                    o.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = o.timeout);
                var p = o.protocol || "https:";
                if ((/:$/.test(p) || (p += ":"), "http:" !== p && "https:" !== p)) throw new n.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + o.protocol + "`)");
                if ((this._checkAppIdData(), o.hosts)) s(o.hosts) ? ((this.hosts.read = i(o.hosts)), (this.hosts.write = i(o.hosts))) : ((this.hosts.read = i(o.hosts.read)), (this.hosts.write = i(o.hosts.write)));
                else {
                    var f = c(this._shuffleResult, function (t) {
                            return e + "-" + t + ".algolianet.com";
                        }),
                        h = (!1 === o.dsn ? "" : "-dsn") + ".algolia.net";
                    (this.hosts.read = [this.applicationID + h].concat(f)), (this.hosts.write = [this.applicationID + ".algolia.net"].concat(f));
                }
                (this.hosts.read = c(this.hosts.read, u(p))),
                    (this.hosts.write = c(this.hosts.write, u(p))),
                    (this.extraHeaders = {}),
                    (this.cache = o._cache || {}),
                    (this._ua = o._ua),
                    (this._useCache = !(void 0 !== o._useCache && !o._cache) || o._useCache),
                    (this._useRequestCache = this._useCache && o._useRequestCache),
                    (this._useFallback = void 0 === o.useFallback || o.useFallback),
                    (this._setTimeout = o._setTimeout),
                    a("init done, %j", this);
            }
            function u(e) {
                return function (t) {
                    return e + "//" + t.toLowerCase();
                };
            }
            function l(e) {
                if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
                var t = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var r = JSON.stringify(e);
                return (Array.prototype.toJSON = t), r;
            }
            function p(e) {
                var t = {};
                for (var r in e) {
                    var n;
                    if (Object.prototype.hasOwnProperty.call(e, r)) (n = "x-algolia-api-key" === r || "x-algolia-application-id" === r ? "**hidden for security purposes**" : e[r]), (t[r] = n);
                }
                return t;
            }
            (c.prototype.initIndex = function (e) {
                return new a(this, e);
            }),
                (c.prototype.setExtraHeader = function (e, t) {
                    this.extraHeaders[e.toLowerCase()] = t;
                }),
                (c.prototype.getExtraHeader = function (e) {
                    return this.extraHeaders[e.toLowerCase()];
                }),
                (c.prototype.unsetExtraHeader = function (e) {
                    delete this.extraHeaders[e.toLowerCase()];
                }),
                (c.prototype.addAlgoliaAgent = function (e) {
                    -1 === this._ua.indexOf(";" + e) && (this._ua += ";" + e);
                }),
                (c.prototype._jsonRequest = function (e) {
                    this._checkAppIdData();
                    var t,
                        a,
                        i,
                        s = r(6)("algoliasearch:" + e.url),
                        c = e.additionalUA || "",
                        u = e.cache,
                        f = this,
                        h = 0,
                        d = !1,
                        y = f._useFallback && f._request.fallback && e.fallback;
                    this.apiKey.length > 500 && void 0 !== e.body && (void 0 !== e.body.params || void 0 !== e.body.requests)
                        ? ((e.body.apiKey = this.apiKey), (i = this._computeRequestHeaders({ additionalUA: c, withApiKey: !1, headers: e.headers })))
                        : (i = this._computeRequestHeaders({ additionalUA: c, headers: e.headers })),
                        void 0 !== e.body && (t = l(e.body)),
                        s("request start");
                    var m = [];
                    function g(e, t, r) {
                        return f._useCache && e && t && void 0 !== t[r];
                    }
                    function v(t, r) {
                        if (
                            (g(f._useRequestCache, u, a) &&
                                t.catch(function () {
                                    delete u[a];
                                }),
                            "function" != typeof e.callback)
                        )
                            return t.then(r);
                        t.then(
                            function (t) {
                                o(function () {
                                    e.callback(null, r(t));
                                }, f._setTimeout || setTimeout);
                            },
                            function (t) {
                                o(function () {
                                    e.callback(t);
                                }, f._setTimeout || setTimeout);
                            }
                        );
                    }
                    if ((f._useCache && f._useRequestCache && (a = e.url), f._useCache && f._useRequestCache && t && (a += "_body_" + t), g(f._useRequestCache, u, a))) {
                        s("serving request from cache");
                        var b = u[a];
                        return v("function" != typeof b.then ? f._promise.resolve({ responseText: b }) : b, function (e) {
                            return JSON.parse(e.responseText);
                        });
                    }
                    var w = (function r(o, v) {
                        f._checkAppIdData();
                        var b = new Date();
                        if ((f._useCache && !f._useRequestCache && (a = e.url), f._useCache && !f._useRequestCache && t && (a += "_body_" + v.body), g(!f._useRequestCache, u, a))) {
                            s("serving response from cache");
                            var w = u[a];
                            return f._promise.resolve({ body: JSON.parse(w), responseText: w });
                        }
                        if (h >= f.hosts[e.hostType].length)
                            return !y || d
                                ? (s("could not get any response"),
                                  f._promise.reject(
                                      new n.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + f.applicationID, { debugData: m })
                                  ))
                                : (s("switching to fallback"),
                                  (h = 0),
                                  (v.method = e.fallback.method),
                                  (v.url = e.fallback.url),
                                  (v.jsonBody = e.fallback.body),
                                  v.jsonBody && (v.body = l(v.jsonBody)),
                                  (i = f._computeRequestHeaders({ additionalUA: c, headers: e.headers })),
                                  (v.timeouts = f._getTimeoutsForRequest(e.hostType)),
                                  f._setHostIndexByType(0, e.hostType),
                                  (d = !0),
                                  r(f._request.fallback, v));
                        var _ = f._getHostByType(e.hostType),
                            x = _ + v.url,
                            T = { body: v.body, jsonBody: v.jsonBody, method: v.method, headers: i, timeouts: v.timeouts, debug: s, forceAuthHeaders: v.forceAuthHeaders };
                        return (
                            s("method: %s, url: %s, headers: %j, timeouts: %d", T.method, x, T.headers, T.timeouts),
                            o === f._request.fallback && s("using fallback"),
                            o.call(f, x, T).then(
                                function (e) {
                                    var r = (e && e.body && e.body.message && e.body.status) || e.statusCode || (e && e.body && 200);
                                    s("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, r, e.headers);
                                    var o = 2 === Math.floor(r / 100),
                                        c = new Date();
                                    if (
                                        (m.push({
                                            currentHost: _,
                                            headers: p(i),
                                            content: t || null,
                                            contentLength: void 0 !== t ? t.length : null,
                                            method: v.method,
                                            timeouts: v.timeouts,
                                            url: v.url,
                                            startTime: b,
                                            endTime: c,
                                            duration: c - b,
                                            statusCode: r,
                                        }),
                                        o)
                                    )
                                        return f._useCache && !f._useRequestCache && u && (u[a] = e.responseText), { responseText: e.responseText, body: e.body };
                                    if (4 !== Math.floor(r / 100)) return (h += 1), S();
                                    s("unrecoverable error");
                                    var l = new n.AlgoliaSearchError(e.body && e.body.message, { debugData: m, statusCode: r });
                                    return f._promise.reject(l);
                                },
                                function (a) {
                                    s("error: %s, stack: %s", a.message, a.stack);
                                    var c = new Date();
                                    return (
                                        m.push({
                                            currentHost: _,
                                            headers: p(i),
                                            content: t || null,
                                            contentLength: void 0 !== t ? t.length : null,
                                            method: v.method,
                                            timeouts: v.timeouts,
                                            url: v.url,
                                            startTime: b,
                                            endTime: c,
                                            duration: c - b,
                                        }),
                                        a instanceof n.AlgoliaSearchError || (a = new n.Unknown(a && a.message, a)),
                                        (h += 1),
                                        a instanceof n.Unknown || a instanceof n.UnparsableJSON || (h >= f.hosts[e.hostType].length && (d || !y))
                                            ? ((a.debugData = m), f._promise.reject(a))
                                            : a instanceof n.RequestTimeout
                                            ? (s("retrying request with higher timeout"), f._incrementHostIndex(e.hostType), f._incrementTimeoutMultipler(), (v.timeouts = f._getTimeoutsForRequest(e.hostType)), r(o, v))
                                            : S()
                                    );
                                }
                            )
                        );
                        function S() {
                            return s("retrying request"), f._incrementHostIndex(e.hostType), r(o, v);
                        }
                    })(f._request, { url: e.url, method: e.method, body: t, jsonBody: e.body, timeouts: f._getTimeoutsForRequest(e.hostType), forceAuthHeaders: e.forceAuthHeaders });
                    return (
                        f._useCache && f._useRequestCache && u && (u[a] = w),
                        v(w, function (e) {
                            return e.body;
                        })
                    );
                }),
                (c.prototype._getSearchParams = function (e, t) {
                    if (null == e) return t;
                    for (var r in e) null !== r && void 0 !== e[r] && e.hasOwnProperty(r) && ((t += "" === t ? "" : "&"), (t += r + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[r]) ? l(e[r]) : e[r])));
                    return t;
                }),
                (c.prototype._computeRequestHeaders = function (e) {
                    var t = r(1),
                        n = { "x-algolia-agent": e.additionalUA ? this._ua + ";" + e.additionalUA : this._ua, "x-algolia-application-id": this.applicationID };
                    return (
                        !1 !== e.withApiKey && (n["x-algolia-api-key"] = this.apiKey),
                        this.userToken && (n["x-algolia-usertoken"] = this.userToken),
                        this.securityTags && (n["x-algolia-tagfilters"] = this.securityTags),
                        t(this.extraHeaders, function (e, t) {
                            n[t] = e;
                        }),
                        e.headers &&
                            t(e.headers, function (e, t) {
                                n[t] = e;
                            }),
                        n
                    );
                }),
                (c.prototype.search = function (e, t, n) {
                    var o = r(4),
                        a = r(5);
                    if (!o(e)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
                    "function" == typeof t ? ((n = t), (t = {})) : void 0 === t && (t = {});
                    var i = this,
                        s = {
                            requests: a(e, function (e) {
                                var t = "";
                                return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), { indexName: e.indexName, params: i._getSearchParams(e.params, t) };
                            }),
                        },
                        c = a(s.requests, function (e, t) {
                            return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params);
                        }).join("&"),
                        u = "/1/indexes/*/queries";
                    return (
                        void 0 !== t.strategy && (u += "?strategy=" + t.strategy),
                        this._jsonRequest({ cache: this.cache, method: "POST", url: u, body: s, hostType: "read", fallback: { method: "GET", url: "/1/indexes/*", body: { params: c } }, callback: n })
                    );
                }),
                (c.prototype.searchForFacetValues = function (e) {
                    var t = r(4),
                        n = r(5),
                        o = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";
                    if (!t(e)) throw new Error(o);
                    var a = this;
                    return a._promise.all(
                        n(e, function (e) {
                            if (!e || void 0 === e.indexName || void 0 === e.params.facetName || void 0 === e.params.facetQuery) throw new Error(o);
                            var t = r(2),
                                n = r(11),
                                i = e.indexName,
                                s = e.params,
                                c = s.facetName,
                                u = n(t(s), function (e) {
                                    return "facetName" === e;
                                }),
                                l = a._getSearchParams(u, "");
                            return a._jsonRequest({ cache: a.cache, method: "POST", url: "/1/indexes/" + encodeURIComponent(i) + "/facets/" + encodeURIComponent(c) + "/query", hostType: "read", body: { params: l } });
                        })
                    );
                }),
                (c.prototype.setSecurityTags = function (e) {
                    if ("[object Array]" === Object.prototype.toString.call(e)) {
                        for (var t = [], r = 0; r < e.length; ++r)
                            if ("[object Array]" === Object.prototype.toString.call(e[r])) {
                                for (var n = [], o = 0; o < e[r].length; ++o) n.push(e[r][o]);
                                t.push("(" + n.join(",") + ")");
                            } else t.push(e[r]);
                        e = t.join(",");
                    }
                    this.securityTags = e;
                }),
                (c.prototype.setUserToken = function (e) {
                    this.userToken = e;
                }),
                (c.prototype.clearCache = function () {
                    this.cache = {};
                }),
                (c.prototype.setRequestTimeout = function (e) {
                    e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e);
                }),
                (c.prototype.setTimeouts = function (e) {
                    this._timeouts = e;
                }),
                (c.prototype.getTimeouts = function () {
                    return this._timeouts;
                }),
                (c.prototype._getAppIdData = function () {
                    var e = i.get(this.applicationID);
                    return null !== e && this._cacheAppIdData(e), e;
                }),
                (c.prototype._setAppIdData = function (e) {
                    return (e.lastChange = new Date().getTime()), this._cacheAppIdData(e), i.set(this.applicationID, e);
                }),
                (c.prototype._checkAppIdData = function () {
                    var e = this._getAppIdData(),
                        t = new Date().getTime();
                    return null === e || t - e.lastChange > s ? this._resetInitialAppIdData(e) : e;
                }),
                (c.prototype._resetInitialAppIdData = function (e) {
                    var t = e || {};
                    return (
                        (t.hostIndexes = { read: 0, write: 0 }),
                        (t.timeoutMultiplier = 1),
                        (t.shuffleResult =
                            t.shuffleResult ||
                            (function (e) {
                                var t,
                                    r,
                                    n = e.length;
                                for (; 0 !== n; ) (r = Math.floor(Math.random() * n)), (t = e[(n -= 1)]), (e[n] = e[r]), (e[r] = t);
                                return e;
                            })([1, 2, 3])),
                        this._setAppIdData(t)
                    );
                }),
                (c.prototype._cacheAppIdData = function (e) {
                    (this._hostIndexes = e.hostIndexes), (this._timeoutMultiplier = e.timeoutMultiplier), (this._shuffleResult = e.shuffleResult);
                }),
                (c.prototype._partialAppIdDataUpdate = function (e) {
                    var t = r(1),
                        n = this._getAppIdData();
                    return (
                        t(e, function (e, t) {
                            n[t] = e;
                        }),
                        this._setAppIdData(n)
                    );
                }),
                (c.prototype._getHostByType = function (e) {
                    return this.hosts[e][this._getHostIndexByType(e)];
                }),
                (c.prototype._getTimeoutMultiplier = function () {
                    return this._timeoutMultiplier;
                }),
                (c.prototype._getHostIndexByType = function (e) {
                    return this._hostIndexes[e];
                }),
                (c.prototype._setHostIndexByType = function (e, t) {
                    var n = r(2)(this._hostIndexes);
                    return (n[t] = e), this._partialAppIdDataUpdate({ hostIndexes: n }), e;
                }),
                (c.prototype._incrementHostIndex = function (e) {
                    return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e);
                }),
                (c.prototype._incrementTimeoutMultipler = function () {
                    var e = Math.max(this._timeoutMultiplier + 1, 4);
                    return this._partialAppIdDataUpdate({ timeoutMultiplier: e });
                }),
                (c.prototype._getTimeoutsForRequest = function (e) {
                    return { connect: this._timeouts.connect * this._timeoutMultiplier, complete: this._timeouts[e] * this._timeoutMultiplier };
                });
        }.call(this, r(8)));
    },
    function (e, t) {
        e.exports = function (e, t) {
            t(e, 0);
        };
    },
    function (e, t, r) {
        var n = r(10),
            o = r(22),
            a = r(23);
        function i(e, t) {
            (this.indexName = t), (this.as = e), (this.typeAheadArgs = null), (this.typeAheadValueOption = null), (this.cache = {});
        }
        (e.exports = i),
            (i.prototype.clearCache = function () {
                this.cache = {};
            }),
            (i.prototype.search = n("query")),
            (i.prototype.similarSearch = n("similarQuery")),
            (i.prototype.browse = function (e, t, n) {
                var o,
                    a,
                    i = r(24);
                0 === arguments.length || (1 === arguments.length && "function" == typeof arguments[0])
                    ? ((o = 0), (n = arguments[0]), (e = void 0))
                    : "number" == typeof arguments[0]
                    ? ((o = arguments[0]), "number" == typeof arguments[1] ? (a = arguments[1]) : "function" == typeof arguments[1] && ((n = arguments[1]), (a = void 0)), (e = void 0), (t = void 0))
                    : "object" == typeof arguments[0]
                    ? ("function" == typeof arguments[1] && (n = arguments[1]), (t = arguments[0]), (e = void 0))
                    : "string" == typeof arguments[0] && "function" == typeof arguments[1] && ((n = arguments[1]), (t = void 0)),
                    (t = i({}, t || {}, { page: o, hitsPerPage: a, query: e }));
                var s = this.as._getSearchParams(t, "");
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse", body: { params: s }, hostType: "read", callback: n });
            }),
            (i.prototype.browseFrom = function (e, t) {
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse", body: { cursor: e }, hostType: "read", callback: t });
            }),
            (i.prototype.searchForFacetValues = function (e, t) {
                var n = r(2),
                    o = r(11);
                if (void 0 === e.facetName || void 0 === e.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");
                var a = e.facetName,
                    i = o(n(e), function (e) {
                        return "facetName" === e;
                    }),
                    s = this.as._getSearchParams(i, "");
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(a) + "/query", hostType: "read", body: { params: s }, callback: t });
            }),
            (i.prototype.searchFacet = o(function (e, t) {
                return this.searchForFacetValues(e, t);
            }, a("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])"))),
            (i.prototype._search = function (e, t, r, n) {
                return this.as._jsonRequest({
                    cache: this.cache,
                    method: "POST",
                    url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                    body: { params: e },
                    hostType: "read",
                    fallback: { method: "GET", url: "/1/indexes/" + encodeURIComponent(this.indexName), body: { params: e } },
                    callback: r,
                    additionalUA: n,
                });
            }),
            (i.prototype.getObject = function (e, t, r) {
                (1 !== arguments.length && "function" != typeof t) || ((r = t), (t = void 0));
                var n = "";
                if (void 0 !== t) {
                    n = "?attributes=";
                    for (var o = 0; o < t.length; ++o) 0 !== o && (n += ","), (n += t[o]);
                }
                return this.as._jsonRequest({ method: "GET", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e) + n, hostType: "read", callback: r });
            }),
            (i.prototype.getObjects = function (e, t, n) {
                var o = r(4),
                    a = r(5);
                if (!o(e)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
                var i = this;
                (1 !== arguments.length && "function" != typeof t) || ((n = t), (t = void 0));
                var s = {
                    requests: a(e, function (e) {
                        var r = { indexName: i.indexName, objectID: e };
                        return t && (r.attributesToRetrieve = t.join(",")), r;
                    }),
                };
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/*/objects", hostType: "read", body: s, callback: n });
            }),
            (i.prototype.as = null),
            (i.prototype.indexName = null),
            (i.prototype.typeAheadArgs = null),
            (i.prototype.typeAheadValueOption = null);
    },
    function (e, t) {
        e.exports = function (e, t) {
            var r = !1;
            return function () {
                return r || (console.warn(t), (r = !0)), e.apply(this, arguments);
            };
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            var r = e.toLowerCase().replace(/[\.\(\)]/g, "");
            return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + r;
        };
    },
    function (e, t, r) {
        var n = r(1);
        e.exports = function e(t) {
            var r = Array.prototype.slice.call(arguments);
            return (
                n(r, function (r) {
                    for (var n in r) r.hasOwnProperty(n) && ("object" == typeof t[n] && "object" == typeof r[n] ? (t[n] = e({}, t[n], r[n])) : void 0 !== r[n] && (t[n] = r[n]));
                }),
                t
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            o = Object.prototype.toString,
            a = Array.prototype.slice,
            i = r(26),
            s = Object.prototype.propertyIsEnumerable,
            c = !s.call({ toString: null }, "toString"),
            u = s.call(function () {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            p = function (e) {
                var t = e.constructor;
                return t && t.prototype === e;
            },
            f = {
                $applicationCache: !0,
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
                $window: !0,
            },
            h = (function () {
                if ("undefined" == typeof window) return !1;
                for (var e in window)
                    try {
                        if (!f["$" + e] && n.call(window, e) && null !== window[e] && "object" == typeof window[e])
                            try {
                                p(window[e]);
                            } catch (e) {
                                return !0;
                            }
                    } catch (e) {
                        return !0;
                    }
                return !1;
            })(),
            d = function (e) {
                var t = null !== e && "object" == typeof e,
                    r = "[object Function]" === o.call(e),
                    a = i(e),
                    s = t && "[object String]" === o.call(e),
                    f = [];
                if (!t && !r && !a) throw new TypeError("Object.keys called on a non-object");
                var d = u && r;
                if (s && e.length > 0 && !n.call(e, 0)) for (var y = 0; y < e.length; ++y) f.push(String(y));
                if (a && e.length > 0) for (var m = 0; m < e.length; ++m) f.push(String(m));
                else for (var g in e) (d && "prototype" === g) || !n.call(e, g) || f.push(String(g));
                if (c)
                    for (
                        var v = (function (e) {
                                if ("undefined" == typeof window || !h) return p(e);
                                try {
                                    return p(e);
                                } catch (e) {
                                    return !1;
                                }
                            })(e),
                            b = 0;
                        b < l.length;
                        ++b
                    )
                        (v && "constructor" === l[b]) || !n.call(e, l[b]) || f.push(l[b]);
                return f;
            };
        (d.shim = function () {
            if (Object.keys) {
                if (
                    !(function () {
                        return 2 === (Object.keys(arguments) || "").length;
                    })(1, 2)
                ) {
                    var e = Object.keys;
                    Object.keys = function (t) {
                        return i(t) ? e(a.call(t)) : e(t);
                    };
                }
            } else Object.keys = d;
            return Object.keys || d;
        }),
            (e.exports = d);
    },
    function (e, t, r) {
        "use strict";
        var n = Object.prototype.toString;
        e.exports = function (e) {
            var t = n.call(e),
                r = "[object Arguments]" === t;
            return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)), r;
        };
    },
    function (e, t, r) {
        (function (t) {
            var n,
                o = r(6)("algoliasearch:src/hostIndexState.js"),
                a = "algoliasearch-client-js",
                i = {
                    state: {},
                    set: function (e, t) {
                        return (this.state[e] = t), this.state[e];
                    },
                    get: function (e) {
                        return this.state[e] || null;
                    },
                },
                s = {
                    set: function (e, r) {
                        i.set(e, r);
                        try {
                            var n = JSON.parse(t.localStorage[a]);
                            return (n[e] = r), (t.localStorage[a] = JSON.stringify(n)), n[e];
                        } catch (t) {
                            return c(e, t);
                        }
                    },
                    get: function (e) {
                        try {
                            return JSON.parse(t.localStorage[a])[e] || null;
                        } catch (t) {
                            return c(e, t);
                        }
                    },
                };
            function c(e, r) {
                return (
                    o("localStorage failed with", r),
                    (function () {
                        try {
                            t.localStorage.removeItem(a);
                        } catch (e) {}
                    })(),
                    (n = i).get(e)
                );
            }
            function u(e, t) {
                return 1 === arguments.length ? n.get(e) : n.set(e, t);
            }
            function l() {
                try {
                    return "localStorage" in t && null !== t.localStorage && (t.localStorage[a] || t.localStorage.setItem(a, JSON.stringify({})), !0);
                } catch (e) {
                    return !1;
                }
            }
            (n = l() ? s : i), (e.exports = { get: u, set: u, supportsLocalStorage: l });
        }.call(this, r(7)));
    },
    function (e, t, r) {
        var n;
        function o(e) {
            function r() {
                if (r.enabled) {
                    var e = r,
                        o = +new Date(),
                        a = o - (n || o);
                    (e.diff = a), (e.prev = n), (e.curr = o), (n = o);
                    for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
                    (i[0] = t.coerce(i[0])), "string" != typeof i[0] && i.unshift("%O");
                    var c = 0;
                    (i[0] = i[0].replace(/%([a-zA-Z%])/g, function (r, n) {
                        if ("%%" === r) return r;
                        c++;
                        var o = t.formatters[n];
                        if ("function" == typeof o) {
                            var a = i[c];
                            (r = o.call(e, a)), i.splice(c, 1), c--;
                        }
                        return r;
                    })),
                        t.formatArgs.call(e, i),
                        (r.log || t.log || console.log.bind(console)).apply(e, i);
                }
            }
            return (
                (r.namespace = e),
                (r.enabled = t.enabled(e)),
                (r.useColors = t.useColors()),
                (r.color = (function (e) {
                    var r,
                        n = 0;
                    for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
                    return t.colors[Math.abs(n) % t.colors.length];
                })(e)),
                "function" == typeof t.init && t.init(r),
                r
            );
        }
        ((t = e.exports = o.debug = o.default = o).coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e;
        }),
            (t.disable = function () {
                t.enable("");
            }),
            (t.enable = function (e) {
                t.save(e), (t.names = []), (t.skips = []);
                for (var r = ("string" == typeof e ? e : "").split(/[\s,]+/), n = r.length, o = 0; o < n; o++)
                    r[o] && ("-" === (e = r[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
                var r, n;
                for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
                return !1;
            }),
            (t.humanize = r(29)),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {});
    },
    function (e, t) {
        var r = 1e3,
            n = 60 * r,
            o = 60 * n,
            a = 24 * o,
            i = 365.25 * a;
        function s(e, t, r) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s";
        }
        e.exports = function (e, t) {
            t = t || {};
            var c,
                u = typeof e;
            if ("string" === u && e.length > 0)
                return (function (e) {
                    if ((e = String(e)).length > 100) return;
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!t) return;
                    var s = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return s * i;
                        case "days":
                        case "day":
                        case "d":
                            return s * a;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return s * o;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return s * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return s * r;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return s;
                        default:
                            return;
                    }
                })(e);
            if ("number" === u && !1 === isNaN(e))
                return t.long
                    ? s((c = e), a, "day") || s(c, o, "hour") || s(c, n, "minute") || s(c, r, "second") || c + " ms"
                    : (function (e) {
                          if (e >= a) return Math.round(e / a) + "d";
                          if (e >= o) return Math.round(e / o) + "h";
                          if (e >= n) return Math.round(e / n) + "m";
                          if (e >= r) return Math.round(e / r) + "s";
                          return e + "ms";
                      })(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
    },
    function (e, t, r) {
        "use strict";
        var n = r(31),
            o = n.Promise || r(32).Promise;
        e.exports = function (e, t) {
            var a = r(9),
                i = r(3),
                s = r(33),
                c = r(35),
                u = r(36);
            function l(e, t, n) {
                return ((n = r(2)(n || {}))._ua = n._ua || l.ua), new f(e, t, n);
            }
            (t = t || ""), (l.version = r(37)), (l.ua = "Algolia for vanilla JavaScript " + t + l.version), (l.initPlaces = u(l)), (n.__algolia = { debug: r(6), algoliasearch: l });
            var p = { hasXMLHttpRequest: "XMLHttpRequest" in n, hasXDomainRequest: "XDomainRequest" in n };
            function f() {
                e.apply(this, arguments);
            }
            return (
                p.hasXMLHttpRequest && (p.cors = "withCredentials" in new XMLHttpRequest()),
                a(f, e),
                (f.prototype._request = function (e, t) {
                    return new o(function (r, n) {
                        if (p.cors || p.hasXDomainRequest) {
                            e = s(e, t.headers);
                            var o,
                                a,
                                c = t.body,
                                u = p.cors ? new XMLHttpRequest() : new XDomainRequest(),
                                l = !1;
                            (o = setTimeout(f, t.timeouts.connect)),
                                (u.onprogress = function () {
                                    l || h();
                                }),
                                "onreadystatechange" in u &&
                                    (u.onreadystatechange = function () {
                                        !l && u.readyState > 1 && h();
                                    }),
                                (u.onload = function () {
                                    if (a) return;
                                    var e;
                                    clearTimeout(o);
                                    try {
                                        e = { body: JSON.parse(u.responseText), responseText: u.responseText, statusCode: u.status, headers: (u.getAllResponseHeaders && u.getAllResponseHeaders()) || {} };
                                    } catch (t) {
                                        e = new i.UnparsableJSON({ more: u.responseText });
                                    }
                                    e instanceof i.UnparsableJSON ? n(e) : r(e);
                                }),
                                (u.onerror = function (e) {
                                    if (a) return;
                                    clearTimeout(o), n(new i.Network({ more: e }));
                                }),
                                u instanceof XMLHttpRequest
                                    ? (u.open(t.method, e, !0),
                                      t.forceAuthHeaders && (u.setRequestHeader("x-algolia-application-id", t.headers["x-algolia-application-id"]), u.setRequestHeader("x-algolia-api-key", t.headers["x-algolia-api-key"])))
                                    : u.open(t.method, e),
                                p.cors &&
                                    (c && ("POST" === t.method ? u.setRequestHeader("content-type", "application/x-www-form-urlencoded") : u.setRequestHeader("content-type", "application/json")),
                                    u.setRequestHeader("accept", "application/json")),
                                c ? u.send(c) : u.send();
                        } else n(new i.Network("CORS not supported"));
                        function f() {
                            (a = !0), u.abort(), n(new i.RequestTimeout());
                        }
                        function h() {
                            (l = !0), clearTimeout(o), (o = setTimeout(f, t.timeouts.complete));
                        }
                    });
                }),
                (f.prototype._request.fallback = function (e, t) {
                    return (
                        (e = s(e, t.headers)),
                        new o(function (r, n) {
                            c(e, t, function (e, t) {
                                e ? n(e) : r(t);
                            });
                        })
                    );
                }),
                (f.prototype._promise = {
                    reject: function (e) {
                        return o.reject(e);
                    },
                    resolve: function (e) {
                        return o.resolve(e);
                    },
                    delay: function (e) {
                        return new o(function (t) {
                            setTimeout(t, e);
                        });
                    },
                    all: function (e) {
                        return o.all(e);
                    },
                }),
                l
            );
        };
    },
    function (e, t, r) {
        (function (t) {
            var r;
            (r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}), (e.exports = r);
        }.call(this, r(7)));
    },
    function (e, t, r) {
        (function (t, r) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   v4.2.4+314e4831
             */ var n;
            (n = function () {
                "use strict";
                function e(e) {
                    return "function" == typeof e;
                }
                var n = Array.isArray
                        ? Array.isArray
                        : function (e) {
                              return "[object Array]" === Object.prototype.toString.call(e);
                          },
                    o = 0,
                    a = void 0,
                    i = void 0,
                    s = function (e, t) {
                        (d[o] = e), (d[o + 1] = t), 2 === (o += 2) && (i ? i(y) : w());
                    },
                    c = "undefined" != typeof window ? window : void 0,
                    u = c || {},
                    l = u.MutationObserver || u.WebKitMutationObserver,
                    p = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function h() {
                    var e = setTimeout;
                    return function () {
                        return e(y, 1);
                    };
                }
                var d = new Array(1e3);
                function y() {
                    for (var e = 0; e < o; e += 2) {
                        (0, d[e])(d[e + 1]), (d[e] = void 0), (d[e + 1] = void 0);
                    }
                    o = 0;
                }
                var m,
                    g,
                    v,
                    b,
                    w = void 0;
                function _(e, t) {
                    var r = this,
                        n = new this.constructor(S);
                    void 0 === n[T] && M(n);
                    var o = r._state;
                    if (o) {
                        var a = arguments[o - 1];
                        s(function () {
                            return D(o, n, a, r._result);
                        });
                    } else P(r, n, e, t);
                    return n;
                }
                function x(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(S);
                    return C(t, e), t;
                }
                p
                    ? (w = function () {
                          return t.nextTick(y);
                      })
                    : l
                    ? ((g = 0),
                      (v = new l(y)),
                      (b = document.createTextNode("")),
                      v.observe(b, { characterData: !0 }),
                      (w = function () {
                          b.data = g = ++g % 2;
                      }))
                    : f
                    ? (((m = new MessageChannel()).port1.onmessage = y),
                      (w = function () {
                          return m.port2.postMessage(0);
                      }))
                    : (w =
                          void 0 === c
                              ? (function () {
                                    try {
                                        var e = Function("return this")().require("vertx");
                                        return void 0 !== (a = e.runOnLoop || e.runOnContext)
                                            ? function () {
                                                  a(y);
                                              }
                                            : h();
                                    } catch (e) {
                                        return h();
                                    }
                                })()
                              : h());
                var T = Math.random().toString(36).substring(2);
                function S() {}
                var A = void 0,
                    j = 1,
                    O = 2,
                    R = { error: null };
                function k(e) {
                    try {
                        return e.then;
                    } catch (e) {
                        return (R.error = e), R;
                    }
                }
                function I(t, r, n) {
                    r.constructor === t.constructor && n === _ && r.constructor.resolve === x
                        ? (function (e, t) {
                              t._state === j
                                  ? E(e, t._result)
                                  : t._state === O
                                  ? N(e, t._result)
                                  : P(
                                        t,
                                        void 0,
                                        function (t) {
                                            return C(e, t);
                                        },
                                        function (t) {
                                            return N(e, t);
                                        }
                                    );
                          })(t, r)
                        : n === R
                        ? (N(t, R.error), (R.error = null))
                        : void 0 === n
                        ? E(t, r)
                        : e(n)
                        ? (function (e, t, r) {
                              s(function (e) {
                                  var n = !1,
                                      o = (function (e, t, r, n) {
                                          try {
                                              e.call(t, r, n);
                                          } catch (e) {
                                              return e;
                                          }
                                      })(
                                          r,
                                          t,
                                          function (r) {
                                              n || ((n = !0), t !== r ? C(e, r) : E(e, r));
                                          },
                                          function (t) {
                                              n || ((n = !0), N(e, t));
                                          },
                                          e._label
                                      );
                                  !n && o && ((n = !0), N(e, o));
                              }, e);
                          })(t, r, n)
                        : E(t, r);
                }
                function C(e, t) {
                    var r, n;
                    e === t ? N(e, new TypeError("You cannot resolve a promise with itself")) : ((n = typeof (r = t)), null === r || ("object" !== n && "function" !== n) ? E(e, t) : I(e, t, k(t)));
                }
                function q(e) {
                    e._onerror && e._onerror(e._result), U(e);
                }
                function E(e, t) {
                    e._state === A && ((e._result = t), (e._state = j), 0 !== e._subscribers.length && s(U, e));
                }
                function N(e, t) {
                    e._state === A && ((e._state = O), (e._result = t), s(q, e));
                }
                function P(e, t, r, n) {
                    var o = e._subscribers,
                        a = o.length;
                    (e._onerror = null), (o[a] = t), (o[a + j] = r), (o[a + O] = n), 0 === a && e._state && s(U, e);
                }
                function U(e) {
                    var t = e._subscribers,
                        r = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, o = void 0, a = e._result, i = 0; i < t.length; i += 3) (n = t[i]), (o = t[i + r]), n ? D(r, n, o, a) : o(a);
                        e._subscribers.length = 0;
                    }
                }
                function D(t, r, n, o) {
                    var a = e(n),
                        i = void 0,
                        s = void 0,
                        c = void 0,
                        u = void 0;
                    if (a) {
                        if (
                            ((i = (function (e, t) {
                                try {
                                    return e(t);
                                } catch (e) {
                                    return (R.error = e), R;
                                }
                            })(n, o)) === R
                                ? ((u = !0), (s = i.error), (i.error = null))
                                : (c = !0),
                            r === i)
                        )
                            return void N(r, new TypeError("A promises callback cannot return that same promise."));
                    } else (i = o), (c = !0);
                    r._state !== A || (a && c ? C(r, i) : u ? N(r, s) : t === j ? E(r, i) : t === O && N(r, i));
                }
                var H = 0;
                function M(e) {
                    (e[T] = H++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
                }
                var J = (function () {
                        function e(e, t) {
                            (this._instanceConstructor = e),
                                (this.promise = new e(S)),
                                this.promise[T] || M(this.promise),
                                n(t)
                                    ? ((this.length = t.length),
                                      (this._remaining = t.length),
                                      (this._result = new Array(this.length)),
                                      0 === this.length ? E(this.promise, this._result) : ((this.length = this.length || 0), this._enumerate(t), 0 === this._remaining && E(this.promise, this._result)))
                                    : N(this.promise, new Error("Array Methods must be provided an Array"));
                        }
                        return (
                            (e.prototype._enumerate = function (e) {
                                for (var t = 0; this._state === A && t < e.length; t++) this._eachEntry(e[t], t);
                            }),
                            (e.prototype._eachEntry = function (e, t) {
                                var r = this._instanceConstructor,
                                    n = r.resolve;
                                if (n === x) {
                                    var o = k(e);
                                    if (o === _ && e._state !== A) this._settledAt(e._state, t, e._result);
                                    else if ("function" != typeof o) this._remaining--, (this._result[t] = e);
                                    else if (r === F) {
                                        var a = new r(S);
                                        I(a, e, o), this._willSettleAt(a, t);
                                    } else
                                        this._willSettleAt(
                                            new r(function (t) {
                                                return t(e);
                                            }),
                                            t
                                        );
                                } else this._willSettleAt(n(e), t);
                            }),
                            (e.prototype._settledAt = function (e, t, r) {
                                var n = this.promise;
                                n._state === A && (this._remaining--, e === O ? N(n, r) : (this._result[t] = r)), 0 === this._remaining && E(n, this._result);
                            }),
                            (e.prototype._willSettleAt = function (e, t) {
                                var r = this;
                                P(
                                    e,
                                    void 0,
                                    function (e) {
                                        return r._settledAt(j, t, e);
                                    },
                                    function (e) {
                                        return r._settledAt(O, t, e);
                                    }
                                );
                            }),
                            e
                        );
                    })(),
                    F = (function () {
                        function e(t) {
                            (this[T] = H++),
                                (this._result = this._state = void 0),
                                (this._subscribers = []),
                                S !== t &&
                                    ("function" != typeof t &&
                                        (function () {
                                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                        })(),
                                    this instanceof e
                                        ? (function (e, t) {
                                              try {
                                                  t(
                                                      function (t) {
                                                          C(e, t);
                                                      },
                                                      function (t) {
                                                          N(e, t);
                                                      }
                                                  );
                                              } catch (t) {
                                                  N(e, t);
                                              }
                                          })(this, t)
                                        : (function () {
                                              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                          })());
                        }
                        return (
                            (e.prototype.catch = function (e) {
                                return this.then(null, e);
                            }),
                            (e.prototype.finally = function (e) {
                                var t = this.constructor;
                                return this.then(
                                    function (r) {
                                        return t.resolve(e()).then(function () {
                                            return r;
                                        });
                                    },
                                    function (r) {
                                        return t.resolve(e()).then(function () {
                                            throw r;
                                        });
                                    }
                                );
                            }),
                            e
                        );
                    })();
                return (
                    (F.prototype.then = _),
                    (F.all = function (e) {
                        return new J(this, e).promise;
                    }),
                    (F.race = function (e) {
                        var t = this;
                        return n(e)
                            ? new t(function (r, n) {
                                  for (var o = e.length, a = 0; a < o; a++) t.resolve(e[a]).then(r, n);
                              })
                            : new t(function (e, t) {
                                  return t(new TypeError("You must pass an array to race."));
                              });
                    }),
                    (F.resolve = x),
                    (F.reject = function (e) {
                        var t = new this(S);
                        return N(t, e), t;
                    }),
                    (F._setScheduler = function (e) {
                        i = e;
                    }),
                    (F._setAsap = function (e) {
                        s = e;
                    }),
                    (F._asap = s),
                    (F.polyfill = function () {
                        var e = void 0;
                        if (void 0 !== r) e = r;
                        else if ("undefined" != typeof self) e = self;
                        else
                            try {
                                e = Function("return this")();
                            } catch (e) {
                                throw new Error("polyfill failed because global object is unavailable in this environment");
                            }
                        var t = e.Promise;
                        if (t) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(t.resolve());
                            } catch (e) {}
                            if ("[object Promise]" === n && !t.cast) return;
                        }
                        e.Promise = F;
                    }),
                    (F.Promise = F),
                    F
                );
            }),
                (e.exports = n());
        }.call(this, r(8), r(7)));
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t) {
            /\?/.test(e) ? (e += "&") : (e += "?");
            return e + n(t);
        };
        var n = r(34);
    },
    function (e, t, r) {
        "use strict";
        var n = function (e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return "";
            }
        };
        e.exports = function (e, t, r, s) {
            return (
                (t = t || "&"),
                (r = r || "="),
                null === e && (e = void 0),
                "object" == typeof e
                    ? a(i(e), function (i) {
                          var s = encodeURIComponent(n(i)) + r;
                          return o(e[i])
                              ? a(e[i], function (e) {
                                    return s + encodeURIComponent(n(e));
                                }).join(t)
                              : s + encodeURIComponent(n(e[i]));
                      }).join(t)
                    : s
                    ? encodeURIComponent(n(s)) + r + encodeURIComponent(n(e))
                    : ""
            );
        };
        var o =
            Array.isArray ||
            function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
        function a(e, t) {
            if (e.map) return e.map(t);
            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
            return r;
        }
        var i =
            Object.keys ||
            function (e) {
                var t = [];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
            };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t, r) {
            if ("GET" !== t.method) return void r(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
            t.debug("JSONP: start");
            var a = !1,
                i = !1;
            o += 1;
            var s = document.getElementsByTagName("head")[0],
                c = document.createElement("script"),
                u = "algoliaJSONP_" + o,
                l = !1;
            (window[u] = function (e) {
                !(function () {
                    try {
                        delete window[u], delete window[u + "_loaded"];
                    } catch (e) {
                        window[u] = window[u + "_loaded"] = void 0;
                    }
                })(),
                    i ? t.debug("JSONP: Late answer, ignoring") : ((a = !0), h(), r(null, { body: e, responseText: JSON.stringify(e) }));
            }),
                (e += "&callback=" + u),
                t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
            var p = setTimeout(function () {
                t.debug("JSONP: Script timeout"), (i = !0), h(), r(new n.RequestTimeout());
            }, t.timeouts.complete);
            function f() {
                t.debug("JSONP: success"), l || i || ((l = !0), a || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), h(), r(new n.JSONPScriptFail())));
            }
            function h() {
                clearTimeout(p), (c.onload = null), (c.onreadystatechange = null), (c.onerror = null), s.removeChild(c);
            }
            (c.onreadystatechange = function () {
                ("loaded" !== this.readyState && "complete" !== this.readyState) || f();
            }),
                (c.onload = f),
                (c.onerror = function () {
                    if ((t.debug("JSONP: Script error"), l || i)) return;
                    h(), r(new n.JSONPScriptError());
                }),
                (c.async = !0),
                (c.defer = !0),
                (c.src = e),
                s.appendChild(c);
        };
        var n = r(3),
            o = 0;
    },
    function (e, t, r) {
        e.exports = function (e) {
            return function (t, o, a) {
                var i = r(2);
                ((a = (a && i(a)) || {}).hosts = a.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"]),
                    (0 !== arguments.length && "object" != typeof t && void 0 !== t) || ((t = ""), (o = ""), (a._allowEmptyCredentials = !0));
                var s = e(t, o, a),
                    c = s.initIndex("places");
                return (
                    (c.search = n("query", "/1/places/query")),
                    (c.getObject = function (e, t) {
                        return this.as._jsonRequest({ method: "GET", url: "/1/places/" + encodeURIComponent(e), hostType: "read", callback: t });
                    }),
                    c
                );
            };
        };
        var n = r(10);
    },
    function (e, t, r) {
        "use strict";
        e.exports = "3.29.0";
    },
]);
