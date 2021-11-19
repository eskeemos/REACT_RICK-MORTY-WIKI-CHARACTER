import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters.jsx';
import Cards from './components/Cards.jsx';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination.jsx';
import Search from './components/Search.jsx';

function App() {
	let [page, setpage] = useState(1);
	let [search, setsearch] = useState("");
	let [data, setdata] = useState([]);
	let { info, results } = data;

	let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

	useEffect(() => {
		
		(async function() {
		let data = await fetch(api).then(res => res.json());
		setdata(data);
		})();
		
	}, [api]);

	return (
		<div className="App">
		<h1 className="text-center my-5">Rick & Morty <span className="text-warning">WiKi</span></h1>
		<div className="container d-flex justify-content-center">
			<Search setsearch={setsearch} setpage={setpage}/>
		</div>
		<div className="container">
			<div className="row">
			<div className="col-3">
				<Filters />
			</div>
			<div className="col-8">
				<div className="row">
				<Cards results={results}/>
				</div>
			</div>
			</div>
		</div>
		<Pagination info={info} setpage={setpage} page={page}/>
		</div>
	);
}

export default App;
