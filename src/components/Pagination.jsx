import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setpage, page }) => {

    return (
        <ReactPaginate
            className="pagination justify-content-center align-items-center my-4 gap-2"
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary rounded-0"
            nextClassName="btn btn-primary rounded-0"
            activeClassName="active"
            pageCount={info?.pages}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={(page) => {setpage(page.selected + 1);}}
            forcePage={page === 1 ? 0 : page - 1}
            breakLabel="..."
        />
    )
}

export default Pagination
