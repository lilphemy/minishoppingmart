import React, {useState, useEffect, useLayoutEffect} from "react";
import { MoveProduct } from "./pages/mainwebpage";


const useProductFetch = (datalink) => {
    const[product, setProduct] = useState([])

    const dataFetch = async () => {
        const fetch_data = await fetch(datalink);
        const fetched_data = await fetch_data.json();
        setProduct(fetched_data)
    }

    useLayoutEffect(() => {
        dataFetch()
    }, [datalink])

    return product
}


export default useProductFetch