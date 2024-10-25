"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolpadLogo = ToolpadLogo;
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _g, _path, _g2, _path2, _g3;
/**
 * @ignore - internal component.
 */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ToolpadLogo({
  size = 40
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [_g || (_g = /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      mask: "url(#a)",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M22.74 27.73v-7.6l6.64-3.79v7.6l-6.64 3.79Z",
        fill: "#007FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M16.1 23.93v-7.59l6.64 3.8v7.59l-6.65-3.8Z",
        fill: "#39F"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "m16.1 16.34 6.64-3.8 6.64 3.8-6.64 3.8-6.65-3.8Z",
        fill: "#A5D8FF"
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("mask", {
      id: "b",
      style: {
        maskType: 'alpha'
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "17",
      width: "14",
      height: "15",
      children: _path || (_path = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M8.5 22.3c0-1.05.56-2 1.46-2.53l3.75-2.14c.89-.5 1.98-.5 2.87 0l3.75 2.14a2.9 2.9 0 0 1 1.46 2.52v4.23c0 1.04-.56 2-1.46 2.52l-3.75 2.14c-.89.5-1.98.5-2.87 0l-3.75-2.14a2.9 2.9 0 0 1-1.46-2.52v-4.23Z",
        fill: "#D7DCE1"
      }))
    }), _g2 || (_g2 = /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      mask: "url(#b)",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M15.14 32v-7.6l6.65-3.8v7.6L15.14 32Z",
        fill: "#007FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M8.5 28.2v-7.6l6.64 3.8V32L8.5 28.2Z",
        fill: "#39F"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "m8.5 20.6 6.64-3.79 6.65 3.8-6.65 3.8-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("mask", {
      id: "c",
      style: {
        maskType: 'alpha'
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "4",
      width: "22",
      height: "20",
      children: _path2 || (_path2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M24.17 4.82a2.9 2.9 0 0 0-2.87 0L9.97 11.22a2.9 2.9 0 0 0-1.47 2.53v4.22c0 1.04.56 2 1.46 2.52l3.75 2.14c.89.5 1.98.5 2.87 0l11.33-6.42a2.9 2.9 0 0 0 1.47-2.52V9.48c0-1.04-.56-2-1.46-2.52l-3.75-2.14Z",
        fill: "#D7DCE1"
      }))
    }), _g3 || (_g3 = /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
      mask: "url(#c)",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M15.14 23.46v-7.6L29.38 7.8v7.59l-14.24 8.07Z",
        fill: "#007FFF"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M8.5 19.66v-7.6l6.64 3.8v7.6l-6.64-3.8Z",
        fill: "#39F"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M8.5 12.07 22.74 4l6.64 3.8-14.24 8.06-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    }))]
  });
}