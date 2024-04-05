"use client";

export default function Home() {

  const login = () => {
    window["FB"].login(function (response) {
      console.log("登入回调信息", response);
    });
  };
  const getStatus = () => {
    window["FB"].getLoginStatus(function (response) {
      console.log("登入状态", response);
    });
  };
  const logout = () => {
    window["FB"].logout((response) => {
      console.log("退出响应", response);
    });
  };
  return (
    <div>
      <div onClick={login}>登入</div>
      <div onClick={getStatus}>获取登入状态</div>
      <div onClick={logout}>退出</div>
    </div>
  );
}
