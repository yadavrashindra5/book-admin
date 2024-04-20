import { SyntheticEvent, useState } from "react";
// import styles from "./styles.module.scss";
import styles from './style.module.scss';

interface CategoryType {
  title: string;
  image: string;
}

const AddCategoryContainer = () => {
  const [author, setAuthor] = useState({
    title: "",
    image: "author.jpg",
  });

  const saveData = (e: SyntheticEvent) => {
    fetch("http://localhost:9090/category", {
      method: "POST",
      body: JSON.stringify(author),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement && e.target.id === "name") {
      setAuthor({ ...author, title: e.target.value });
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.author}>
        <div className={styles.name_info}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Book Name"
            value={author.title}
            className={styles.name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </section>
      <section className={styles.toggle_container}>
        <button onClick={() => saveData()}>Save Category</button>
      </section>
    </main>
  );
};

export default AddCategoryContainer;
