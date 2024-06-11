let price = undefined;
let count = undefined;
let amount = undefined;
let apiPrefix = undefined;

const name = $('body > div.pop-600 > div.pop-container > div.depositor-con > input');
const nameError = $('body > div.pop-600 > div.pop-container > div.depositor-con > span');
const submitBtn = $('body > div.pop-600 > div.pop-container > button');
const closeBtn = $('body > div.pop-600 > div.top-header > button');

const agree = $('#chk-pay');
const directDeposit = $('#pm1');
const creditCard = $('#pm2');


const inputFormat = /^\d{4}$/;
const submit_query = `mutation createMintOrder($input: CreateMintOrderInput!) {
    createMintOrder(input: $input) {
        error {
          code
          message
        }
        orderId
    }
}`;

closeBtn.on('click', (e) => window.close());
name.on('input', (e) => {
    setInputError(e.target.value);
    setBtnDisabledState();
})
agree.on('click', (e) => setBtnDisabledState())
directDeposit.on('click', (e) => setBtnDisabledState())
submitBtn.on('click', async (e) => {
    e.preventDefault();
    onShowLoading();
    const response = await apiCall(submit_query, {
        orderType: 'DIRECT_DEPOSIT',
        depositorName: name.val().replaceAll(' ', ''),
        amount: price,
        count: count,
    });
    if (!response) return onHideLoading();

    if (response) {
        window.open(`/popup/complete.html?orderId=${encodeURIComponent(response.createMintOrder.orderId)}&apiPrefix=${encodeURIComponent(apiPrefix)}`, '_blank');
        window.close();
    }
})

const setInputError = (input) => input.length !== 0 && inputFormat.test(input.slice(-4)) ? nameError.css('display', 'none') : nameError.css('display', 'block');
const setBtnDisabledState = () => (directDeposit.is(':checked') || creditCard.is(':checked'))  && name.val().length > 0 && inputFormat.test(name.val().slice(-4)) && agree.is(':checked')
    ? submitBtn.removeAttr('disabled')
    : submitBtn.attr('disabled', 'disabled');

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (!window.opener || !urlParams.has('price') || !urlParams.has('count') || !urlParams.has('amount'))
        return Swal.fire({
            title: 'Error!',
            text: '잘못된 접근입니다.',
            icon: 'error',
            allowOutsideClick: false
        }).then(() => {
            location.href = '/';
        })

    const _amount = urlParams.get('amount');
    const _count = urlParams.get('count');
    const _selectedAmount = urlParams.get('price');
    const _name = urlParams.get('name');

    price = _selectedAmount;
    count = _count;
    amount = _amount;
    apiPrefix = urlParams.get('apiPrefix');

    console.log('price', price, 'count', count, 'amount', amount, 'apiPrefix', apiPrefix);

    let countTag = $('body > div > div.pop-container > div.quantity > p.valu');
    let amountTag = $('body > div > div.pop-container > div.amount > p.valu');
    let priceTag = $('body > div.pop-600 > div.pop-container > div:nth-child(2) > p.valu');
    let nameTag = $('body > div.pop-600 > div.pop-container > div:nth-child(1) > p.valu');

    nameTag.text(_name);
    priceTag.text(`${addComma(_selectedAmount * 1300)} 원`);
    countTag.text(`${_count} 개`);
    amountTag.text(`${addComma(amount * 1300)} 원`);
    directDeposit.prop('checked', true);
});

