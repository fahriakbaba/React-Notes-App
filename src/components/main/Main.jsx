import styles from "./Main.module.css";
import ReactMarkdown from "react-markdown";


function Main({ currentNote, updateNote }) {
  console.log(currentNote);

  const handleChange = (name, value) => {
    updateNote({
      ...currentNote,
      [name]: value,
    });
  };

  if (!currentNote) {
    return <h3 className={styles.info}>No Active Note</h3>;
  }

  return (
    <main className={styles.container}>
      <section className={styles.form}>
        <input
          className={styles.text}
          placeholder="Note Title"
          type="text"
          value={currentNote?.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <textarea
          className={styles.textarea}
          cols="30"
          rows="18"
          placeholder="Write your note here..."
          value={currentNote?.body}
          onChange={(e) => handleChange("body", e.target.value)}
        />
      </section>
      <section className={styles.markdownStyle}>
        <h3>{currentNote.title}</h3>
        <ReactMarkdown >
          {currentNote?.body}
        </ReactMarkdown>
      </section>
    </main>
  );
}

export default Main;
