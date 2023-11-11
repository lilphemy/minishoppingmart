import React from "react";
import Classes from "./headerview.module.css"

function HeaderPagerView({countBuck, cartLogic}) {
    return (
        <React.Fragment>

            <nav className={Classes.navBar}>
                <div className={Classes.headerSect}>
                    <span className={Classes.martIcon}><i className="fa-solid fa-store"></i></span>
                    <div className={Classes.titleBlock}>
                        <h2 className={Classes.headTitle}>Lilphemy supermart!</h2>
                    </div>
                </div>

                <div className={Classes.sectionalNavs}>
                    <ul>
                        <li><h4>mobile</h4></li>
                        <li><h4>fashion</h4></li>
                        <li><h4>computers</h4></li>
                        <li><h4>funitures</h4></li>
                        <li><h4>footwears</h4></li>
                    </ul>
                    <div className = {Classes.cartStyles} onClick={cartLogic}>
                        <span className = {Classes.cartIcon}><i className="fa-solid fa-cart-arrow-down"></i><div className = {Classes.countBlock}>{countBuck}</div></span>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default HeaderPagerView