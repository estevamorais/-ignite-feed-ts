import styles from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQGorDvGyS7Nvw/profile-displaybackgroundimage-shrink_350_1400/0/1669474338662?e=1678924800&v=beta&t=DYaBBpPLj5fRNIeekWWiKjfIwY0zejuipI8feQ6ByPg"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/33493699?v=4" />
        <strong>Estevam Morais</strong>
        <span>Web Developer</span>
      </div>
      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
};
