export default function NumberInputGroup({children, name}) {
    return (
        <div className="form-item grid-item">
            <label className="form-label ff-jak-it clr-slate-700" htmlFor={name}>
                {children}
            </label>
            <div className="input-item flex-item">
                <span className="form-item-label fw-500 bg-clr-slate-100 clr-slate-900 fs-500">$</span>
                <input type="number" className="form-input" name={name} />
            </div>        
        </div>
    )
}

