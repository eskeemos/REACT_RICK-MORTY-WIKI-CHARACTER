import React from 'react';

const Cards = ({ results }) => {
	let content;
	
	if(results){
		content = results.map(result => {
			let { id, name, image, location, status } = result;
			return(
			<div className="col-3 position-relative text-truncate mb-4" key={id}>
				<div className="border-bottom border-primary">
					<img src={image} alt="" className="img-fluid"/>
					<div className="content mw-20">
						<div className="my-1 text-nowrap text-center">{name}</div>
						<div className="text-center">
							<div className="text-primary">Last location : </div>
							<div className="">{location.name}</div>
						</div>
					</div>
				</div>
				{(() => {
					let x = "bg-success";
					if(status === "Dead") x = "bg-danger";
					if(status === "unknown") x = "bg-warning";
					return(<div className={`badge ${x} position-absolute`} style={{right:"20px", top:"5px"}}>{status}</div>)
					})()
				}
			</div>
			)
		})
	}else{
    content = "No character found"; 
}

	return (
    <>
		{content}
    </>
	)
}

export default Cards
