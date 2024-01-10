import "./Background.css"
const Background = (props) => {
  return (
    <div className="bg center" >
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {props.children}
    </div>
  )
}

export default Background