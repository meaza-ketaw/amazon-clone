import React from 'react'
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { productUrl } from '../../Api/endpoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';


function ProductDetail() {
  
  const [product, setProduct] = useState({});
  // console.log(productId);
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
    setProduct(res.data)
    setIsLoading(false)
   }).catch((err)=>{
    console.log(err)
    setIsLoading(false)
   })
  }, [])
  return (
    <Layout>
      {isLoading? (<Loader />) : (<ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}
      
      />)}
    </Layout>
  )
}

export default ProductDetail