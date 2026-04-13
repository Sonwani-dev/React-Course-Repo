
import { CORE_CONCEPTS } from "./data.js"
import Header from "./components/Header.jsx"
import Coreconcepts from "./components/core-concepts" 
import TabButton from "./components/tab-button.jsx";
import {useState} from "react"
import { EXAMPLES } from "./data.js"; 


function App() {
  let [selectedTopic, setSelectedTopic] = useState("initial");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    if (selectedButton === 0) {
      
    }
    
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Coreconcepts {...CORE_CONCEPTS[0]} />

            <Coreconcepts {...CORE_CONCEPTS[1]} />

            <Coreconcepts {...CORE_CONCEPTS[2]} />

            <Coreconcepts {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
             <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
             <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
             <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
             <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>States</TabButton>
          </menu>
         <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code }
            </code>
          </pre>
         </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
