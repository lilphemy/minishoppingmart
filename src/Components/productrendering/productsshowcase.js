import React from "react";
import Classes from "./productshowcase.module.css"


function MainPagerView({dataCell, handleCart}) {
    

    return (
        <React.Fragment>
            <section className={Classes.productSect}>
                {
                    dataCell.map((product) => {
                        const { id, fields: { company, featured, colors, price, name, image } } = product;

                        return (
                            <React.Fragment key={id}>
                                <div className={Classes.itemBlock}>
                                    <img className={Classes.imgStyle} src={image[0].url} alt = {name}></img>
                                    <div className={Classes.prodDetails}>
                                        <h4>{company}</h4>
                                        <p>{featured}</p>
                                    </div>
                                    <div className={Classes.prodDetails}>
                                        <p>{name}</p>
                                        <p>${price}</p>
                                    </div>
                                    <button onClick = {() => handleCart(id)} className = {Classes.itemButton} type = "button">add to cart</button>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )

}

export default MainPagerView

