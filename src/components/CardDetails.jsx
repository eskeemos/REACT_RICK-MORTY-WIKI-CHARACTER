import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const CardDetails = () => {
    let { id } = useParams();
	let [data, setdata] = useState([]);
    let { name, image, location, origin, gender, species, status, type } = data;

	let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
		
		(async function() {
		let data = await fetch(api).then(res => res.json());
		setdata(data);
		})();
		
	}, [api]);

    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column">
                <h1 className="text-center">{name}</h1>
                <img src={image} alt="" className="img-fluid" />
                {(() => {
					let x = "bg-success";
					if(status === "Dead") x = "bg-danger";
					if(status === "unknown") x = "bg-warning";
					return(<div className={`badge ${x} my-3 rounded-0 py-2`} style={{right:"20px", top:"5px"}}>{status}</div>)
					})()
				}
                <div className="content">
                    <div className="">
                        <span className="fw-bold">Gender : </span>{gender}
                    </div>
                    <div className="">
                        <span className="fw-bold">Species : </span>{species}
                    </div>
                    <div className="">
                        <span className="fw-bold">Type : </span>{type === "" ? "" : type}
                    </div>
                    <div className="">
                        <span className="fw-bold">Location : </span>{location?.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin : </span>{origin?.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
