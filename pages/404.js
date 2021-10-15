import Head from "next/head";
import HeadBlock from "../components/Meta/MetaComp";
import styles from "../styles/Home.module.scss";

export default function NotFoundPage() {
  return (
    <div>
      <HeadBlock page_title="Error!" />

      <main className={styles.container}>
        <h1>Page Not Found </h1>
      </main>
    </div>
  );
}
