import Header from "../header";
import SideBar from "../sidebar";
import styles from "./style.module.scss";

const Layout = ({ children }: any) => {
  console.log(children);
  return (
    <div>
      <Header />
      <section className={styles.middleSection}>
        <SideBar />
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
