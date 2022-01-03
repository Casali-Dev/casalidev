import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img id={styles.logo} src="logo.svg" alt="<Casali.Dev/>" />
        <nav>
          <a>Sobre mim</a>
          <a>Projetos</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  );
}
