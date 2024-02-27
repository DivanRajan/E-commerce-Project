import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import {product_images} from "./productImages";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(product_images);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
    console.log(filter,"filter")
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(product_images);
        setFilter(product_images);
        setLoading(false);
        
      }

      return () => {
        componentMounted = false;
      };
    };
    console.log(data,"ini")
    getProducts();
    
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };
console.log(product_images);
  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    console.log(data,"ini")
    const navigate = useNavigate();
    const goToCart = () =>{
      navigate("/cart")
    }
    return (
      <>
       <style>{`
       .zoom:hover {
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1.1); /* Safari 3-8 */
        transform: scale(1.1); 
        
      `}
      </style>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All Categories</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Super Market Racks")}>Super Market Racks</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Mobile Racks")}>
          Mobile Racks
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Medical Racks")}>Medical Racks</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Textile Racks")}>Textile Racks</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" onClick={()=>{filterProduct(product.category)}}>
              <div className="card text-center h-100 zoom" key={product.id} >
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title" title={product.title}>
                    {product.title.substring(0, 12)}...
                  </h5>
                  {/* <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p> */}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  {/* <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link> */}
                  <button className="btn btn-dark m-1"  data-toggle="modal" data-target="#exampleModal" onClick={() => addProduct(product)} >
                    Add to Cart
                  </button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SAIRAM RACKS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Product Added !
      </div>
      {/* <div class="modal-footer">
        <button type="button"  class="btn btn-primary" onClick={goToCart}>Go To Cart</button>
      </div> */}
    </div>
  </div>
</div>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
