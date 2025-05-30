import ReactPaginate from 'react-paginate';

const Paginations = ({getPage, pageCount}) => {
    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    }

    return (
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالى"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< السابق"

                containerClassName={'pagination d-flex justify-content-center py-3'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
    )
}

export default Paginations
