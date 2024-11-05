import { useContext } from "react";
import CalculatedResults from "./calculatedResults";
import ResultsEmpty from "./resultsEmpty";
import { DataContext } from "../hooks/clearContext";

export default function Results () {

    const {formIsValid, setFormIsValid} = useContext(DataContext)

    return (
        <section className="main-results-section grid-item bg-clr-slate-900" aria-label="Main results section">
            
            {formIsValid ? <CalculatedResults/> : <ResultsEmpty/>}     
            
        </section>
    )
}