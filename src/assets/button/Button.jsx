import "./Button.css"

const Button = ({title, identification, handleSubmit}) => {
  return (
    <button onClick={handleSubmit} className="web-button P1" id={identification}>{title || "TEXT HERE"}</button>
  )
}

export default Button