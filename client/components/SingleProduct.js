import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSingleProduct,
    getSingleProduct,
} from "../slices/singleProductSlice";
import {
    addToCart,
    addProductToDBCart,
    editProductInDBCart,
    selectGetCart,
    getMyHomeCart,
} from "../slices/cartSlice";
import { selectSingleUser } from "../slices/singleUserSlice";
import EditProductForm from "./EditProductForm";
import {
    getIncompleteOrder,
    selectSingleOrder,
   addOrder 
} from "../slices/singleOrderSlice";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);

    const { productId } = useParams();
    const dispatch = useDispatch();

    const singleProduct = useSelector(selectSingleProduct);
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const userId = useSelector((state) => state.auth.me.id);
    const cart = useSelector(selectGetCart);
    const singleUser = useSelector(selectSingleUser);
    const incompleteOrder = useSelector(selectSingleOrder)

    const {
        productName,
        category,
        stockQuantity,
        description,
        price,
        imageUrl,
    } = singleProduct;

    useEffect(() => {
        dispatch(getSingleProduct(productId));
        if (userId) dispatch(getMyHomeCart(userId));
    if(!Object.keys(incompleteOrder).length){
         dispatch(addOrder({userId}))
    }
    }, [dispatch, userId, incompleteOrder]);

    useEffect(() => {
        if (!isLoggedIn) localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    if (!productName) {
        return <p>NO PRODUCTS FOUND</p>;
    }

    const increase = () => {
        setQuantity((count) => count + 1);
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity((count) => count - 1);
        }
    };

    const isAlreadyInCart = (cart, _productId) => {
        for (const item of cart) {
            if (item.productId == _productId) return [item.id, item.quantity];
        }
        return false;
    };

    const handleAddToCart = async(quantity, userId, productId, userCart, incompleteOrder) => {
        console.log("THIS IS INCOMPLETE ORDER ON FIRE:",incompleteOrder)
        if (isLoggedIn && userId && isAlreadyInCart(userCart, productId)) {
            const [id, cartQuantity] = isAlreadyInCart(userCart, productId);
            quantity += cartQuantity;
            dispatch(editProductInDBCart({ id, userId, productId, quantity }));
        // } else if (isLoggedIn && userId && Object.keys(incompleteOrder).length) {
        //     dispatch(addProductToDBCart({ userId, productId, quantity, orderId:incompleteOrder.id }));
        } else if (isLoggedIn && userId ) {
            dispatch(addProductToDBCart({ userId, productId, quantity, orderId:incompleteOrder.id }));
        } else {
            const newProduct = JSON.parse(JSON.stringify(singleProduct));
            newProduct["quantity"] = quantity;
            dispatch(addToCart(newProduct));
        }
    };

    const singleProductStyle = {
        display: "flex",
    };

    return (
        <div id="single-product">
            <div id="single-product-info" style={singleProductStyle}>
                {singleUser.isAdmin ? (
                    <EditProductForm />
                ) : (
                    <div id="productContainer">
                        <img src={`${imageUrl}`} height="400px" />
                        <section id="colorContainer">
                            <h1>{productName}</h1>
                            <h3>Category: {category}</h3>
                            <p>Details: {description}</p>
                            <section id="priceColorContainer">
                                <h3>Price: $ {price}</h3>
                                {stockQuantity > 0 ? (
                                    <button
                                        onClick={() =>
                                            handleAddToCart(
                                                quantity,
                                                userId,
                                                productId,
                                                cart, 
                                                incompleteOrder
                                            )
                                        }
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <div>OUT OF STOCK</div>
                                )}

                                <div className="quantityCounter">
                                    <br />
                                    <span className="quantityOutput">
                                        {" "}
                                        QTY: {quantity}{" "}
                                        <div className="btn-container">
                                            <button
                                                className="control__btn"
                                                onClick={decrease}
                                            >
                                                -
                                            </button>
                                            <button
                                                className="control__btn"
                                                onClick={increase}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </section>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
