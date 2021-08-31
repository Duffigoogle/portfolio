import TabsTaskbarComp from "../Tabs/TabTaskbar";
import styles from "../../styles/Home.module.scss";

const TabsLayoutComp = ({ children }) => {
  return (
    <>
      <main className={styles.container}>
        <TabsTaskbarComp />
        <div>{children}</div>
      </main>
    </>
  );
};

export default TabsLayoutComp;
