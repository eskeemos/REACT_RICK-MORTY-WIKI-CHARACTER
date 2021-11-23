import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Filters from './components/Filters.jsx';
import Cards from './components/Cards.jsx';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination.jsx';
import Search from './components/Search.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episode from './pages/Episode';
import Location from './pages/Location';
import CardDetails from './components/CardDetails.jsx';

function App(){
	return(
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/:id" element={<CardDetails />}/>
				<Route path="/episodes" element={<Episode />}/>
				<Route path="/episodes/:id" element={<CardDetails />}/>
				<Route path="/location" element={<Location />}/>
				<Route path="/location/:id" element={<CardDetails />}/>
			</Routes>
		</Router>
	);
}

const Home = () => {
	let [page, setpage] = useState(1);
	let [search, setsearch] = useState("");
	let [data, setdata] = useState([]);
	const [species, setspecies] = useState("");
	const [status, setstatus] = useState("");
	const [gender, setgender] = useState("");
	let { info, results } = data;

	let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		
		(async function() {
		let data = await fetch(api).then(res => res.json());
		setdata(data);
		})();
		
	}, [api]);

	return (
		<div className="App">
			<h1 className="text-center text-warning mb-4">Characters</h1>
			<Search  setpage={setpage} setsearch={setsearch}/>
			<div className="container">
				<div className="row">
					<Filters 
						setspecies={setspecies}
						setstatus={setstatus} 
						setpage={setpage}
						setgender={setgender}
					/>
					<div className="col-8">
						<div className="row">
						<Cards page="/" results={results}/>
						</div>
					</div>
				</div>
			</div>
			<Pagination info={info} setpage={setpage} page={page}/>
		</div>
	);
}

export default App;
