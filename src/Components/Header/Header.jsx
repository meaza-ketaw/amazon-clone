import React from 'react'

import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';


function Header() {

  const [{user, basket}, dispatch] =useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)
  // console.log(basket.length);

  return (
    <section className={classes.fixed}>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo section */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery section*/}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin /> {/* icon */}
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* search section*/}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <FaSearch size={38} /> {/* icon */}
        </div>
        {/* right side link */}
        <div className={classes.order__container}>
          <Link to="" className={classes.language}>
            <img
              src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]} </p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} /> {/* icon */}
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header