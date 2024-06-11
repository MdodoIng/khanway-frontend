const completeBtn = $('body > div.pop-600 > div.pop-container > button');
const closeBtn = $('body > div.pop-600 > div.top-header > button');
let apiPrefix = undefined;

const query = `query getDepositOrder($input: GetPaymentStateInput!) {
    getPaymentState(input: $input) {
        error {
            code
            message
        }
        payment {
            depositorName
            totalAmount
        }
    }
}`;

completeBtn.on('click', (e) => window.close());
closeBtn.on('click', (e) => window.close());

const getOrder = async (orderId) => {
    const response = await apiCall(query, {
        orderId: orderId
    });
    console.log('response', response);
    return response.getPaymentState.payment;
}

const onShowError = () => {
    Swal.fire({
        title: 'Error!',
        text: '잘못된 접근입니다.',
        icon: 'error',
        allowOutsideClick: false
    }).then(() => {
        location.href = '/';
    })
    onHideLoading();
}

document.addEventListener('DOMContentLoaded', async () => {
    onShowLoading();
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('orderId'))
        return onShowError();

    apiPrefix = urlParams.get('apiPrefix');

    const response = await apiCall(query, { orderId: urlParams.get('orderId') });
    if (!response || !response.getPaymentState || !response.getPaymentState.payment)
        return onShowError();

    const priceTag = $('body > div.pop-600 > div.pop-container > div > div > div:nth-child(1) > span');
    const nameTag = $('body > div.pop-600 > div.pop-container > ul > li:nth-child(1)');
    priceTag.text(`${addComma(response.getPaymentState.payment.totalAmount * 1300)} 원`);
    nameTag.text(`반드시 작성하신 입금자명 “${response.getPaymentState.payment.depositorName}” 으로 입금 바랍니다.`);
    onHideLoading();
});

