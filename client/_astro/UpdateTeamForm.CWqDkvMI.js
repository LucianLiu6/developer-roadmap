import{j as e}from"./jsx-runtime.CAnB4H9Z.js";import{r as s}from"./index.qVDZzPEr.js";import{c as A,d as _,b as F}from"./http.DleWH6fe.js";import{S as O}from"./Spinner.xsriOokz.js";import{U as $}from"./UploadProfilePicture.CYdRfeyx.js";import{p as z}from"./page.BgB1PChG.js";import{u as R}from"./use-team-id.C2iCuhZl.js";import{u as B}from"./use-outside-click.DwmohMvh.js";import{u as H}from"./use-keydown.DHXzDwpw.js";import{u as D}from"./use-toast.CP_0jytG.js";import{$ as M}from"./team.BdQJIqcX.js";import{u as V}from"./index.BVW7W7Ao.js";import"./jwt.CBjnGchD.js";import"./index.DgoachrA.js";import"./toast.CxFvZIRu.js";import"./index.BRGkBvr2.js";function q(g){const{onClose:r}=g,w=D(),m=s.useRef(null),n=s.useRef(null),[d,o]=s.useState(!1),[u,i]=s.useState(""),[p,f]=s.useState(""),{teamId:h}=R();B(m,()=>{r()}),H("Escape",()=>{r()}),s.useEffect(()=>{n.current?.focus()},[]);const b=async c=>{if(c.preventDefault(),o(!0),i(""),p.toUpperCase()!=="DELETE"){i("Verification text does not match"),o(!1);return}const{response:S,error:a}=await A(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-delete-team/${h}`);if(a||!S){o(!1),i(a?.message||"Something went wrong");return}w.success("Team deleted successfully"),window.location.href="/account"},y=()=>{o(!1),i(""),f(""),r()};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e.jsx("div",{className:"relative h-full w-full max-w-md p-4 md:h-auto",children:e.jsxs("div",{ref:m,className:"popup-body relative rounded-lg bg-white p-4 shadow",children:[e.jsx("h2",{className:"text-2xl font-semibold text-black",children:"Delete Team"}),e.jsx("p",{className:"text-gray-500",children:"This will permanently delete your team and all associated data."}),e.jsx("p",{className:"-mb-2 mt-3 text-base font-medium text-black",children:'Please type "delete" to confirm.'}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"my-4",children:[e.jsx("input",{ref:n,type:"text",name:"delete-account",id:"delete-account",className:"mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:border-gray-400",placeholder:'Type "delete" to confirm',required:!0,autoFocus:!0,value:p,onInput:c=>f(c.target.value)}),u&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:u})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:d,onClick:y,className:"flex-grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",children:"Cancel"}),e.jsx("button",{type:"submit",disabled:d||p.toUpperCase()!=="DELETE",className:"flex-grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",children:d?"Please wait ..":"Confirm"})]})]})]})})})})}function ie(){const[g,r]=s.useState(!1),[w,m]=s.useState(!1),n=V(M),d=D(),[o,u]=s.useState(""),[i,p]=s.useState(""),[f,h]=s.useState(""),[b,y]=s.useState(""),[c,S]=s.useState(""),[a,N]=s.useState(""),[E,k]=s.useState(""),[v,I]=s.useState(!1),U=["0-1","2-10","11-50","51-200","201-500","501-1000","1000+"],[l,L]=s.useState(!1),{teamId:x}=R();s.useEffect(()=>{L(!n)},[n]);const C=async t=>{if(t.preventDefault(),r(!0),!o||!a){r(!1);return}const{response:j,error:P}=await _(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-update-team/${x}`,{name:o,website:f,type:a,gitHubUrl:c||void 0,personalProgressOnly:v,...a==="company"&&{teamSize:E,linkedInUrl:b||void 0}});if(P){r(!1),d.error(P.message||"Something went wrong");return}j&&(await T(),r(!1),d.success("Team updated successfully"))};async function T(){const{response:t,error:j}=await F(`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_API_URL}/v1-get-team/${x}`);if(j||!t){console.log(j);return}u(t.name),p(t.avatar||""),h(t?.links?.website||""),y(t?.links?.linkedIn||""),S(t?.links?.github||""),N(t.type),I(t.personalProgressOnly??!1),t.teamSize&&k(t.teamSize)}return s.useEffect(()=>{x&&T().finally(()=>{z.set("")})},[x]),e.jsxs("div",{children:[e.jsx($,{isDisabled:l,type:"logo",avatarUrl:i?`${{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://roadmap.sh/",ASSETS_PREFIX:void 0}.PUBLIC_AVATAR_BASE_URL}/${i}`:"/images/default-avatar.png",teamId:x}),e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"roadmap.sh",disabled:l,required:!0,value:o,onInput:t=>u(t.target.value)})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:`text-sm leading-none text-slate-500 ${a==="company"?'after:content-["*"]':""}`,children:"Website"}),e.jsx("input",{required:a==="company",type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:l,value:f,onInput:t=>h(t.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"linkedIn",className:"text-sm leading-none text-slate-500",children:"LinkedIn URL"}),e.jsx("input",{type:"text",name:"linkedIn",id:"linkedIn",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://linkedin.com/company/roadmapsh",disabled:l,value:b,onInput:t=>y(t.target.value)})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"gitHub",className:"text-sm leading-none text-slate-500",children:"GitHub URL"}),e.jsx("input",{type:"text",name:"gitHub",id:"gitHub",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:l,value:c,onInput:t=>S(t.target.value)})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"type",className:'text-sm leading-none text-slate-500  after:text-red-400 after:content-["*"]',children:"Type"}),e.jsxs("select",{name:"type",id:"type",className:"mt-2 block h-[42px] w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",disabled:l,value:a||"",onChange:t=>N(t.target.value),children:[e.jsx("option",{value:"",children:"Select type"}),e.jsx("option",{value:"company",children:"Company"}),e.jsx("option",{value:"study_group",children:"Study Group"})]})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Team size"}),e.jsxs("select",{name:"team-size",id:"team-size",className:"mt-2 block h-[42px] w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:a==="company",disabled:l,value:E,onChange:t=>k(t.target.value),children:[e.jsx("option",{value:"",selected:!0,children:"Select team size"}),U.map(t=>e.jsxs("option",{value:t,children:[t," people"]}))]})]}),e.jsx("div",{className:"mt-4 flex h-[42px] w-full items-center rounded-lg border border-gray-300 px-3 py-2 shadow-sm",children:e.jsxs("label",{htmlFor:"personal-progress-only",className:"flex items-center gap-2 text-sm leading-none text-slate-500",children:[e.jsx("input",{type:"checkbox",name:"personal-progress-only",id:"personal-progress-only",disabled:l,checked:v,onChange:t=>I(t.target.checked)}),e.jsx("span",{children:"Members can only see their personal progress"})]})}),v&&e.jsx("p",{className:"mt-2 rounded-lg border border-orange-300 bg-orange-50 p-2 text-sm text-orange-700",children:"Only admins and managers will be able to see the progress of members"}),e.jsx("div",{className:"mt-4 flex w-full flex-col",children:e.jsx("button",{type:"submit",className:"inline-flex h-11 w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",disabled:l||g,children:g?e.jsx(O,{}):"Update"})})]}),!n&&e.jsx("p",{className:"mt-2 rounded-lg border border-red-300 bg-red-50 p-2 text-sm text-red-700",children:"Only team admins can update team information."}),n&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"my-8"}),w&&e.jsx(q,{onClose:()=>{m(!1)}}),e.jsx("h2",{className:"text-xl font-bold sm:text-2xl",children:"Delete Team"}),e.jsx("p",{className:"mt-2 text-gray-400",children:"Permanently delete this team and all of its resources."}),e.jsx("button",{onClick:()=>m(!0),"data-popup":"delete-team-popup",className:"font-regular mt-4 w-full rounded-lg bg-red-600 py-2 text-base text-white outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",children:"Delete Team"})]})]})}export{ie as UpdateTeamForm};
