import Header from "./components/Header.jsx"
import Coreconcepts from "./components/coreconcept.jsx" 
import Examples from "./components/examples.jsx"

function App() {

  return (
    <>
      <Header />
      <main>
        <Coreconcepts />
       <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
