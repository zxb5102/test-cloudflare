"use client";

import { useEffect } from "react";

export default function Home() {
  const handler = () => {
    window['FB'].getLoginStatus(function (response) {
      console.log(response);
      // window.statusChangeCallback(response);
    });
  };
  useEffect(()=>{
  },[]);
  return (
    <div>
      <div onClick={handler}>login</div>
    </div>
  );
}
