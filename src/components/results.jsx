import CalculatedResults from "./calculatedResults";
import ResultsEmpty from "./resultsEmpty";

export default function Results () {
    return (
        <section className="main-results-section grid-item bg-clr-slate-900" aria-label="Main results section">
            {/* <ResultsEmpty/> */}
            <CalculatedResults/>
        </section>
    )
}