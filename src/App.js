import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Tab from "./Components/Tab";
import "./tailwind.css";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
        >
          <Tab.Panel title="Profil">1.Tab</Tab.Panel>
          <Tab.Panel title="Hakkımda">2.Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && <div>Burasıda Ekstra Bir Alan</div> }
      </div>

      <div style={{ padding: 20 }}>
        <Button>Button örneği</Button>
        <Button variant="succes">Button örneği</Button>
        <Button variant="danger">Button örneği</Button>
        <Button variant="warning">Button örneği</Button>
      </div>
    </>
  );
}

export default App;
