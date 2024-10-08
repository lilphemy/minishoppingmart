import React, { useReducer, useContext, useLayoutEffect } from "react";
import MainPagerView from "../../Components/productrendering/productsshowcase";
import HeaderPagerView from "../../Components/headerpageview/headerview";
import CartViewer from "../../Components/cartpageview/cartview";
//import useProductFetch from "../../dataBucket";

export let productCont = React.createContext("");
let cartContext = React.createContext("");

const dataLink = "javascript-store-products"


const reducer = (state, action) => {

    if (action.type === "LOAD_DATA") {
        return { ...state, mallCont: action.payload }
    }

    if (action.type === "ADD_ITEM") {
        const itemValue = state.mallCont.filter((unit) => unit.id === action.payload)
        return {
            ...state,
            cartItems: [...state.cartItems, ...itemValue],
            actionStatement: "item added",
            cartCount: state.cartCount++,
            priceTotal: state.priceTotal + itemValue[0].fields.price,
        }
    }

    if (action.type === "OPEN_CART") {
        return { ...state, viewCart: !state.viewCart }
    }

    if (action.type === "CLOSE_CART") {
        return { ...state, viewCart: !state.viewCart }
    }

    throw new Error("action type a mystery")
}

const valueDefault = {
    mallCont: [],
    cartItems: [],
    priceTotal: 0,
    cartCount: 0,
    actionStatement: "",
    viewCart: false,
}


export function MoveProduct() {
    return useContext(productCont)
}

function MainPageChal() {

    //const products = useProductFetch(dataLink)
    const [state, dispatch] = useReducer(reducer, valueDefault)
    //const { cartAllCont, setCartAllCont } = useState([...state.cartItems])

    //dispatch({ type: "LOAD_DATA", payload: products})

    

    const handleCart = (prodID) => {
        dispatch({ type: "ADD_ITEM", payload: prodID, totalPriceSum: state.priceSum })
    }

    console.log(state.cartItems.length, state.cartItems)

    const viewCart = () => {
        dispatch({ type: "OPEN_CART" })
    }

    const closeCart = () => {
        dispatch({ type: "CLOSE_CART" })
    }

    const dataFetch = async (linkvar) => {
        const fetch_data = await fetch(linkvar);
        const fetched_data = await fetch_data.json();
        console.log(fetch_data)
        //setProduct(fetched_data)
        dispatch({ type: "LOAD_DATA", payload: fetched_data })
    }

    useLayoutEffect(() => {
        dataFetch(dataLink)
    })

    console.debug(state.mallCont)
    return (
        <React.Fragment>
            <productCont.Provider value={state.cartItems}>
                <cartContext.Provider value={handleCart}>
                    <HeaderPagerView countBuck={state.cartCount} cartLogic={viewCart} />
                    <MainPagerView dataCell={state.mallCont} handleCart={handleCart} />
                    {state.viewCart && <CartViewer cartData={state.cartItems} cartDisp = {closeCart} totalPrice = {state.priceTotal}/>}
                </cartContext.Provider>
            </productCont.Provider>
        </React.Fragment>
    )

}

export default MainPageChal; 