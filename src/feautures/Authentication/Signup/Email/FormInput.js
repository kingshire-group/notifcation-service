import { useContext } from "react"
import { theme } from "../../../../data/theme"
import { SignUpFormContext } from ".."

const FormInput = ({label, onChange, id, ...inputProps}) => {
  const { openModal, open, close } = useContext(SignUpFormContext)

  const labelHtml = label!=='Password' ? 
    <label>{label}</label> :
    <label>
      {label}
      <i> (check<span style={{color: theme.colors.blue}} 
        onClick={() => openModal? close() : open()}> rules</span>)
      </i>
    </label>
  return (
    <>
      <div className="formInput">
        { labelHtml }
        <input {...inputProps} onChange={onChange}/>
      </div>
    </>
  )
}

export default FormInput