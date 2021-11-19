import React from 'react';
import Gender from './Categories/Gender';
import Species from './Categories/Species';
import Status from './Categories/Status';

const Filters = ({ setstatus, setpage, setgender, setspecies }) => {
    let clearFilter = () => {
        window.location.reload(false);
    }
    return (
        <div className="col-3">
            <div className="text-center fw-bold fs-4 mb-4">Filter</div>
            <div style={{cursor:"pointer"}} className="text-center text-decoration-underline mb-2" onClick={clearFilter}>Clear Filters</div>
            <div className="accordion" id="accordionExample">
                <Status setpage={setpage} setstatus={setstatus}/>
                <Species setpage={setpage} setspecies={setspecies}/>
                <Gender setpage={setpage} setgender={setgender}/>
            </div>
        </div>
    )
}

export default Filters
