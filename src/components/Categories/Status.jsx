import React from 'react'
import FilterBtn from './FilterBtn'

const Status = ({ setpage, setstatus }) => {
    let items = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Status
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {items.map((item, index) => (
                        <FilterBtn key={index} index={index} status={item} items={item} name="status" setpage={setpage} task={setstatus }/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status
