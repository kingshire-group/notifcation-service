const FormInput = ({label, onChange, id, ...inputProps}) => {
    
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  )
}

export default FormInput
