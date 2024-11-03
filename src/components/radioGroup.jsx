import { useContext, useState } from "react"
import { DataContext } from "../hooks/clearContext"

export default function RadioGroup() {

    const {inputValues, setInputValues} = useContext(DataContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputValues((previousvalues)=> {
            return {...previousvalues, [name]: value}
        })
    }

    return (
        <fieldset className="radio-group-container grid-item">
            <legend className="radio-legend ff-jak-it clr-slate-700">Mortage Type</legend>
            <div className="radio-group flex-item">
                <input  type="radio"
                        id="repayment" 
                        name='mortageType'
                        value="repayment"
                        onChange={handleChange}
                        checked={inputValues.mortageType === 'repayment'}
                />
                <label htmlFor="repayment" className="radio-group-label flex-item clr-slate-900 fw-700">
                    <div className="custom-radio grid-item"></div>
                    <span>Repayment</span>
                </label>
            </div>
            <div className="radio-group flex-item">
                <input  type="radio" 
                        id="interestOnly" 
                        name='mortageType'
                        value="interestOnly"
                        onChange={handleChange} 
                        checked={inputValues.mortageType === 'interestOnly'}
                />
                <label htmlFor="interestOnly" className="radio-group-label flex-item clr-slate-900 fw-700">
                    <div className="custom-radio grid-item"></div>
                    <span>Interest only</span>
                </label>
            </div>
        </fieldset>
    )
};
