import {Nft, NftIsOnSale} from "@graphql/graphql.ts";
import {t} from "i18next";
import {useNavigate} from "react-router-dom";

export type NFWItemProps = {
    item: Nft;
}

const NFWItem = ({item}: NFWItemProps) => {
    const navigate = useNavigate();

    const onClickItem = () => navigate(`/market/detail/${item.id}`, {replace: true});

    return (
        <div className="mynft-box" style={{cursor: 'pointer'}} onClick={() => onClickItem()}>
            <div className={`imgbox ${item.isOnSale === NftIsOnSale.OnSale ? 'sell' : ''}`}>
                <img src={item.metadata?.image!} alt=""  className="nft-img"/>
            </div>
            <div className="txt-area">
                <p className="nft-name">{item.metadata?.name}</p>
                <p className="nft-txt">{item.metadata?.description}</p>

                <div className="detailbox">
                    <div className="creator">
                        <img src={item.owner!.profileImage!} alt=""/>
                        <div className="txtbox">
                            <p className="title">{t(`profile_nfw_item.card1`)}</p>
                            <p className="value" style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '47px'}}>{item.owner?.nickname}</p>
                        </div>
                    </div>
                    <div className="current">
                        <p className="title">{t(`profile_nfw_item.card2`)}</p>
                        <p className="value">$ {item.price}</p>
                    </div>
                </div>
            </div>
            <div className="counts" style={{color: '#ffffff'}}>{item.tradeCount}</div>
        </div>
    )
}

export default NFWItem;