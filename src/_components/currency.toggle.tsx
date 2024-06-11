import {useDispatch, useSelector} from "react-redux";
import {onUpdateCurrencyAction, onUpdateCurrencyUnitAction} from "@action/common.action.tsx";
import {RootState} from "@reducer/root.reducer.tsx";
import {CurrencySymbol, useGetCurrencyExchangeLazyQuery} from "@graphql/graphql.ts";
import {useEffect} from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./currency.toggle.css"
import {styled} from "@mui/material";

const MaterialUISwitch = styled(ToggleButton)(({ name }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        cursor: "pointer",
        display: "inline-block",
        fontSize: "14px",
        padding: "8px 16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "white",
        background: "linear-gradient(130deg, #78ffe0 20%, rgb(121, 200, 253) 51.8%, #d260ff 100%)",
        // marginTop: '-1px',
        // marginLeft: '-1px',
        // marginLeft: '10px',
        borderTopLeftRadius: name === 'left' ? "29px" : "0",
        borderBottomLeftRadius: name === 'left' ? "29px" : "0",
        borderTopRightRadius: name === 'right' ? "29px" : "0",
        borderBottomRightRadius: name === 'right' ? "29px" : "0",
        // borderBottomLeftRadius: borderBottomLeftRadius,

        "& .currency-toggle-btn-text": {
            span: {
                background: 'none',
                color: 'black',
                "-webkit-text-fill-color": "black",
            }
        },

        "& .currency-toggle-btn-icon": {
            background: 'none',
            borderRadius: '50%',
            border: '2px solid black',
            span: {
                background: 'none',
                color: 'black',
                "-webkit-text-fill-color": "black",
            }

        }
    }
}));

const CurrencyToggle = () => {
    const dispatch = useDispatch();
    const {currencyUnit} = useSelector((root: RootState) => root.CommonReducer);

    const [getCurrencyExchange] = useGetCurrencyExchangeLazyQuery();

    const onToggleCurrency = async (currency: string) => {
        const response = await getCurrencyExchange({
            variables: {
                input: {
                    symbol: currency === 'USD' ? CurrencySymbol.Krw : CurrencySymbol.Inr
                }
            }
        });
        dispatch(onUpdateCurrencyAction(response.data?.getCurrencyExchange.currencyExchange!))
        dispatch(onUpdateCurrencyUnitAction(currency))
    }

    useEffect(() => {
        if (localStorage.getItem('khanway_language') === 'ko')
            onToggleCurrency('USD');
    }, [localStorage.getItem('khanway_language')])


    useEffect(() => {
        if (localStorage.getItem('khanway_language') === 'ko')
            onToggleCurrency('USD');
        else
            onToggleCurrency(currencyUnit)
    }, [])


    const onUpdate = (e: any) => {
        console.log(e)
        if (e.target.value === currencyUnit || !e.target.value) return;
        onToggleCurrency(e.target.value ?? currencyUnit);
    }

    return (
        <ToggleButtonGroup
            className={`currency-toggle ${localStorage.getItem('khanway_language') === 'ko' && 'visually-hidden'}`}
            value={currencyUnit}
            exclusive
            onChange={(e) => onUpdate(e)}
            aria-label="Platform"
            disabled={localStorage.getItem('khanway_language') === 'ko'}
        >
            <MaterialUISwitch className={"currency-toggle-btn d-flex"} value="USD" name={'left'}>
                <div className={"currency-toggle-btn-icon"}><span>$</span></div>
                <div className={"currency-toggle-btn-text"}><span>USD</span></div>
            </MaterialUISwitch>
            <MaterialUISwitch className={"currency-toggle-btn d-flex"} value="INR" name={"right"} onClick={(e) => onUpdate(e)}>
                <div className={"currency-toggle-btn-icon"} defaultValue={"INR"}><span defaultValue={"INR"}>₹</span></div>
                <div className={"currency-toggle-btn-text"}><span>INR</span></div>
            </MaterialUISwitch>
        </ToggleButtonGroup>
    )
}

export default CurrencyToggle;