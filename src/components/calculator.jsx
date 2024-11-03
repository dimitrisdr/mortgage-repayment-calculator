import { useState } from "react"
import { ClearContext } from "../hooks/clearContext"
import HeaderComp from "./headerComp"


export default function Calculator() {

    const [clear, setClear] = useState(false)
    
    return (
        <section className="calculator-section grid-item bg-clr-white" aria-label="Mortage Calculator">
            <ClearContext.Provider value={{clear, setClear}}>           
                <HeaderComp />
                <div className="form-container">
                    <FormComp />
                </div>
            </ClearContext.Provider>    
        </section>
    )
}