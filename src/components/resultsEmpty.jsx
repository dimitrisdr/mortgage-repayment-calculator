import { useContext } from "react"
import { DataContext } from "../hooks/clearContext"


export default function ResultsEmpty() {

    const {inputValues, setInputValues} = useContext(DataContext)

    return (
        <section className="results-section-empty grid-item bg-clr-slate-900" aria-label="Calculation instructions">
            <img src="/mortgage-repayment-calculator/assets/images/illustration-empty.svg" alt="empty illustration" className="img" />
            <h2 className="title fw-500 clr-slate-100 fs-500">Results Shown here</h2>
            <p className="empty-results ff-jak-it clr-slate-500">
                Complete the form and click "calculate" repayments
                to see what your monthly repayments would be
            </p>
        </section>
    )
}