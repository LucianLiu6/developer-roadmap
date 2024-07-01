import { jsxs, jsx } from 'react/jsx-runtime';

function ErrorIcon2(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className,
      children: [
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "wRKXFJsqHCxLE9yyOYHkza",
            x1: "9.858",
            x2: "38.142",
            y1: "9.858",
            y2: "38.142",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#f44f5a" }),
              /* @__PURE__ */ jsx("stop", { offset: ".443", stopColor: "#ee3d4a" }),
              /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#e52030" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#wRKXFJsqHCxLE9yyOYHkza)",
            d: "M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z",
            opacity: ".05"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z",
            opacity: ".07"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"
          }
        )
      ]
    }
  );
}

export { ErrorIcon2 as E };
