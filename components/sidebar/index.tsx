import { useRouter } from "next/router";
import HomeIcon from "../../public/assets/svg/home.svg";
import styles from "./style.module.scss";

const SideBar = () => {
  const router = useRouter();
  return (
    <main className={styles.container}>
      <div
        className={styles.nav_card_container}
        onClick={() => router.push("/addbook")}
      >
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Add book</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/showbook")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Show Book</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/updatebook")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Update Book</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/addauthor")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Add Author</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/showauthor")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Show Author</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/updateauthor")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Update Author</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/addcategories")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Add Categories</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/showcategories")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Show Categories</div>
        </div>
      </div>

      <div className={styles.nav_card_container} onClick={() => router.push("/updatecategories")}>
        <div className={styles.nav_card}>
          <HomeIcon />
          <div>Update Categories</div>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
