import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters.jsx';
import Cards from './components/Cards/Cards.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  let [page, setpage] = useState(1);
  let [data, setdata] = useState([]);
  let { info, results } = data;

  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    
    (async function() {
      let data = await fetch(api).then(res => res.json());
      setdata(data);
    })();
    
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center my-5">Rick & Morty <span className="text-warning">WiKi</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
