import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper_header}>
      <div className={styles.header}>
        <h1>Моя веб-сторінка</h1>
        <h2>Slogan</h2>
      </div>
      <div className={styles.admin}>
        <Link to="/admin">
          <button>Admin Page</button>
        </Link>
      </div>
    </div>
  );
}
