import { SyntheticEvent, useState } from "react";
import styles from "./styles.module.scss";

interface AuthorType {
  name: string;
  image: string;
}

const AddAuthorContainer = () => {
  const [author, setAuthor] = useState({
    name: "",
    image: "author.jpg",
  });

  const saveData = (e: SyntheticEvent) => {
    fetch("http://localhost:9090/author", {
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
      setAuthor({ ...author, name: e.target.value });
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
            value={author.name}
            className={styles.name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </section>
      <section className={styles.toggle_container}>
        <button onClick={() => saveData()}>Save Author</button>
      </section>
    </main>
  );
};

export default AddAuthorContainer;
