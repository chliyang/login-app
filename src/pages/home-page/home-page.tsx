import React from "react";
import { logout } from "../../utils/session";

const HomePage = (props: any) => {
  const { value } = props;
  return (
    <div>
      <h1>hi</h1>
      <h2>hi</h2>
      <button onClick={() => value.history.push("/login")}>tiaozhuan</button>
      <button onClick={logout}>退出</button>
    </div>
  );
};

export default HomePage;
