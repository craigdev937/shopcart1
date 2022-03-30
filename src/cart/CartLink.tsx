import React from "react";
import styles from "./CartLink.module.css";
import { Link } from "react-router-dom";

export const CartLink = (): JSX.Element => {
    
    return (
        <React.Fragment>
            <Link to="/cart" className={styles.link}>
                <span className={styles.text}>
                     🛒&nbsp;&nbsp; 
                     {/* {numItems ? numItems : "Cart"} */}
                </span>
            </Link>
        </React.Fragment>
    );
};


