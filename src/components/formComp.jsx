import { useContext } from "react"
import NumberInputGroup from "./numberInputGroup"
import RadioGroup from "./radioGroup"
import { DataContext } from "../hooks/clearContext"

export default function FormComp() {
    
    const {inputValues, setInputValues,formIsValid, setFormIsValid} = useContext(DataContext) 
    
    function handleSubmit(e) {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        const isNowValid =  (!Object.keys(data).includes('mortageType')) ? false : true;
        setFormIsValid(isNowValid)
    }
 
    return (
        <form onSubmit={handleSubmit} action="POST" className="form grid-item">
            <NumberInputGroup name={'amount'} label={'$'} inputValue={inputValues.amount}>Mortage Amount</NumberInputGroup> 
            <div className="inputs-group-container flex-item">
                <NumberInputGroup name={'term'} label={'years'} inputValue={inputValues.term}>Mortage Term</NumberInputGroup> 
                <NumberInputGroup name={'rate'} label={'%'} inputValue={inputValues.rate}>Interest Rate</NumberInputGroup> 
            </div>
            <RadioGroup />
            <button className="calc-btn bg-clr-lime flex-item">
                <img src="/assets/images/icon-calculator.svg" alt="calculator icon" className="img calc-img" />
                <span className="calc-btn-text clr-slate-900 fw-700">Calculate Repayments</span>
            </button>
        </form>
    )
};
