(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        42: function (e, n, t) {
            "use strict";
            t.r(n),
                t.d(n, "detailsPolyfill", function () {
                    return i;
                });
            var o = document.body,
                i = function (e) {
                    (function () {
                        var e = document.createElement("details");
                        if (!("open" in e)) return !1;
                        (e.innerHTML = "<summary>a</summary>b"), o.appendChild(e);
                        var n = e.offsetHeight;
                        e.open = !0;
                        var t = n != e.offsetHeight;
                        return o.removeChild(e), t;
                    })() ||
                        (o.classList.add("no-details"),
                        e.forEach(function (e) {
                            e.querySelector("summary").addEventListener("click", function () {
                                e.getAttribute("open") ? ((e.open = !1), e.removeAttribute("open")) : ((e.open = !0), e.setAttribute("open", "open"));
                            });
                        }));
                };
        },
    },
]);
