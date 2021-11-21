import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import InputGroup from '../components/InputGroup';

const Episode = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    let { air_date, name, } = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let heros = await Promise.all(
                data.characters.map((x) => {
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
                    Episode : <span className="text-warning">{name === "" ? "Unknown" : name}</span>
                </h1>
                <h5 className="text-center mb-4">
                    Air Date : <span className="text-warning">{air_date === "" ? "Unknown" : air_date}</span>
                </h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-3">Pick Episode</h4>
                    <InputGroup setId={setId} name="Episode" total={51}/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode
