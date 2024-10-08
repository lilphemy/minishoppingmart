import React from "react"
import MainPageChal from "./pages/mainwebpage"
import CartDisplay from "./pages/chartView/cartpage"
import {Routes, Route} from "react-router-dom"


const RouterPath = () => {


    return(

        <React.Fragment>
            <Routes>
                <Route path = "/" element = {<MainPageChal/>}/>
                <Route path = "/cart" element = {<CartDisplay/>}/>
            </Routes>
            
        </React.Fragment>
    )
}
 

export default RouterPath