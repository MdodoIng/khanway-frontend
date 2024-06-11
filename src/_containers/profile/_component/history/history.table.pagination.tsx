import Pagination from '@mui/material/Pagination';
import {styled} from "@mui/material";
import {useEffect} from "react";

export type PaginationProps = {
    page: number;
    setPage: (page: number) => void;

    pageCount: number;
}
// MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-circular MuiPaginationItem-colorPrimary MuiPaginationItem-outlinedPrimary MuiPaginationItem-page css-1b5ei7m
const PaginationCustom = styled(Pagination)(({  }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    '& .MuiPaginationItem-root': {
        backgroundColor: '#253649',
        border: '1px solid #eaeaed',
        color: '#eaeaed',


    },
    '& .MuiPaginationItem-ellipsis': {
        backgroundColor: 'transparent',
        border: '0px solid #eaeaed',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#a74fff',
        border: '1.5px solid #a74fff',
        color: '#eaeaed',
    },
    '& .MuiPaginationItem-page': {
        '&:hover': {
            border: '1.5px solid #a74fff',
            backgroundColor: '#a74fff',
            color: '#eaeaed',
        }
    }
}));

const PaginationComponent = (props: PaginationProps) => {
    const {page, setPage, pageCount} = props;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [page])

    return (
        <PaginationCustom className={"pagination-area"} color={"primary"} variant="outlined" count={pageCount} page={page} onChange={(_, page) => setPage(page)} />
        // <nav aria-label="Page navigation" className="pagination-area">
        //     <ul className="pagination">
        //         <li className="page-item">
        //             <a className="page-link" aria-label="Previous" onClick={() => page > 1 ? setPage(page - 1) : ''}>
        //                 <span aria-hidden="true">&laquo;</span>
        //             </a>
        //         </li>
        //         {
        //             pageCount > 0 && [...Array(pageCount)].map((_, index) => {
        //                 const _page = index + 1;
        //                 return (
        //                     <li className={`page-item ${page === _page ? 'active' : ''}`} key={index} style={{zIndex: 1}}>
        //                         <a className="page-link" onClick={() => setPage(_page)}>{_page}</a>
        //                     </li>
        //                 )
        //             })
        //         }
        //         <li className="page-item">
        //             <a className="page-link" aria-label="Next" onClick={() => page < pageCount ? setPage(page + 1) : ''}>
        //                 <span aria-hidden="true">&raquo;</span>
        //             </a>
        //         </li>
        //     </ul>
        // </nav>
    )
}

export default PaginationComponent;