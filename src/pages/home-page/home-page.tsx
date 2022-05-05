import { Button } from "antd";
import React from "react";
import { logout } from "../../utils/session";
import styles from "./home-page.module.scss";

const HomePage = (props: any) => {
  const { history } = props;

  const handleClick = () => {
    logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>The Home Page</header>
      <Button
        className={styles.bottom}
        onClick={handleClick}
        size="large"
        type="primary"
        block
      >
        退出登录
      </Button>
    </div>
  );
};

export default HomePage;
