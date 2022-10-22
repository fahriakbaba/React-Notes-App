import { BsPlusSquare } from 'react-icons/bs';
import styles from "./Sidebar.module.css";
import { RiDeleteBin3Line } from 'react-icons/ri';

function Sidebar( {addNote} ) {
    const deleteClick = () => {
        console.log("delete click");
    }


    return(
        <aside className={styles.container}>
            <header className={styles.header}>
                <h1>notes</h1>
                <BsPlusSquare className={styles.icon} onClick={() => addNote()} />
            </header>
            <ul className={styles.content}>
            <li> 
                <div className={styles.header}>
                    <h5>title</h5>
                    <button className={styles.btn} onClick={deleteClick} >
                        <RiDeleteBin3Line className={styles.deleteIcon} />
                    </button>
                </div>
                <p className={styles.context}>
                    you can add
                </p>
                <p className={styles.footer}>
                    history
                </p>
            </li>
            </ul>
        </aside>
    )
}

export default Sidebar;