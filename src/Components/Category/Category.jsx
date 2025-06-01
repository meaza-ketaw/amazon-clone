import React from "react";
import { catagoryInfos } from "./CatagoryFullInfo.js";
import CatagoryCard from "./CategoryCard.jsx";
import classes from "./catagory.module.css";

function Category() {
  return (
    <section className={classes.catagory__container}>
      {catagoryInfos.map((infos) => (
        <CatagoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
