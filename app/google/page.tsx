"use client";

import { useRef } from "react";

// import ErrorBoundary from "@/components/ErrorWrap";

// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
export default () => {
  const flag = useRef(false);
  const handler = () => {
    if (flag.current) {
      flag.current = true;
      return;
    }
    // 创建一个 script 元素
    var script = document.createElement("script");

    // 设置要加载的脚本的 URL
    script.src = "https://accounts.google.com/gsi/client";

    // 当脚本加载完成时的回调函数
    script.onload = function () {
      console.log("脚本已成功加载");
    };

    // 当加载脚本出错时的回调函数
    script.onerror = function () {
      console.error("加载脚本时出错");
    };

    // 将脚本元素添加到页面的头部或者其他合适的位置
    document.head.appendChild(script);
  };
  return (
    <div>
      <div onClick={handler}>google 登入2</div>
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
