export default function CalculatedResults() {
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
                        <p className="results-num main-results-num fw-700 clr-lime ">$ 1,797.74</p>
                    </div>
                    <div className="calc-results-item grid-item">
                        <p className="results-text clr-slate-500">Total you 'll repay over the term</p>
                        <p className="results-num fw-700 fs-500 clr-slate-100">$ 539,322.94</p>
                    </div>
                </div>
            </div>
        </section>
    )
}