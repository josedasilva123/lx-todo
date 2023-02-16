import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const InputPassword = ({ label, id, placeholder, register }) => {
  const [isHidden, setIsHidden] = useState(true);  

  return (
    <fieldset>
        {label && <label htmlFor={register.name}>{label}</label>}
        <input id={id} type={isHidden ? "password" : "text"} placeholder={placeholder} {...register} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
    </fieldset>    
  )
}

export default InputPassword