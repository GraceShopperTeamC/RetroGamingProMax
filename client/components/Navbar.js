import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/store";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect } from "react";
import { getSingleUser } from "../slices/singleUserSlice";
import {
    addToCart,
    checkoutCartSlice,
    selectGetCart,
} from "../slices/cartSlice";
import { getIncompleteOrder } from "../slices/singleOrderSlice";

const Navbar = () => {
    const cartNum = useSelector(selectGetCart);
    const username = useSelector((state) => state.auth.me.username);
    const userId = useSelector((state) => state.auth.me.id);
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutAndRedirectHome = () => {
        dispatch(checkoutCartSlice());
        dispatch(logout());
        navigate("/");
    };

    const basicNavStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    useEffect(() => {
        if (userId) dispatch(getSingleUser(userId));
        if (userId) dispatch(getIncompleteOrder(userId))
        const localSt = localStorage.getItem("cart");
        if (localSt) {
            const items = JSON.parse(localStorage.getItem("cart"));
            if (items && cartNum.length == 0 && !isLoggedIn) {
                items.map((item) => dispatch(addToCart(item)));
            }
        }
    }, [dispatch, userId]);

    const cartNumber = cartNum.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
    }, 0);

    return (
        <div id="navbarContainer">
            <nav id="navbarContainerEl">
                <div style={basicNavStyle}>
                    <Link to="/home">
                        <img
                            src="/logo/marioJump.png"
                            style={{ height: 50, width: 100 }}
                        />
                    </Link>
                    
                    <Link to="/home">Shop</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to={isLoggedIn ? "/account" : "/login"}>
                        My Account
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <div>Hello {username}</div>
                            <button
                                type="button"
                                onClick={logoutAndRedirectHome}
                                id='logoutBtn'
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                    <Link to="/cart">
                        <Badge
                            color="secondary"
                            overlap="rectangular"
                            badgeContent={cartNumber}
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;
