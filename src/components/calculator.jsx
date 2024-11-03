import NumberInputGroup from "./numberInputGroup"
import RadioGroup from "./radioGroup"

export default function Calculator() {
    
    return (
        <section className="calculator-section grid-item bg-clr-white" aria-label="Mortage Calculator">
            <div className="title-container flex-item">
                <h1 className="title clr-slate-900 fw-700 fs-700">Mortage Calculator</h1>
                <button className="clear-btn clr-slate-900">Clear All</button>
            </div>
            <div className="form-container">
                <form action="POST" className="form grid-item">
                    <NumberInputGroup name={'amount'} label={'$'}>Mortage Amount</NumberInputGroup> 
                    <div className="inputs-group-container flex-item">
                        <NumberInputGroup name={'term'} label={'years'}>Mortage Term</NumberInputGroup> 
                        <NumberInputGroup name={'rate'} label={'%'}>Interest Rate</NumberInputGroup> 
                    </div>
                    <RadioGroup />
                    <button className="calc-btn bg-clr-lime flex-item">
                        <img src="src\assets\images\icon-calculator.svg" alt="calculator icon" className="img calc-img" />
                        <span className="calc-btn-text clr-slate-900 fw-700">Calculate Repayments</span>
                    </button>
                </form>
            </div>      
        </section>
    )
}