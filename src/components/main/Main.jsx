import styles from "./Main.module.css";

function Main({ currentNote, updateNote }) {
  console.log(currentNote);

  const handleChange = (name, value) => {
    updateNote({
      ...currentNote,
      [name]: value
    })
  };

  return (
    <main className={styles.container}>
      <section>
        <input
          className="title"
          type="text"
          value={currentNote?.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          value={currentNote?.body}
          onChange={(e) => handleChange("body", e.target.value)}
        />
      </section>
    </main>
  );
}

export default Main;
