import Coreconcepts from "./core-concepts.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function coreconcept(){
    return (
        <section id="core-concepts">
                  <h2>Core Concepts</h2>
                  <ul>
                    <Coreconcepts {...CORE_CONCEPTS[0]} />
        
                    <Coreconcepts {...CORE_CONCEPTS[1]} />
        
                    <Coreconcepts {...CORE_CONCEPTS[2]} />
        
                    <Coreconcepts {...CORE_CONCEPTS[3]} />
        
                  </ul>
                </section>
    );
}