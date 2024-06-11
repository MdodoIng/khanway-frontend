import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
// import {useMutation} from "@apollo/client";
// import {CHECK_OUT_ORDER} from "../../queries/payment.query.tsx";
// import {PaypalType} from "Khanway/types/data/paypal.type.tsx";

const PaymentComponent = () => {
    // const [checkOutOrder] = useMutation(CHECK_OUT_ORDER);

    // const onApprove = async (data: PaypalType): Promise<void> => {
    //     return new Promise((resolve) => {
    //         console.log(data);
    //         checkOutOrder({
    //             variables: {
    //                 input: {
    //                     order_id: data.orderID
    //                 }
    //             }
    //         }).then((data) => {
    //             console.log(data);
    //             resolve();
    //         }).catch((err) => {
    //             console.log(err);
    //             resolve();
    //         })
    //         // actions.order.capture().then((details: any) => {
    //         //     console.log(details);
    //         //     resolve();
    //         // }).catch((err) => {
    //         //     console.log(err);
    //         //     resolve();
    //         // });
    //     })
    // }


    return (
        <PayPalScriptProvider options={{ clientId: "AZodXobc-0j1wr6WLHFBgTOfXdwy8t3IVAIqXwulivDsvASqkJ7kq87q7hBWYNVsb1wxWCXBh8cfvW5M" }}>
            <PayPalButtons
                // createOrder={() => createOrder().then(data => data.data.createOrder.orderId).catch(err => console.log(err))}
                // onApprove={onApprove}
            />
        </PayPalScriptProvider>
    );
}
export default PaymentComponent;