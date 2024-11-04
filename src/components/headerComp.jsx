import { useContext } from "react"
import { DataContext } from "../hooks/clearContext"

export default function HeaderComp() {

    const {inputValues, setInputValues} = useContext(DataContext)
    function handleClick() {
        setInputValues((previousData) => {
            const newdata = Object.keys(previousData).reduce((acc, key) => {
                acc[key] = '';
                return acc;
            }, {})
            return newdata
        })
    }

    return (
        <div className="title-container flex-item">
            <h1 className="title clr-slate-900 fw-700 fs-700">Mortage Calculator</h1>
            <button 
            className="clear-btn clr-slate-900"
            onClick={handleClick}
            >
                Clear All
            </button>
        </div>
    )
};
