import image from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./data.js"


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Coreconcepts({image, title, description}) {



  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );


}


function Header() {

  const word = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
