import data from "../../data/data.json"
import "./Person.css"

const Person = () => {
  return (
    <div className="center">
        <ul>
            {
            data.map(data => (
                <li  key = {data.id} className="personCard">
                  <img className="pic" src={data.foto} alt="Foto de persona" />
                  <div className="textContainer">
                    <p className="center f23 name">{data.nombre}</p>
                    <p className="center f23 post">{data.profesion}</p>
                    <p className="center f19">{data.descripcion}</p>
                  </div>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Person