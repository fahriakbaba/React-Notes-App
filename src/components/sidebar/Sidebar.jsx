import { BsPlusSquare } from 'react-icons/bs';
import styles from "./Sidebar.module.css";

function Sidebar() {
    return(
        <aside className={styles.container}>
            <header className={styles.header}>
                <h1>notes</h1>
                <BsPlusSquare className={styles.icon} />
            </header>
        </aside>
    )
}

export default Sidebar;