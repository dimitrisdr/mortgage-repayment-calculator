import { useContext, useEffect } from "react"
import { DataContext } from "../hooks/clearContext"



export default function CalculatedResults() {

    const {inputValues, setInputValues, formIsValid, setFormIsValid} = useContext(DataContext)
    const {amount, term, rate, mortageType} = inputValues

    function calculateMortageData(amount, term, rate, mortageType) {

        if (!formIsValid) return 

        const principal = parseFloat(amount)
        const months = parseFloat(term) * 12
        const interstRate = parseFloat(rate) / (12*100)
        const payments = Math.floor((((principal *interstRate)*Math.pow(1 + interstRate, months))/(Math.pow(1 + interstRate, months) - 1)) * 1000) / 1000
        
        if (months > 100000) {
            return 'Large number of years!'
        }
        if (!payments || principal < 0 || months < 0 || interstRate < 0) {
            return 'invalid values!'
        }
        
        if (Number(rate) > 100) {
            return 'invalid interest rate!'
        }
        const mortageTypeOptions = {
            repayment: payments,
            interestOnly: Math.floor((principal * interstRate) *1000) / 1000
        }

        return mortageTypeOptions[mortageType]
    }

    const monthlyPayment = calculateMortageData(amount, term, rate, mortageType)

    return(
        <section className="results-section bg-clr-slate-900 grid-item" aria-label="Calculation Results">
            <h2 className="title results-title clr-slate-100 fw-500 fs-500">Your Results</h2>
            <p className="results-section-text clr-slate-700">
                Your results are shown below based 
                on the information you provided. 
                To adjust the results, edit the form and click
                "calculate" repayments again.
            </p>
            <div className="calc-results-container grid-item">
                <div className="calc-results grid-item bg-clr-slate-950">
                    <div className="calc-results-item grid-item">
                        <p className="results-text clr-slate-500">Your monthly repayments</p>
                        <p className="results-num main-results-num fw-700 clr-lime ">{monthlyPayment}</p>
                    </div>
                    <div className="calc-results-item grid-item">
                        <p className="results-text clr-slate-500">Total you 'll repay over the term</p>
                        <p className="results-num fw-700 fs-500 clr-slate-100">{Number(monthlyPayment)? Math.round(monthlyPayment) * 12 *term : monthlyPayment}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


// const mortageTypeOptions = {
//     repayment: Math.floor((((principal *interstRate)*Math.pow(1 + interstRate, months))/(Math.pow(1 + interstRate, months) - 1))*100)/100,
//     interestOnly: (Math.floor((principal * interstRate) * 100) / 100) * 12
// }