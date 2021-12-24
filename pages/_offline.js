import Head from "next/head";
import HeadBlock from "../components/common/MetaComp";
import styles from "../styles/Home.module.scss";

export default function OfflinePage() {
  return (
    <div>
      <HeadBlock page_title="Offline!" />

      <main className={styles.container}>
        <h1>You are offline.</h1>
        <p>Please connect to the internet.</p>
      </main>
    </div>
  );
}
