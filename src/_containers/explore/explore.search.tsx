export type ExploreSearchProps = {
    search: string|undefined
    setSearch: (value: string) => void;
    onClickSearch: () => void;
}

const ExploreSearch = (props: ExploreSearchProps) => {
    const onEnterCatch = (e: any) => {
        if (e.key === 'Enter') props.onClickSearch();
        else return;
    }

    return (
        <div className="col-sm-12 search-box">
            <div className="search-container">
                <input type="text" id="search-bar" placeholder="search..."
                       onKeyDown={(e) => onEnterCatch(e)}
                       value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
                <a className="search-icon" onClick={() => props.onClickSearch()}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </div>
    )
}

export default ExploreSearch;