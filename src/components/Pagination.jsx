import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ( {info, page, setpage} ) => {

    return (
        <ReactPaginate
            className="pagination justify-content-center align-items-center my-4 gap-2"
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary"
            nextClassName="btn btn-primary"
            activeClassName="active"
            pageCount={info?.pages}
            pageClassName="page-item"
            pageLinkClassName="page-link"
        />
    )
}

export default Pagination
