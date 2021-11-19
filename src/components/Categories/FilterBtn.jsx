import React from 'react'

const FilterBtn = ({ name, index, items, setpage, task }) => {
    return (
        <div>
            <style>
                {`
                .x:checked + label{
                    background-color: #0d6efd;
                    color:white;
                }
                input[type="radio"]{
                    display:none
                }
                `}
            </style>
            <div className="form-check">
                <input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} onClick={() => {setpage(1);task(items)}}/>
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    )
}

export default FilterBtn
