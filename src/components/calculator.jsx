import HeaderComp from "./headerComp"
import FormComp from "./formComp"

export default function Calculator() {
    
    return (
        <section className="calculator-section grid-item bg-clr-white" aria-label="Mortage Calculator">         
            <HeaderComp />
            <div className="form-container">
                <FormComp />
            </div>
        </section>
    )
}