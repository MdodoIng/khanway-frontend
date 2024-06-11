import {NftIsOnSale} from "@graphql/graphql.ts";

export type ExploreFilterProps = {
    category: Array<string>,
    price: Array<string>,
    tradeCount: Array<number>,
    isOnSale: Array<NftIsOnSale>,
    setCategory: (value: Array<string>) => void,
    setPrice: (value: Array<string>) => void,
    setTradeCount: (value: Array<number>) => void,
    setIsOnSale: (value: Array<NftIsOnSale>) => void,
}

const ExploreFilter = (props: ExploreFilterProps) => {
    const {category, price, tradeCount, isOnSale, setCategory, setPrice, setTradeCount, setIsOnSale} = props;

    const onClickIsOnSale = (value: NftIsOnSale[]) => {
        let newIsOnSale = [...isOnSale];
        for (const state of value) {
            if (isOnSale.includes(state)) {
                newIsOnSale = newIsOnSale.filter((item) => item !== state);
            } else {
                newIsOnSale.push(state);
            }
        }
        setIsOnSale(newIsOnSale);
    }

    const onClickPrice = (value: string) => {
        if (price.includes(value)) {
            setPrice(price.filter((item) => item !== value));
        } else {
            setPrice([...price, value]);
        }
    }

    const onClickTradeCount = (value: number) => {
        if (tradeCount.includes(value)) {
            setTradeCount(tradeCount.filter((item) => item !== value));
        } else {
            setTradeCount([...tradeCount, value]);
        }
    }

    const onClickCategory = (value: string) => {
        if (category.includes(value)) {
            setCategory(category.filter((item) => item !== value));
        } else {
            setCategory([...category, value]);
        }
    }

    return (
        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
            <div className="filter-sidebar">
                <div className="filter-sidebar-content">
                    <h5>Status</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickIsOnSale([NftIsOnSale.OnSale])}
                               defaultChecked={isOnSale.includes(NftIsOnSale.OnSale)}
                               id="flexCheckDefault1"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault1">On Sale</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickIsOnSale([NftIsOnSale.NotOnSale, NftIsOnSale.PendingPayment])}
                               id="flexCheckDefault2" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault2">Not On Sale</label>
                    </div>
                </div>
                <div className="filter-sidebar-content">
                    <h5>Amount</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickPrice('550')}
                               id="flexCheckDefault3" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault3">$ 500</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickPrice('220')}
                               id="flexCheckDefault4" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault4">$ 200</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickPrice('110')}
                               id="flexCheckDefault5" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault5">$ 100</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickPrice('55')}
                               id="flexCheckDefault6" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault6">$ 50</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickPrice('27.5')}
                               id="flexCheckDefault7" value=""/>
                        <label className="form-check-label" htmlFor={'flexCheckDefault7'}>$ 25</label>
                    </div>
                </div>

                <div className="filter-sidebar-content">
                    <h5>Category</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickCategory('CATEGORY_TYPE_01')}
                               id="flexCheckDefault8" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault8">CATEGORY_TYPE_01</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickCategory('CATEGORY_TYPE_02')}
                               id="flexCheckDefault9" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault9">CATEGORY_TYPE_02</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickCategory('CATEGORY_TYPE_03')}
                               id="flexCheckDefault10" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault10">CATEGORY_TYPE_03</label>
                    </div>
                </div>
                <div className="filter-sidebar-content">
                    <h5>Remaining Count</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(9)}
                               id="flexCheckDefault11" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault11">9</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(8)}
                               id="flexCheckDefault12" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault12">8</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(79)}
                               id="flexCheckDefault13" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault13">7</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(6)}
                               id="flexCheckDefault14" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault14">6</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(5)}
                               id="flexCheckDefault15" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault15">5</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(4)}
                               id="flexCheckDefault16" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault16">4</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(3)}
                               id="flexCheckDefault17" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault17">3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(2)}
                               id="flexCheckDefault18" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault18">2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onClick={() => onClickTradeCount(1)}
                               id="flexCheckDefault19" value=""/>
                        <label className="form-check-label" htmlFor="flexCheckDefault19">1</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreFilter;