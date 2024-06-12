import {useNavigate, useParams} from "react-router-dom";
import {NftIsOnSale, PaymentStatus, useGetNftByIdQuery, useGetPaymentStateLazyQuery} from "@graphql/graphql.ts";
import Loading from "@container/_common/loading.tsx";
import Swal from "sweetalert2";
import DetailHistory from "@container/detail/detail.history.tsx";
import useStylesheet from "@helper/useStylesheet.tsx";
import DetailButton from "@container/detail/detail.button.tsx";
import {useEffect} from "react";
import QueryString from "qs";
import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {useDispatch} from "react-redux";
import {t} from "i18next";

const DetailContainer = () => {
    useStylesheet('/css/style.css');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const [onGetPaymentState,{ startPolling, stopPolling }] = useGetPaymentStateLazyQuery()
    const {data, loading} = useGetNftByIdQuery({
        variables: {
            input: {
                id: parseInt(id!)
            }
        }
    })

    useEffect(() => {
        const queryData = QueryString.parse(window.location.search, { ignoreQueryPrefix: true });
        if (queryData.token && queryData.PayerID) {
            onGetPaymentState({
                variables: {
                    input: {
                        orderId: queryData.token.toString()
                    }
                }
            }).then(response => {
                if (response.data?.getPaymentState?.payment?.status ?? undefined === PaymentStatus.Approved) {
                    dispatch(onToggleLoadingModalAction(false));
                    Swal.fire({
                        icon: "success",
                        html:  t(`detail.buy_complete_msg`),
                        titleText: t(`detail.buy_complete_title`),
                        showConfirmButton: true,
                    }).then(() => {
                        stopPolling();
                        navigate('/profile/history');
                    });
                }
                return;
            }).catch(_error => {
                dispatch(onToggleLoadingModalAction(false));
            })
            startPolling(1000);
        } else {
            dispatch(onToggleLoadingModalAction(false));
        }
    }, [])

    if (loading)
        return (<Loading/>)

    if (data?.getNFTById.error || !data?.getNFTById.nft) {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "ERROR MESSAGE"
        }).then(() => navigate('/'))
        return;
    }



    return (
        <div >
            <div className="item-single section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="top-bid">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={`thum-box ${data.getNFTById.nft.isOnSale === NftIsOnSale.OnSale && 'sell'}`}>
                                                <img src={data.getNFTById.nft.metadata?.image!} className="img-fluid thum-img w-100" alt="..."/>
                                                <div className="counts text-white">count : {data?.getNFTById.nft?.tradeCount}</div>
                                            </div>

                                            <div className="blockchain-info">
                                                <div className="contract">
                                                    <span>Contract Details</span>
                                                    <div className="txt">0x97c3522f1900b9a058zesav513d9561256849n4f86c
                                                    </div>
                                                </div>
                                                <div className="token">
                                                    <span>Token ID</span>
                                                    <div className="txt">{data?.getNFTById.nft?.tokenId}</div>
                                                </div>
                                                <div className="blockchain">
                                                    <span>Blockchain</span>
                                                    <div className="txt">Polygon</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <h1 className="mb-3" style={{wordBreak: 'break-all'}}>{data.getNFTById.nft.metadata?.name}</h1>

                                            <div className="owned-box">
                                                <img src={data.getNFTById.nft.owner?.profileImage!}
                                                     alt="" className="me-3 owned-img"/>

                                                <div className="owned-con">
                                                    <span>Owned by</span>
                                                    <h5 className="mb-0 owned">{data.getNFTById.nft.owner?.nickname}</h5>
                                                </div>
                                            </div>

                                            <p className="mb-3">{data.getNFTById.nft.metadata?.description}</p>


                                            <div className="nfw-price-box">
                                                <span>price</span>
                                                <h2 className="price">${data.getNFTById.nft.price}</h2>
                                            </div>

                                            <DetailButton nft={data.getNFTById.nft}/>

                                            <div className="history-area">
                                                <h4 className="card-title mb-3">History</h4>
                                                <div className="bid mb-3 card">
                                                    <div className="activity-content card-body py-0">
                                                        <ul>
                                                            {
                                                                data.getNFTById.nft.history?.map((item, index) => <DetailHistory item={item} key={index}/>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailContainer;