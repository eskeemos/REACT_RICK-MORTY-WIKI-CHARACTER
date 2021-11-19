import React from 'react'
import FilterBtn from './FilterBtn';

const Species = ({ setspecies, setpage }) => {
    let items = ["Human","Humanoid","Poopybutthole","Alien","Robot","Mythological","Cronenberg","Animal","Unknown","Disease"];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Species
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {items.map((item, index) => (
                        <FilterBtn key={index} index={index} items={item} name="type" setpage={setpage} task={setspecies} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Species
