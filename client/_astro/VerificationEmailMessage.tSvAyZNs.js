import{j as e}from"./jsx-runtime.CAnB4H9Z.js";import{r as l}from"./index.qVDZzPEr.js";import{h as f}from"./http.DleWH6fe.js";import"./jwt.CBjnGchD.js";function x(s){const{className:t}=s;return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",className:t,children:[e.jsx("path",{fill:"#f79219",d:"M222.58,114.782c0-8.69-3.979-16.901-10.8-22.286l-69.526-54.889c-8.357-6.598-20.15-6.598-28.508,0 L44.22,92.496c-6.82,5.385-10.8,13.596-10.8,22.286v12.732H222.58V114.782z"}),e.jsx("path",{fill:"#ffa91a",d:"M213.336,223.341H42.664c-5.105,0-9.244-4.138-9.244-9.244V113.116c0-5.105,4.138-9.244,9.244-9.244 h170.672c5.105,0,9.244,4.139,9.244,9.244v100.981C222.58,219.203,218.441,223.341,213.336,223.341z"}),e.jsx("path",{fill:"#f79219",d:"M213.336,103.872h-0.756v100.225c0,5.105-4.138,9.244-9.244,9.244H33.42v0.756 c0,5.105,4.138,9.244,9.244,9.244h170.672c5.105,0,9.244-4.138,9.244-9.244V113.116 C222.58,108.011,218.441,103.872,213.336,103.872z"}),e.jsx("path",{fill:"#ef7816",d:"M213.336,103.872H42.664c-4.488,0-8.229,3.199-9.067,7.441l79.417,62.697 c8.787,6.937,21.186,6.937,29.973,0l79.417-62.698C221.564,107.071,217.824,103.872,213.336,103.872z"}),e.jsx("path",{fill:"#f1f2f2",d:"M203.33,73.49v52.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0l-60.34-47.64V73.49 c0-4.418,3.582-8,8-8h134.66C199.748,65.49,203.33,69.072,203.33,73.49z"}),e.jsx("g",{children:e.jsx("path",{fill:"#fff",d:"M58.67,125.46c-1.101,0-2-0.9-2-2V73.49c0-2.2,1.8-4,4-4h106.89c1.101,0,1.99,0.9,1.99,2s-0.89,2-1.99,2 H60.67v49.97C60.67,124.56,59.77,125.46,58.67,125.46z M175.55,73.49c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.11,0,2,0.9,2,2 S176.66,73.49,175.55,73.49z"})}),e.jsx("g",{children:e.jsx("path",{fill:"#e6e7e8",d:"M195.33,65.49h-2v50.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0l-50.34-39.745v2.105l60.34,47.64 c8.789,6.939,21.191,6.939,29.98,0l60.34-47.64V73.49C203.33,69.072,199.748,65.49,195.33,65.49z"})}),e.jsx("g",{children:e.jsx("path",{fill:"#d1d3d4",d:"M197.9,65.92c0.274,0.808,0.43,1.67,0.43,2.57v52.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0 l-55.34-43.692v1.052l60.34,47.64c8.789,6.939,21.191,6.939,29.98,0l60.34-47.64V73.49 C203.33,69.972,201.056,66.991,197.9,65.92z"})}),e.jsxs("g",{children:[e.jsx("path",{fill:"#d1d3d4",d:"M109.036,99.997H80.422c-1.431,0-2.591-1.16-2.591-2.591v0c0-1.431,1.16-2.591,2.591-2.591h28.614 c1.431,0,2.591,1.16,2.591,2.591v0C111.627,98.836,110.467,99.997,109.036,99.997z"}),e.jsx("path",{fill:"#d1d3d4",d:"M175.578,124.03H80.422c-1.431,0-2.591-1.16-2.591-2.591v0c0-1.431,1.16-2.591,2.591-2.591h95.156 c1.431,0,2.591,1.16,2.591,2.591v0C178.169,122.87,177.009,124.03,175.578,124.03z"}),e.jsx("path",{fill:"#d1d3d4",d:"M175.578,138.881H80.422c-1.431,0-2.591-1.16-2.591-2.591l0,0c0-1.431,1.16-2.591,2.591-2.591h95.156 c1.431,0,2.591,1.16,2.591,2.591l0,0C178.169,137.721,177.009,138.881,175.578,138.881z"}),e.jsx("polygon",{fill:"#d1d3d4",points:"156.425,163.403 99.575,163.403 106.139,168.585 149.861,168.585"})]}),e.jsx("g",{children:e.jsx("polygon",{fill:"#d1d3d4",points:"175.236,148.551 80.764,148.551 87.328,153.733 168.672,153.733"})})]})}function g(){const[s,t]=l.useState(".."),[a,c]=l.useState(""),[n,r]=l.useState(!1),[o,i]=l.useState(!1);l.useEffect(()=>{const d=new URLSearchParams(window.location.search);t(d.get("email"))},[]);const m=()=>{f(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-send-verification-email`,{email:s}).then(({response:d,error:h})=>{if(h){i(!1),c(h?.message||"Something went wrong."),r(!1);return}i(!0)}).catch(()=>{i(!1),r(!1),c("Something went wrong. Please try again later.")})};return e.jsxs("div",{className:"mx-auto max-w-md text-center",children:[e.jsx(x,{className:"mx-auto mb-4 h-20 w-40 sm:h-40"}),e.jsx("h2",{className:"my-2 text-center text-xl font-semibold sm:my-5 sm:text-2xl",children:"Verify your email address"}),e.jsxs("div",{className:"text-sm sm:text-base",children:[e.jsxs("p",{children:["We have sent you an email at"," ",e.jsx("span",{className:"font-bold",children:s}),". Please click the link to verify your account. This link will expire shortly, so please verify soon!"]}),e.jsx("hr",{className:"my-4"}),!o&&e.jsxs(e.Fragment,{children:[n&&e.jsx("p",{className:"text-gray-400",children:"Sending the email .."}),!n&&!a&&e.jsxs("p",{children:["Please make sure to check your spam folder. If you still don't have the email click to"," ",e.jsx("button",{disabled:!s,className:"inline text-blue-700",onClick:m,children:"resend verification email."})]}),a&&e.jsx("p",{className:"text-red-700",children:a})]}),o&&e.jsx("p",{className:"text-green-700",children:"Verification email has been sent!"})]})]})}export{g as VerificationEmailMessage};
