/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { S as Spinner, b as httpPatch, y as setAuthToken } from './BaseLayout_CyQdLUYI.mjs';
import { E as ErrorIcon2 } from './ErrorIcon2_Bn_H4dmb.mjs';
import { g as getUrlParams } from './browser_DmlLShyb.mjs';
import { C as CheckIcon } from './CheckIcon_B3c1RSNy.mjs';

function TriggerVerifyEmail() {
  const { code } = getUrlParams();
  const [status, setStatus] = useState(
    "loading"
  );
  const [error, setError] = useState("");
  const triggerVerify = (code2) => {
    setStatus("loading");
    httpPatch(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-verify-new-email/${code2}`,
      {}
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setAuthToken(response.token);
      setStatus("success");
    }).catch((err) => {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    });
  };
  useEffect(() => {
    if (!code) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
      return;
    }
    triggerVerify(code);
  }, [code]);
  const isLoading = status === "loading";
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: [
      /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "h-16 w-16 opacity-100" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Email Update Successful" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base", children: "Your email has been changed successfully. Happy learning!" })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md text-center", children: [
    isLoading && /* @__PURE__ */ jsx(Spinner, { className: "mx-auto h-16 w-16" }),
    error && /* @__PURE__ */ jsx(ErrorIcon2, { className: "mx-auto h-16 w-16" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Verifying your new Email" }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm sm:text-base", children: [
      isLoading && /* @__PURE__ */ jsx("p", { children: "Please wait while we verify your new Email.." }),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-700", children: error })
    ] })
  ] }) });
}

const $$VerifyEmail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Verify email", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-16"> ${renderComponent($$result2, "TriggerVerifyEmail", TriggerVerifyEmail, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/AuthenticationFlow/TriggerVerifyEmail", "client:component-export": "TriggerVerifyEmail" })} </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/verify-email.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/verify-email.astro";
const $$url = "/verify-email";

export { $$VerifyEmail as default, $$file as file, $$url as url };
