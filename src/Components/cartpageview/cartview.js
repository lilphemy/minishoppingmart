import React, {useContext} from "react"
import Classes from "./cartview.module.css"
import {MoveProduct} from "../../pages/mainwebpage"



const CartViewer = function ({cartData, cartDisp, totalPrice}) {

    //const dataWell = MoveProduct()

    return (
        <React.Fragment>
            <section className={Classes.cartBlock}>
                <div className={Classes.closeCart} onClick={cartDisp}>
                    <span className={Classes.btnCart}>
                        <i className="fa-solid fa-x"></i>
                    </span>
                </div>
                <div className={Classes.cartSect}>
                    {
                        cartData.map((unitData, index) => {
                            const { id, fields: {company, featured, price, name, image} } = unitData;
                            console.debug(name, price)
                            return (
                                <React.Fragment key={index}>
                                    <div className={Classes.singleItem}>
                                        <div>
                                            <span className={Classes.closeItemBtn}><i className="fa-solid fa-circle-xmark"></i></span>
                                        </div>
                                        <div className={Classes.imgStyles}><img src={image[0].url} alt={name}></img></div>
                                        <div className={Classes.itemDetails}>
                                            <p>{name}</p>
                                            <p>${price}</p>
                                        </div>
                                        <div className={Classes.selectionBtn}>
                                            <span className={Classes.iconBtn}><i className="fa-solid fa-caret-up"></i></span>
                                            <span className={Classes.iconBtn}><i className="fa-solid fa-caret-down"></i></span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }

                    <div className={Classes.totalValues}>
                        Total price: {totalPrice}
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default CartViewer