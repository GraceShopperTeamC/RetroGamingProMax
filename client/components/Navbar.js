import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/store";

const Navbar = () => {
    const username = useSelector((state) => state.auth.me.username);
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/login");
    };
    const basicNavStyle = {
        display: 'flex',
        flexdirection: 'column'
    } 

    return (
        <div>
            <nav>
                <div style={basicNavStyle}>
                    <Link to="/home">
                        <img src="retrogaming.jpg" style={{height: 100, width: 100}} />
                    </Link>
                    <Link to="/home">Shop</Link>
                    {isLoggedIn ? (
                        <>
                            <div>Hello {username}</div>
                            <button
                                type="button"
                                onClick={logoutAndRedirectHome}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;
