import ExploreSearch from "@container/explore/explore.search.tsx";
import ExploreFilter from "@container/explore/explore.filter.tsx";
import {Nft, NftIsOnSale, useGetNftListLazyQuery} from "@graphql/graphql.ts";
import {useEffect, useState} from "react";
import NFWItem from "@component/nfw.item.tsx";
import PaginationComponent from "@container/profile/_component/history/history.table.pagination.tsx";
import {getPageCountV2} from "@helper/pageCount.tsx";

const ExploreContainer = () => {
    const [nftList, setNftList] = useState<Array<Nft>>([])
    const [search, setSearch] = useState<string|undefined>(undefined)
    const [category, setCategory] = useState<Array<string>>([])
    const [price, setPrice] = useState<Array<string>>([])
    const [tradeCount, setTradeCount] = useState<Array<number>>([])
    const [isOnSale, setIsOnSale] = useState<Array<NftIsOnSale>>([NftIsOnSale.OnSale])
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0)
    const [getNFTList] = useGetNftListLazyQuery();
    const onGetNFTList = async () => {
        await getNFTList({
            variables: {
                input: {
                    search: search,
                    category: category,
                    price: price,
                    tradeCount: tradeCount,
                    isOnSale: isOnSale,
                    page: page,
                    pageSize: 8
                }
            }
        }).then((res) => {
            setNftList(res.data?.getNFTList.nfts ?? []);
            setTotal(res.data?.getNFTList.total ?? 0);
        })
    }

    useEffect(() => {
        onGetNFTList();
    }, [page]);

    useEffect(() => {
        onStartSearch();
    }, [category, price, tradeCount, isOnSale]);

    const onStartSearch = () => {
        if (page === 1)
            onGetNFTList();
        else
            setPage(1);
    }

    return (
        <div id="main-wrapper" className="">
            <div className="explore section-padding">
                <div className="container">
                    <div className="row">
                        <ExploreSearch setSearch={setSearch} search={search} onClickSearch={onStartSearch}/>
                        <ExploreFilter
                            price={price} setPrice={setPrice}
                            tradeCount={tradeCount} setTradeCount={setTradeCount}
                            isOnSale={isOnSale} setIsOnSale={setIsOnSale}
                            category={category} setCategory={setCategory}/>
                        <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 mynft-area">
                            { nftList.map((item, index) => <NFWItem item={item} key={index}/>) }
                        </div>
                        <PaginationComponent page={page} setPage={setPage} pageCount={getPageCountV2(total, 8)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreContainer;