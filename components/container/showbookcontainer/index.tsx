import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import photo from "@/public/assets/jpg/photo.jpg";
import { BOOK_URL } from "@/utils/constants";

interface BookType {
  name: string;
  content100: string;
  content500: string;
  content1000: string;
  image: string;
  evergreen: boolean;
  latest: boolean;
  slug?: string;
  id: string;
  author_id: any;
}

const ShowBookContainer = () => {
  const [bookData, setBookData] = useState([]);

  const fetchData = async () => {
    const responsePromise = await fetch(`${BOOK_URL}`);
    try {
      await responsePromise.json().then((response) => {
        console.log(response.latestBook);
        setBookData(response);
      });
    } catch (e) {
      console.log("Hello world");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(bookData);
  return (
    <main className={styles.main_container}>
      {bookData &&
        bookData.map((book: BookType) => {
          return (
            <main className={styles.book_container} key={book.id}>
              <section className={styles.image_section}>
                <img src={photo.src} alt="book_image" />
              </section>
              <section className={styles.content_section}>
                <div>{book.name}</div>
                <div>by {book.author_id?.name}</div>
              </section>
              <section className={styles.action_section}>
                <button >update</button>
              </section>
            </main>
          );
        })}
    </main>
  );
};

export default ShowBookContainer;
