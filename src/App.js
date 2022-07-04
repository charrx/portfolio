import styles from "./App.module.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>I am the boss</h1>
      <Header></Header>
    </div>
  );
}

export default App;
