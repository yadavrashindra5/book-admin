import { SyntheticEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { BOOK_URL } from "@/utils/constants";
import { data } from "@/data/side";

interface BookType {
  name: string;
  content100: string;
  content500: string;
  content1000: string;
  image: string;
  evergreen: boolean;
  latest: boolean;
  slug?: string;
}

interface BookNameIdType {
  name: string;
  id: string;
}

const UpdateBookContainer = (props: string) => {
  const [bookNameId, setBookNameId] = useState<BookNameIdType[]>([]);
  const [bookData, setBookData] = useState<BookType>({
    name: "",
    content100: "",
    content500: "",
    content1000: "",
    image: "rashindra.jpg",
    evergreen: false,
    latest: false,
    slug: "",
  });

  const fetchData = async (id: string) => {
    const responsePromise = await fetch(`${BOOK_URL}/${id}`);
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
    // fetchData();
  }, []);

  const fetchBooksWithId = async () => {
    const responsePromise = await fetch(`${BOOK_URL}/name/id`);
    try {
      await responsePromise.json().then((response) => {
        setBookNameId(response);
      });
    } catch (e) {
      console.log("Hello world");
    }
  };

  useEffect(() => {
    fetchBooksWithId();
  }, []);

  const onChangeHandler = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement && e.target.id === "name") {
      setBookData({ ...bookData, name: e.target.value });
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.id === "content100"
    ) {
      setBookData({ ...bookData, content100: e.target.value });
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.id === "content500"
    ) {
      setBookData({ ...bookData, content500: e.target.value });
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.id === "content1000"
    ) {
      setBookData({ ...bookData, content1000: e.target.value });
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.id === "evergreen"
    ) {
      setBookData({ ...bookData, evergreen: !bookData.evergreen });
    } else if (
      e.target instanceof HTMLTextAreaElement &&
      e.target.id === "latest"
    ) {
      setBookData({ ...bookData, latest: !bookData.latest });
    } else if (e.target instanceof HTMLInputElement && e.target.id === "slug") {
      const slug = e.target.value;
      slug.trim();
      const modifySlug = slug.replace(/\s/g, "-");
      console.log(modifySlug);
      setBookData({ ...bookData, slug: slug });
    }
  };
  const updateBookData = (e: SyntheticEvent) => {};
  return (
    <main className={styles.container}>
      <section className={styles.author}>
        <div className={styles.name_info}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Update Book Name"
            value={bookData.name}
            className={styles.name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className={styles.custom_select}>
          <select onChange={(e) => fetchData(e.target.value)}>
            {bookNameId.length &&
              bookNameId.map((book) => {
                return (
                  <option value={book.id} key={book?.id}>
                    {book.name}
                  </option>
                );
              })}
          </select>
        </div>
      </section>
      <section className={styles.content_container}>
        <div className={styles.content}>
          <label htmlFor="content100">
            Summary of book that contains 100 words
          </label>
          <textarea
            name="content100"
            id="content100"
            value={bookData.content100}
            onChange={(e) => onChangeHandler(e)}
          ></textarea>
        </div>
        <div className={styles.content}>
          <label htmlFor="content500">
            Summary of book that contains 500 words
          </label>
          <textarea
            name="content500"
            id="content500"
            value={bookData.content500}
            onChange={(e) => onChangeHandler(e)}
          ></textarea>
        </div>
        <div className={styles.content}>
          <label htmlFor="content1000">
            Summary of book that contains 1000 words
          </label>
          <textarea
            name="content1000"
            id="content1000"
            value={bookData.content1000}
            onChange={(e) => onChangeHandler(e)}
          ></textarea>
        </div>
      </section>
      <section className={styles.toggle_container}>
        <div>
          <input
            type="checkbox"
            name="evergreen"
            id="evergreen"
            onChange={(e) => onChangeHandler(e)}
            checked={bookData.evergreen}
          />
          <label htmlFor="evergreen">Ever Green</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="latest"
            id="latest"
            onChange={(e) => onChangeHandler(e)}
            checked={bookData.latest}
          />
          <label htmlFor="latest">Latest Book</label>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="slug"
              id="slug"
              onChange={(e) => onChangeHandler(e)}
              value={bookData.slug}
              className={styles.slug}
              placeholder="update book slug"
            />
          </div>
        </div>
        <button onClick={(e) => updateBookData(e)}>Update Book</button>
      </section>
    </main>
  );
};

export default UpdateBookContainer;
