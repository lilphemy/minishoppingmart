import React from "react"
import Classes from "./cartview.module.css"


const CartViewer = function ({cartData, cartDisp, totalPrice}) {

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
                        cartData.map((unitData) => {

                            const { id, fields } = unitData;

                            return (
                                <React.Fragment key={id}>
                                    <div className={Classes.singleItem}>
                                        <div className={Classes.imgStyles}><img src={fields.image[0].url} alt={fields.name}></img></div>
                                        <div className={Classes.itemDetails}>
                                            <p>{fields.name}</p>
                                            <p>{fields.price}</p>
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