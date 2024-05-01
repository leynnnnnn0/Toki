import "./LandingFormInput.css"

const LandingFormInput = ({title, placeholder}) => {
  return (
    <>
    <p className="P2">{title || "Enter something"}</p>
    <input className="landing-input"  placeholder={placeholder || "Place holder"}></input>
    </>
  )
}

export default LandingFormInput