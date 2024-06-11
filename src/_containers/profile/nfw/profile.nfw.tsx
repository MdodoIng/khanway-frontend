import ProfileTitleComponent from "@container/profile/profile.title.tsx";
import ProfileNavigationComponent from "@container/profile/profile.navigation.tsx";
import {useEffect, useState} from "react";
import {useGetNftByOwnerIdQuery} from "@graphql/graphql.ts";
import ProfileNFWEventItem from "@container/profile/nfw/profile.nfw.event.tsx";
import PaginationComponent from "@container/profile/_component/history/history.table.pagination.tsx";
import {getPageCount} from "@helper/pageCount.tsx";
import {useTranslation} from "react-i18next";
import EffectModal from "@container/modal/effect.modal.tsx";
import NFWItem from "@component/nfw.item.tsx";

const ProfileNFTContainer = () => {
    const {t} = useTranslation();
    const [page, setPage] = useState<number>(1);
    const [search, setSearch] = useState<string>();
    const {data, loading, refetch} = useGetNftByOwnerIdQuery({
        variables: {
            input: {
                // name: search,
                // page: page,
                pageSize: 8,
            }
        }
    });

    const onGetNFT = (page:number, search?: string) => refetch({
        input: {
            name: search,
            page: page,
            pageSize: 8,
        }
    });

    useEffect(() => {
        if (loading) return;

        onGetNFT(page, search).then(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    }, [page]);

    // if (!data) return <Loading />;

    return (
        <div id="main-wrapper" className="front">
            <ProfileTitleComponent path={t(`profile_nfw.title`)}/>
            <div className="profile-page">
                <div className="container">
                    <ProfileNavigationComponent/>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-3 col-sm-12">
                            <span className="mynfw-count">{t(`profile_nfw.title`)} : {data?.getNFTByOwnerId.total}</span>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-sm-12 search-box">
                            <div className="search-container">
                                <input type="text" id="search-bar"
                                       value={search}
                                       onKeyDown={(e) => {
                                           e.key === 'Enter' && onGetNFT(1, search)
                                       }}
                                       placeholder={t(`profile_nfw.search_input`)} onChange={(e) => setSearch(e.target.value)}/>
                                <a className="search-icon" onClick={() => onGetNFT(1, search)} >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </div>
                        </div>
                        <div className="mynft-area col-xl-12">
                            {
                                data?.getNFTByOwnerId.golds?.map((item, index) =>
                                    <ProfileNFWEventItem key={index} type={'EVENT_GOLD'} id={item.id!}/>)
                            }
                            {
                                data?.getNFTByOwnerId.silvers?.map((item, index) =>
                                    <ProfileNFWEventItem key={index} type={'EVENT_SILVER'} id={item.id!}/>)
                            }
                            {
                                data?.getNFTByOwnerId.nfts?.map((item, index) =>
                                    <NFWItem key={index} item={item}/>)
                            }
                        </div>
                    </div>
                    <PaginationComponent setPage={setPage} page={page}
                                         pageCount={getPageCount(data?.getNFTByOwnerId.total ?? 0, 8)} />
                </div>
            </div>
            <EffectModal />
        </div>
    )
}

export default ProfileNFTContainer;