export type VerifyButtonProps = {
    children: React.ReactNode;
    number: string;
    title: string|React.ReactNode;
}
const VerifyButton = (props: VerifyButtonProps) => {
    const { number, title, children }= props
    return (
        <div className="m-item">
            <div className="txt  align-content-center align-items-center">
                <div className="num">{number}</div>
                <div className="tit align-content-center">{title}</div>
            </div>
            <div className={"align-content-center align-items-center"} >
                {children}
            </div>
        </div>
    )
}

export default VerifyButton;