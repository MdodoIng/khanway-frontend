import CountUp from "react-countup";

export type MintingCountProps = {
    totalSaleAmount?: number|null;
    type: string;
}

const MintingCount = (props: MintingCountProps) => {
    const { totalSaleAmount, type } = props;
    return (
        <CountUp enableScrollSpy={false} useGrouping={type === 'sale'}  duration={3} start={0} end={totalSaleAmount ?? 0} delay={0}>
            {({ countUpRef }) => (
                <div>
                    <span className={"counter"} ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
}

export default MintingCount;