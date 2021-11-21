import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    return (
        <div className="input-group mb-3">
            <select className="form-select" id={name} onChange={(e) => setId(e.target.value)}>
                {[...Array(total).keys()].map((x => {
                    return(<option value={x + 1} key={x}>{name} - {x + 1}</option>);
                }))}
            </select>
        </div>
    )
}

export default InputGroup
