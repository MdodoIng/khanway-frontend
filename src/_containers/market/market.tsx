import {useGetMainNftListQuery} from "@graphql/graphql.ts";
import Loading from "@container/_common/loading.tsx";
import {Link} from "react-router-dom";
import MarketUse from "@container/market/market.use.tsx";
import MarketVideo from "@container/market/market.video.tsx";
import MarketBanner from "@container/market/market.banner.tsx";
import AOS from "aos";
import {useTranslation} from "react-i18next";
import NFWItem from "@component/nfw.item.tsx";

const MarketContainer = () => {
    useTranslation();

    const {data, loading} = useGetMainNftListQuery();
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back'
    });
    if (loading) return (<Loading/>);

    return(
        <div id="main-wrapper" className="">
            <MarketBanner />
            <div className="container m-items">
                <div className="row">
                    <div className="col-xl-12 nfwitem-title aos-init aos-animate" data-aos="fade-up">
                        <h1 className="text-line-deco">Top NFW items</h1>
                    </div>
                    <div className="mynft-area col-xl-12">
                        {data?.getMainNFTList.onSaleNFTList?.map((item, index) => <NFWItem item={item} key={index}/>)}
                    </div>
                    <Link to={"/market/explore"} className="btn btn-grad btn-more" data-aos="fade-up">more</Link>
                </div>
            </div>
            <MarketUse />
            <MarketVideo/>
        </div>
    )
}

export default MarketContainer;