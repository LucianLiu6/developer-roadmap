import{j as e}from"./jsx-runtime.CAnB4H9Z.js";import{r as u}from"./index.qVDZzPEr.js";import{u as j}from"./use-copy-text.oZSbS9-c.js";import{u as y}from"./use-auth.BGqQ_BxX.js";import{b as w,a as v}from"./http.DleWH6fe.js";import{p as C}from"./page.BgB1PChG.js";import{S as p}from"./SelectionButton.CrUMHoKU.js";import{d as N}from"./download-image.BQ1Cfhyk.js";import{C as S}from"./copy.CXP3E7D5.js";import{u as R}from"./use-toast.CP_0jytG.js";import"./jwt.CBjnGchD.js";import"./index.DgoachrA.js";import"./classname.BR_JCrAi.js";import"./createLucideIcon.BiEhg7VK.js";import"./toast.CxFvZIRu.js";function k(r){const{selectedRoadmaps:s,setSelectedRoadmaps:i}=r,[d,n]=u.useState(),c=async()=>{const{response:t,error:l}=await w(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-get-user-all-progress`);l||!t||n(t)};u.useEffect(()=>{c().finally(()=>{C.set("")})},[]);const o=s.length<4,x=d?.filter(t=>t.resourceType==="roadmap")||[];return e.jsxs("div",{className:"flex flex-wrap gap-1",children:[x?.length===0&&e.jsx("p",{className:"text-sm italic text-gray-400",children:"No progress tracked so far."}),x?.map(t=>{const l=s.includes(t.resourceId),m=l||o;return e.jsx(p,{text:t.resourceTitle,isDisabled:!m,isSelected:l,onClick:()=>{l?i(s.filter(a=>a!==t.resourceId)):s.length<4&&i([...s,t.resourceId])}},t.resourceId)})]})}function E(){return e.jsxs("p",{className:"mt-3 rounded-md border p-2 text-sm w-full bg-yellow-100 border-yellow-400 text-yellow-900",children:["Add this badge to your"," ",e.jsx("a",{href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"GitHub profile readme."})]})}function f(r){const{step:s}=r;return e.jsx("span",{className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-white",children:s})}function b(r){const{text:s,title:i,onCopy:d}=r,{isCopied:n,copyText:c}=j();return e.jsxs("div",{className:"flex w-full flex-grow flex-col overflow-hidden rounded border border-gray-300 bg-gray-50",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-gray-300 px-3 py-2",children:[e.jsx("span",{className:"text-xs uppercase leading-none text-gray-400",children:i}),e.jsxs("button",{className:"flex items-center",onClick:()=>{c(s),d?.()},children:[n&&e.jsx("span",{className:"mr-1 text-xs leading-none text-gray-700",children:"Copied! "}),e.jsx(S,{className:"inline-block h-4 w-4"})]})]}),e.jsx("textarea",{className:"no-scrollbar block h-12 w-full overflow-x-auto whitespace-nowrap bg-gray-200/70 p-3 text-sm text-gray-900 focus:bg-gray-50 focus:outline-0",readOnly:!0,onClick:o=>{o.target.select(),c(o.target.value),d?.()},value:s})]})}function g(r){const{label:s}=r;return e.jsx("span",{className:"mb-3 flex items-center gap-2 text-sm leading-none text-gray-400",children:s})}function H(){const r=y(),s=R(),{isCopied:i,copyText:d}=j(),[n,c]=u.useState([]),[o,x]=u.useState("tall"),[t,l]=u.useState("dark"),m=async()=>{const{error:h}=await v(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-update-onboarding-config`,{id:"roadCard",status:"done"});h&&s.error(h?.message||"Something went wrong")};if(!r)return null;const a=new URL(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_APP_URL}/card/${o}/${r?.id}`);return a.searchParams.set("variant",t),n.length>0&&a.searchParams.set("roadmaps",n.join(",")),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-0 flex items-start gap-4 border-b px-0 pb-4 pt-2 sm:-mx-10 sm:px-10",children:[e.jsx(f,{step:1}),e.jsxs("div",{children:[e.jsx(g,{label:"Pick progress to show (Max. 4)"}),e.jsx("div",{className:"flex flex-wrap",children:e.jsx(k,{selectedRoadmaps:n,setSelectedRoadmaps:c})})]})]}),e.jsxs("div",{className:"mx-0 flex items-start gap-4 border-b px-0 py-4 sm:-mx-10 sm:px-10",children:[e.jsx(f,{step:2}),e.jsxs("div",{children:[e.jsx(g,{label:"Select Mode (Dark vs Light)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p,{text:"Dark",isDisabled:!1,isSelected:t==="dark",onClick:()=>{l("dark")}}),e.jsx(p,{text:"Light",isDisabled:!1,isSelected:t==="light",onClick:()=>{l("light")}})]})]})]}),e.jsxs("div",{className:"mx-0 flex items-start gap-4 border-b px-0 py-4 sm:-mx-10 sm:px-10",children:[e.jsx(f,{step:3}),e.jsxs("div",{children:[e.jsx(g,{label:"Select Version"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p,{text:"Tall",isDisabled:!1,isSelected:o==="tall",onClick:()=>{x("tall")}}),e.jsx(p,{text:"Wide",isDisabled:!1,isSelected:o==="wide",onClick:()=>{x("wide")}})]})]})]}),e.jsxs("div",{className:"mx-0 flex items-start gap-4 border-b px-0 py-4 sm:-mx-10 sm:px-10",children:[e.jsx(f,{step:4}),e.jsxs("div",{className:"flex-grow",children:[e.jsx(g,{label:"Share your #RoadCard with others"}),e.jsx("div",{className:"rounded-md border bg-gray-50 p-2 text-center",children:e.jsx("a",{href:a.toString(),target:"_blank",rel:"noopener noreferrer",className:`relative block hover:cursor-pointer ${o==="tall"?" max-w-[270px] ":" w-full "}`,children:e.jsx("img",{src:a.toString(),alt:"RoadCard"})})}),e.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[e.jsx("button",{className:"flex items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium",onClick:()=>{N({url:a.toString(),name:"road-card",scale:4}),m()},children:"Download"}),e.jsxs("button",{disabled:i,className:"flex cursor-pointer items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium disabled:bg-blue-50",onClick:()=>{d(a.toString()),m()},children:[e.jsx(S,{size:16,className:"mr-1 inline-block h-4 w-4"}),i?"Copied!":"Copy Link"]})]}),e.jsxs("div",{className:"mt-3 flex flex-col gap-3",children:[e.jsx(b,{title:"HTML",text:`<a href="https://roadmap.sh"><img src="${a}" alt="roadmap.sh"/></a>`.trim(),onCopy:()=>m()}),e.jsx(b,{title:"Markdown",text:`[![roadmap.sh](${a})](https://roadmap.sh)`.trim(),onCopy:()=>m()})]}),e.jsx(E,{})]})]})]})}export{H as RoadCardPage};
