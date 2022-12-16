import Test from "./Test";

import styles from "./App.module.css";

import { Title } from "./Components";

// import Bootstrap from "./Bootstrap";

import "./tailwind.css";

import Tailwind from "./Tailwind";

function App() {
  return (
    <div className={styles.App}>
      <Title>Deneme</Title>
      <Title theme="dark">Deneme</Title>
      <Test />
      {/* <Bootstrap /> */}
      <Tailwind />
    </div>
  );
}

export default App;
