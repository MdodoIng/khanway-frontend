import {addComma} from "@helper/data.util.tsx";
import {NftPriceCap} from "@graphql/graphql.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "@reducer/root.reducer.tsx";
import Swal from "sweetalert2";
// import {onToggleLoadingModalAction} from "@action/modal.action.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export type MintingSubmitProps = {
    priceCap: Array<NftPriceCap>;
}

const MintingSubmit = (props: MintingSubmitProps) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    // const dispatch = useDispatch();
    const {user} = useSelector((root: RootState) => root.AuthReducer);

    const [selectedAmount, setSelectedAmount] = useState<number>();
    const [count, setCount] = useState<number>(1);
    const [amount, setAmount] = useState<number>(0);
    const [mintButtonDisable, setMintButtonDisable] = useState<boolean>(true);

    // const [createOrder] = useCreateMintOrderMutation();

    useEffect(() => {
        if (selectedAmount) {
            setAmount(selectedAmount! * count);
            setMintButtonDisable(false);
        } else
            setMintButtonDisable(true);

    }, [selectedAmount, count]);

    const onClickCreateOrder = () => {
        if (!user)
            return Swal.fire({
                icon: "error",
                title: t('common.unauthorized_title'),
                text: t('common.unauthorized_reject'),
                showConfirmButton: true,
            }).then(() => {
                navigate('/auth/login');
            });
        // else if (user.countryCode !== '+82')
        //     onCreateOrder(PaymentOrderType.Paypal);
        // else if (user.countryCode === '+82')
        //     openPopup()
        else
            openPopup();
    }

    const openPopup = () => {
        const apiPrefix = encodeURIComponent(import.meta.env.VITE_APP_LOCAL_URL);
        const url = `/popup/payment.html?name=KhanHwang's EGG $${selectedAmount}&amount=${amount}&count=${count}&price=${selectedAmount}&apiPrefix=${apiPrefix}`;
        window.open(url, '_blank', `width=${screen.width}, height=${screen.height}, fullscreen=yes`,);
    }

    // const onCreateOrder = (orderType: string, depositorName?: string) => {
    //     dispatch(onToggleLoadingModalAction(true));
    //     createOrder({
    //         variables: {
    //             input: {
    //                 orderType: orderType,
    //                 depositorName: depositorName,
    //                 amount: selectedAmount!.toString(),
    //                 count: count.toString(),
    //             }
    //         }
    //     }).then(response => {
    //         if (response.data?.createMintOrder.error)
    //             throw new Error(response.data?.createMintOrder.error.message ?? '');
    //         else
    //             return response.data!.createMintOrder
    //     }).then(response => window.location.href = response.approveUrl!).catch(_error => {
    //         dispatch(onToggleLoadingModalAction(false));
    //         if (_error.message === "Max Cap") {
    //             return Swal.fire({
    //                 icon: "error",
    //                 text: t(`minting.maxCap_fail`),
    //                 showConfirmButton: true,
    //                 confirmButtonText: t(`minting.confirm_button`)
    //             })
    //         } else {
    //             return Swal.fire({
    //                 icon: "error",
    //                 text: t(`minting.create_order_fail`),
    //                 showConfirmButton: true,
    //                 confirmButtonText: t(`minting.confirm_button`)
    //             })
    //         }
    //     })
    // }

    return (
        <div className="min-block last ">
            <div className="volume-box">
                {
                    props.priceCap.map((item, index) =>
                        <button className={`volume-items item0${index + 1} ${selectedAmount === item.price ? 'active' : ''}`}
                                disabled={item.maxCap! <= item.currentCap!}
                                onClick={() => setSelectedAmount(item.price!)}>$ {item.price}</button>
                    )
                }
            </div>

            <div className="block-title">
                {t(`minting.amount`)}
            </div>
            <div className="acount-box">
                <button className="minus" onClick={() => count > 1 ? setCount(count - 1) : setCount(count)}>-</button>
                <div className="count">{count}</div>
                <button className="plus" onClick={() => setCount(count + 1)}>+</button>
            </div>

            <div className="total-box">
                <div className="block-title">
                    {t(`minting.price`)}
                </div>
                <div className="total-price">
                    <span>$</span><span className="price">{addComma(amount)}</span>
                </div>
            </div>

            <button className="btn btn-secondary w100" disabled={mintButtonDisable}
                    onClick={() => onClickCreateOrder()}>{t(`minting.button`)}
            </button>
        </div>
    )
}

export default MintingSubmit;