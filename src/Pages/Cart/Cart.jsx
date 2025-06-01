import React from 'react'
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
   return item.price *item.amount + amount 
  },0)

  const increament =(item)=>
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })

  const decrement =(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.card__container}>
          <h2>Hello</h2>
            <h3>Your shopping basket</h3>
            <hr />
            {
              basket?.length==0?(<p>Sorry! No item in your cart</p>):(
                basket?.map((item,i)=>{
                  return (
                    <section className={classes.card__product}>
                      <ProductCard
                        key={i}
                        product={item}
                        renderDesc={true}
                        renderAdd={false}
                        flex={true}
                      />
                      <div className={classes.btn_container}>
                        <button
                          className={classes.btn}
                          onClick={() => increament(item)}
                        >
                          <IoMdArrowDropup size={20}/>
                          {/* {" "}
                          +{" "} */}
                        </button>
                        <span>{item.amount}</span>
                        <button
                          className={classes.btn}
                          onClick={() => decrement(item.id)}
                        >
                          <IoMdArrowDropdown size={20} />
                          {/* {" "}
                          -{" "} */}
                        </button>
                      </div>
                    </section>
                  );

                })
              )
            }
        </div>

        
          {basket?.length !==0&&(
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
                <span>
                  <input type="checkbox" />
                  <small>This order contains a gift</small>
                </span>
                <Link to="/payments">Continue to checkout</Link>
            </div>

          )}
        
      </section>
    </Layout>
  );
}

export default Cart