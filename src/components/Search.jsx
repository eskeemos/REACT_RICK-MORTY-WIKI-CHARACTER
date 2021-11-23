import React from 'react'

const Search = ({ setsearch, setpage }) => {
    return (
    <form className="input-group mb-5 mx-auto" style={{maxWidth:"500px"}}>
        <input type="text" className="form-control" placeholder="Search for character"
        onChange={e => {setsearch(e.target.value); setpage(1)}}  
        />
    </form>
    )
}

export default Search
