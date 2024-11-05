import { useContext } from "react";
import CalculatedResults from "./calculatedResults";
import ResultsEmpty from "./resultsEmpty";
import { DataContext } from "../hooks/clearContext";

export default function Results () {

    const {isValid, setFormIsValid} = useContext(DataContext)
    console.log(isValid)
    return (
        <section className="main-results-section grid-item bg-clr-slate-900" aria-label="Main results section">
            <ResultsEmpty/>
            {/* <CalculatedResults/> */}
        </section>
    )
}