/* empty css                             */
import { l as createComponent, m as renderTemplate, p as renderComponent, n as maybeRenderHead } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { f as httpPost, y as setAuthToken } from './BaseLayout_CyQdLUYI.mjs';
import 'js-cookie';
import { $ as $$AccountLayout } from './AccountLayout_B_1T_z4s.mjs';

function ResetPasswordForm() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code2 = urlParams.get("code");
    if (!code2) {
      window.location.href = "/login";
    } else {
      setCode(code2);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== passwordConfirm) {
      setIsLoading(false);
      setError("Passwords do not match.");
      return;
    }
    const { response, error: error2 } = await httpPost(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-reset-forgotten-password`,
      {
        newPassword: password,
        confirmPassword: passwordConfirm,
        code
      }
    );
    if (error2?.message) {
      setIsLoading(false);
      setError(error2.message);
      return;
    }
    if (!response?.token) {
      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
      return;
    }
    response.token;
    setAuthToken(response.token);
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxs("form", { className: "mx-auto w-full", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        className: "mb-2 mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        required: true,
        minLength: 6,
        placeholder: "New Password",
        value: password,
        onInput: (e) => setPassword(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        className: "mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        required: true,
        minLength: 6,
        placeholder: "Confirm New Password",
        value: passwordConfirm,
        onInput: (e) => setPasswordConfirm(e.target.value)
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-red-100 p-2 text-red-700", children: error }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading,
        className: "mt-2 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
        children: isLoading ? "Please wait..." : "Reset Password"
      }
    )
  ] });
}

const $$ResetPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Reset Password", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
Reset Password
</h1> <p class="mb-3 text-base leading-6 text-gray-600">
Enter and confirm your new password below.
</p> </div> ${renderComponent($$result2, "ResetPasswordForm", ResetPasswordForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/AuthenticationFlow/ResetPasswordForm", "client:component-export": "ResetPasswordForm" })} </div> </div> ` })}`;
}, "/workspaces/developer-roadmap/src/pages/reset-password.astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/reset-password.astro";
const $$url = "/reset-password";

export { $$ResetPassword as default, $$file as file, $$url as url };
