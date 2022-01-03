import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Casali.Dev | Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Seja bem vindo!</h1>
        <h2>Essa página ainda está em construção!</h2>
        <p>
          Mas não esquenta, aqui tem dois joguinhos bem simples mas feitos com
          muito carinho
          <br /> para você aproveitar enquanto ela não está pronta.
        </p>

        <div className={styles.games}>
          <div className={styles.gameInfo}>
            <h2>Button Game</h2>
            <a href="https://casali-button-game.vercel.app/" target="_blank">
              <img src="images/button-game-image.png" alt="Button Game" />
            </a>
          </div>
          <div className={styles.gameInfo}>
            <h2>Space Code (WIP)</h2>
            <a href="https://space-code.vercel.app/" target="_blank">
              <img
                src="images/space-code-wip-image.png"
                alt="Space Code (WIP)"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
