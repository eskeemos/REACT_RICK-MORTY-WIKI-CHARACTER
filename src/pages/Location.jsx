import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import InputGroup from '../components/InputGroup';

const Location = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    let { name, type, dimension } = info;
    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let heros = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then(res => res.json());
                })
            );
            setResults(heros);
        })();
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mb-3">
                    Location : <span className="text-warning">{name === "" ? "Unknown" : name}</span>
                </h1>
                <h5 className="text-center mb-4">
                    Dimension : <span className="text-warning">{dimension === "" ? "Unknown" : dimension}</span>
                </h5>
                <h6 className="text-center mb-4">
                    Type : <span className="text-warning">{type === "" ? "Unknown" : type}</span>
                </h6>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-3">Pick Location</h4>
                    <InputGroup setId={setId} name="Location" total={126}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards page="/location/" results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
