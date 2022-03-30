import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartLink } from "../cart/CartLink";

export const Navbar = (): JSX.Element => (
    <React.Fragment>
        <header className={styles.header}>
            <nav>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="/products">Products</Link>
                <CartLink />
            </nav>
        </header>
    </React.Fragment>
);



