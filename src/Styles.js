import Test from "./Test";

import styles from "./App.module.css";

import { Title } from "./Components";

// import Bootstrap from "./Bootstrap";

// import "./tailwind.css";

function Styles() {
  return (
    <div className={styles.App}>
      <Title>Deneme</Title>
      <Title theme="dark">Deneme</Title>
      <Test />
      {/* <Bootstrap /> */}
      {/* <Tailwind /> */}
      <p className="env">
        <span>test</span>
      </p>
    </div>
  );
}

export default Styles;
