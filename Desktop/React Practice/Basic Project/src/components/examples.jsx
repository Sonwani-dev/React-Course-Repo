import TabButton from "./tab-button";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section  from "./Section.jsx";


export default function Examples(){

     let [selectedTopic, setSelectedTopic] = useState("initial");
    
      function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        
      }

    return (
        
         <Section id="examples">
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
        </Section>
    )
}