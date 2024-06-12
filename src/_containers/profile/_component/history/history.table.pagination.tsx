export type PaginationProps = {
    page: number;
    setPage: (page: number) => void;

    pageCount: number;
}

const PaginationComponent = (props: PaginationProps) => {
    const {page, setPage, pageCount} = props;

    return (
        <nav aria-label="Page navigation" className="pagination-area">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" aria-label="Previous" onClick={() => page > 1 ? setPage(page - 1) : ''}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    pageCount > 0 && [...Array(pageCount)].map((_, index) => {
                        const _page = index + 1;
                        return (
                            <li className={`page-item ${page === _page ? 'active' : ''}`} key={index} style={{zIndex: 1}}>
                                <a className="page-link" onClick={() => setPage(_page)}>{_page}</a>
                            </li>
                        )
                    })
                }
                <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={() => page < pageCount ? setPage(page + 1) : ''}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationComponent;