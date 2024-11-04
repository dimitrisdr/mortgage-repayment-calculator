import { useState } from "react"
import HeaderComp from "./headerComp"
import FormComp from "./formComp"
import { DataContext } from "../hooks/clearContext"


export default function Calculator({data}) {
    const [inputValues, setInputValues] = useState(data)
    
    return (
        <section className="calculator-section grid-item bg-clr-white" aria-label="Mortage Calculator">
            <DataContext.Provider value={{inputValues, setInputValues}}>           
                <HeaderComp />
                <div className="form-container">
                    <FormComp />
                </div>
            </DataContext.Provider>    
        </section>
    )
}