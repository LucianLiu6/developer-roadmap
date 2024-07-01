import{j as e}from"./jsx-runtime.CAnB4H9Z.js";import{r as i}from"./index.qVDZzPEr.js";import{b as f,a as h}from"./http.DleWH6fe.js";import{p as s}from"./page.BgB1PChG.js";import{i as b}from"./jwt.CBjnGchD.js";import{s as w}from"./popup.CdCAhVM2.js";import{g as j}from"./browser.t5_cZ6DD.js";import{E as v}from"./ErrorIcon2.p7WyepRE.js";import{B as y}from"./BuildingIcon.DV3XDvVf.js";import"./index.DgoachrA.js";function B(){const{i:n}=j(),[x,c]=i.useState(!0),[l,o]=i.useState(""),[m,u]=i.useState(),d=b();async function g(a){const{response:t,error:r}=await f(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-get-invitation/${a}`);if(r||!t){o(r?.message||"Something went wrong");return}u(t)}i.useEffect(()=>{n?g(n).finally(()=>{s.set(""),c(!1)}):(c(!1),o("Missing invite ID in URL"),s.set(""))},[n]);async function p(a){s.set("Please wait..."),o("");const{response:t,error:r}=await h(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-respond-invite/${n}`,{status:a});if(r||!t){o(r?.message||"Something went wrong");return}if(a==="reject"){window.location.href="/";return}window.location.href=`/team/activity?t=${t.teamId}`}return x?null:m?e.jsxs("div",{className:"container text-center",children:[e.jsx(y,{className:"mx-auto mb-4 mt-24 w-20 h-20 opacity-20"}),e.jsx("h2",{className:"mb-1 text-2xl font-bold",children:"Join Team"}),e.jsxs("p",{className:"mb-3 text-base leading-6 text-gray-600",children:["You have been invited to join the team"," ",e.jsx("strong",{id:"team-name",children:m?.team?.name}),"."]}),!d&&e.jsx("div",{className:"mx-auto w-full duration-500 sm:max-w-md",children:e.jsx("div",{className:"flex w-full items-center gap-2",children:e.jsx("button",{onClick:()=>w(),"data-popup":"login-popup",type:"button",className:"flex-grow cursor-pointer rounded-lg bg-gray-200 px-3 py-2 text-center",children:"Login to respond"})})}),d&&e.jsxs("div",{className:"mx-auto w-full max-w-md",children:[e.jsxs("div",{className:"flex w-full items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>p("accept").finally(()=>{s.set("")}),className:"flex-grow cursor-pointer rounded-lg hover:bg-gray-300 bg-gray-200 px-3 py-2 text-center",children:"Accept"}),e.jsx("button",{type:"button",onClick:()=>p("reject").finally(()=>{s.set("")}),className:"flex-grow cursor-pointer rounded-lg bg-red-500 hover:bg-red-600 px-3 py-2 text-white disabled:opacity-40",children:"Reject"})]}),l&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:l})]})]}):e.jsxs("div",{className:"container text-center",children:[e.jsx(v,{className:"mx-auto mb-4 mt-24 w-20 opacity-20"}),e.jsx("h2",{className:"mb-1 text-2xl font-bold",children:"Error"}),e.jsx("p",{className:"mb-4 text-base leading-6 text-gray-600",children:l||"There was a problem, please try again."}),e.jsx("div",{children:e.jsx("a",{href:"/",className:"flex-grow cursor-pointer rounded-lg bg-gray-200 px-3 py-2 text-center",children:"Back to home"})})]})}export{B as RespondInviteForm};
