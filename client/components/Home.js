import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAsync, selectProducts } from '../slices/allProductsSlice';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsAsync())
}, [dispatch]);

  return (
    <div>

      <div id='AllProductFilters'>

      </div>

      <div id='AllProductSorting'>

      </div>

      <div id='products'>
        {products && products.length ? products.map((product) => {
          return(
            <div className='product' key={product.id}>
              <Link to={`/products/${product.id}`} key={`All Products: ${product.id}`}>
                <h2>{product.productName}</h2>
                <h3>{product.price}</h3>
              </Link>
            </div>
          )
        }) : null}
      </div>

    </div>
  );
};

export default Home;
