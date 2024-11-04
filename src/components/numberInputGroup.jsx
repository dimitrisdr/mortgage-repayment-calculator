import { useContext, useState } from "react"
import { DataContext } from "../hooks/clearContext"


export default function NumberInputGroup({children, name, label, inputValue}) {

    const {inputValues, setInputValues} = useContext(DataContext)
    const [valid, setValid] = useState(true)

    function handleChange(e) {
        const regexPatternForPositive = /^$|^(?!0(\.0+)?$)[0-9]*\.?[0-9]+$/;
        const {name, value} = e.target;
        setValid(regexPatternForPositive.test(value));
        setInputValues((previewsValues) => ({...previewsValues, [name]:value}));

    }



    return (
        <div className="form-item grid-item">
            <label className="form-label ff-jak-it clr-slate-700" htmlFor={name}>
                {children}
            </label>
            <div className="input-item flex-item" data-error={valid}>
                <span className={`form-item-label fw-500 ${valid?'bg-clr-slate-100': 'clr-white bg-clr-red'} clr-slate-900 fs-500`}>{label}</span>
                <input 
                    type="number" 
                    className="form-input"
                    inputMode="decimal" 
                    min={1}
                    name={name}
                    value={inputValue} 
                    onChange={handleChange}
                />
            </div>
            {!valid  &&  <span className="error-state clr-red">Invalid value</span> }    
        </div>
    )
}

