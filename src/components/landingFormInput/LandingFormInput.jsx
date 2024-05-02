import "./LandingFormInput.css"

const LandingFormInput = ({title, placeholder, idetification, inputName, inputValue, handleChange}) => {
  return (
    <>
    <p id={idetification} className="P2">{title || "Enter something"}</p>
    <input className="landing-input"  placeholder={placeholder || "Place holder"} name={inputName} value={inputValue} onChange={handleChange}></input>
    </>
  )
}

export default LandingFormInput