"use client";

// import ErrorBoundary from "@/components/ErrorWrap";

// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
export default () => {
  return (
    <div>
      <div>google 登入2</div>
      <div
        id="g_id_onload"
        data-client_id="182460454773-57gavjd9r4neebg4io9f6e0rm4715tsd.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="google_cbk"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};
