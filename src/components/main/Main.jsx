import styles from "./Main.module.css";

function Main({ currentNote, updateNote }) {
  console.log(currentNote);

  const handleChange = (name, value) => {
    updateNote({
      ...currentNote,
      [name]: value
    })
  };

  if (!currentNote) {
    return <h3 className={styles.info}>No Active Note</h3>
  }

  return (
    <main className={styles.container}>
      <section>
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
          rows="10"
          placeholder="Write your note here..."
          value={currentNote?.body}
          onChange={(e) => handleChange("body", e.target.value)}
        />
      </section>
    </main>
  );
}

export default Main;
