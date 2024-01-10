
import Person from "./components/person/Person"
import Background from "./components/background/Background"
import "./App.css"


function App() {


  return (
    <div className="contenedor-principal">
      <Background>
        <Person/>
      </Background>
    </div>
  )
}

export default App
