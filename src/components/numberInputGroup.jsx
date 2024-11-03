import { useContext, useState } from "react"
import { DataContext } from "../hooks/clearContext"


export default function NumberInputGroup({children, name, label, inputValue}) {

    const {inputValues, setInputValues} = useContext(DataContext)
    
    function handleChange(e) {
        const {name, value} = e.target;
        setInputValues((previewsValues) => ({...previewsValues, [name]:value}));
    }

    return (
        <div className="form-item grid-item">
            <label className="form-label ff-jak-it clr-slate-700" htmlFor={name}>
                {children}
            </label>
            <div className="input-item flex-item">
                <span className="form-item-label fw-500 bg-clr-slate-100 clr-slate-900 fs-500">{label}</span>
                <input 
                    type="number" 
                    className="form-input"
                    name={name}
                    value={inputValue} 
                    onChange={handleChange}/>
            </div>        
        </div>
    )
}

