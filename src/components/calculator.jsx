

export default function Calculator() {
    
    return (
        <section className="calculator-section grid-item bg-clr-white" aria-label="Mortage Calculator">
            <div className="title-container flex-item">
                <h1 className="title clr-slate-900 fw-700 fs-700">Mortage Calculator</h1>
                <button className="clear-btn clr-slate-900">Clear All</button>
            </div>
            <div className="form-container">
                <form action="POST" className="form grid-item">
                    <div className="form-item grid-item">
                        <label className="form-label ff-jak-it clr-slate-700" htmlFor="amount">Mortage Amount</label>
                        <div className="input-item flex-item">
                            <span className="form-item-label fw-500 bg-clr-slate-100 clr-slate-900 fs-500">$</span>
                            <input type="number" className="form-input" name="amount" />
                        </div>        
                    </div>
                    <div className="inputs-group-container flex-item">
                        <div className="form-item grid-item">
                            <label className="form-label ff-jak-it clr-slate-700" htmlFor="term">Mortage Term</label>
                            <div className="input-item flex-item">
                                <input type="number" className="form-input" name="term" />
                                <span className="form-item-label fw-500 bg-clr-slate-100 clr-slate-900 fs-500">years</span>
                            </div>        
                        </div>
                        <div className="form-item grid-item">
                            <label className="form-label ff-jak-it clr-slate-700" htmlFor="rate">Interest Rate</label>
                            <div className="input-item flex-item">
                                <input type="number" className="form-input" name="rate" />
                                <span className="form-item-label fw-500 bg-clr-slate-100 clr-slate-900 fs-500">%</span>
                            </div>        
                        </div>
                    </div>
                    <fieldset className="radio-group-container grid-item">
                        <legend className="radio-legend ff-jak-it clr-slate-700">Mortage Type</legend>
                        <div className="radio-group flex-item">
                            <input type="radio" id="repayment" name='mortageType' value="repayment"/>
                            <label htmlFor="repayment" className="radio-group-label flex-item clr-slate-900 fw-700">
                                <div className="custom-radio grid-item"></div>
                                <span>Repayment</span>
                            </label>
                        </div>
                        <div className="radio-group flex-item">
                            <input type="radio" id="interestOnly" name='mortageType' value="interestOnly" />
                            <label htmlFor="interestOnly" className="radio-group-label flex-item clr-slate-900 fw-700">
                                <div className="custom-radio grid-item"></div>
                                <span>Interest only</span>
                            </label>
                        </div>
                    </fieldset>
                    <button className="calc-btn bg-clr-lime flex-item">
                        <img src="src\assets\images\icon-calculator.svg" alt="calculator icon" className="img calc-img" />
                        <span className="calc-btn-text clr-slate-900 fw-700">Calculate Repayments</span>
                    </button>
                </form>
            </div>      
        </section>
    )
}