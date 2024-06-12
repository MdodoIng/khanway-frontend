export type ExploreSearchProps = {
    search: string|undefined
    setSearch: (value: string) => void;
    onClickSearch: () => void;
}

const ExploreSearch = (props: ExploreSearchProps) => {
    return (
        <div className="col-sm-12 search-box">
            <form action="" className="search-container">
                <input type="text" id="search-bar" placeholder="search..."
                       value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
                <a className="search-icon" onClick={() => props.onClickSearch()}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </form>
        </div>
    )
}

export default ExploreSearch;