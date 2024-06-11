import {useTranslation} from "react-i18next";

export type MintingInfoProps = {
    blockNumber: string;
}

const MintingInfo = (props: MintingInfoProps) => {
    const {t} = useTranslation();
    const { blockNumber } = props;
    return (
        <>
            <div className="minting-period">
                <div className="period-txtbox">
                    <p className="period-txt">
                        <span>{t(`minting.period1`)}</span>{t(`minting.period2`)}
                    </p>
                </div>
            </div>

            <div className="min-block gridbox">
                <div className="block-title">
                    {t(`minting.block_title`)}
                </div>

                <div className="leftbox">
                    <span>{t(`minting.block_current`)}</span>
                    <h3 className="">#{blockNumber}</h3>
                </div>
                <div className="rightbox">
                    <span>{t(`minting.block_start`)}</span>
                    <h3 className="">#55833963</h3>
                </div>
            </div>
        </>
    )
}

export default MintingInfo;