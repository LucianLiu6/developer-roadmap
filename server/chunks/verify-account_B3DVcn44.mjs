/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'js-cookie';
import { S as Spinner, f as httpPost, y as setAuthToken } from './BaseLayout_CyQdLUYI.mjs';
import { E as ErrorIcon2 } from './ErrorIcon2_Bn_H4dmb.mjs';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

function TriggerVerifyAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const triggerVerify = (code) => {
    setIsLoading(true);
    httpPost(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-verify-account`,
      {
        code
      }
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong. Please try again.");
        setIsLoading(false);
        return;
      }
      setAuthToken(response.token);
      window.location.href = "/";
    }).catch((err) => {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    });
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (!code) {
      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
      return;
    }
    triggerVerify(code);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md text-center", children: [
    isLoading && /* @__PURE__ */ jsx(Spinner, { className: "mx-auto h-16 w-16" }),
    error && /* @__PURE__ */ jsx(ErrorIcon2, { className: "mx-auto h-16 w-16" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Verifying your account" }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm sm:text-base", children: [
      isLoading && /* @__PURE__ */ jsx("p", { children: "Please wait while we verify your account.." }),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-700", children: error })
    ] })
  ] }) });
}

const $$VerifyAccount = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Verify account", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-16"> ${renderComponent($$result2, "TriggerVerifyAccount", TriggerVerifyAccount, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/AuthenticationFlow/TriggerVerifyAccount", "client:component-export": "TriggerVerifyAccount" })} </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/verify-account.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/verify-account.astro";
const $$url = "/verify-account";

export { $$VerifyAccount as default, $$file as file, $$url as url };
