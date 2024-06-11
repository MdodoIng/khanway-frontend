export type ValidProps = {
    valid: boolean;
    text: string;
}
const ValidComponent = (props: ValidProps) => {
    if (props.valid)
        return <span className="success-msg">{props.text}</span>
    else
        return <span className="error-msg">{props.text}</span>
}

export default ValidComponent;