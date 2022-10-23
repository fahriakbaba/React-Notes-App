import { BsPlusSquare } from "react-icons/bs";
import styles from "./Sidebar.module.css";
import { RiDeleteBin3Line } from "react-icons/ri";

function Sidebar({
  addNote,
  notes,
  deleteNote,
  activeNoteId,
  setActiveNoteId,
}) {
  const deleteClick = (id) => {
    deleteNote(id);
    console.log("delete click");
  };

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <h1>notes</h1>
        <BsPlusSquare className={styles.icon} onClick={() => addNote()} />
      </header>
      <ul className={styles.content}>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => setActiveNoteId(note.id)}
            style={{ backgroundColor: activeNoteId === note.id && "#E5EBB2" }}
          >
            <div className={styles.list}>
              <h4>{note.title}</h4>
              <button
                className={styles.btn}
                onClick={() => deleteClick(note.id)}
              >
                <RiDeleteBin3Line className={styles.deleteIcon} />
              </button>
            </div>
            <p className={styles.context}>{note.body.slice(0, 50)}...</p>
            <p className={styles.footer}>history</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

// <li>
//           <div className={styles.list}>
//             <h5>title</h5>
//             <button className={styles.btn} onClick={deleteClick}>
//               <RiDeleteBin3Line className={styles.deleteIcon} />
//             </button>
//           </div>
//           <p className={styles.context}>you can add</p>
//           <p className={styles.footer}>history</p>
//         </li>
