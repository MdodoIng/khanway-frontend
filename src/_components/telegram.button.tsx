import React, { Component, createRef } from "react";

interface TelegramLoginButtonProps {
    botName: string;
    dataOnauth?: (user: any) => void;
    buttonSize?: "large" | "medium" | "small";
    cornerRadius?: number;
    requestAccess?: string;
    usePic?: boolean;
    lang?: string;
    widgetVersion?: number;
    className?: string;
    children?: React.ReactNode;
    dataAuthUrl?: string;
}

class TelegramLoginButton extends Component<TelegramLoginButtonProps> {
    private instance: React.RefObject<HTMLDivElement>;

    constructor(props: TelegramLoginButtonProps) {
        super(props);
        this.instance = createRef();
    }

    componentDidMount() {
        const {
            botName,
            buttonSize,
            cornerRadius,
            requestAccess,
            usePic,
            dataOnauth,
            dataAuthUrl,
            lang,
            widgetVersion,
        } = this.props;

        (window as any).TelegramLoginWidget = {
            dataOnauth: (user: any) => dataOnauth && dataOnauth(user),
        };

        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?" + widgetVersion;
        script.setAttribute("data-telegram-login", botName);
        script.setAttribute("data-size", buttonSize || "large");
        if (cornerRadius !== undefined) {
            script.setAttribute("data-radius", cornerRadius.toString());
        }
        script.setAttribute("data-request-access", requestAccess || "write");
        script.setAttribute("data-userpic", usePic ? "true" : "false");
        script.setAttribute("data-lang", lang || "en");
        if (dataAuthUrl !== undefined) {
            script.setAttribute("data-auth-url", dataAuthUrl);
        } else {
            script.setAttribute(
                "data-onauth",
                "TelegramLoginWidget.dataOnauth(user)"
            );
        }
        script.async = true;
        this.instance.current?.appendChild(script);
    }

    render() {
        return (
            <div
                className={this.props.className}
                ref={this.instance}
            >
                {this.props.children}
            </div>
        );
    }
}

export default TelegramLoginButton;