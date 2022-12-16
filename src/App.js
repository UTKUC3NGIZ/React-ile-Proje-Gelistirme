import Test from "./Test";

import styles from "./App.module.css";

import { Title } from "./Components";
function App() {
  return (
    <div className={styles.App}>
      <Title>Deneme</Title>
      <Title theme="dark">Deneme</Title>
      <Test />
    </div>
  );
}

export default App;
