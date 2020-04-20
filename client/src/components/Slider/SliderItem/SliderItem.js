import React from "react";
import styles from "./SliderItem.module.css";
import Button1 from "../../SiteButtons/Button1/Button1";

const SliderItem = (props) => {
  return (
    <div  className={styles.item}>
      <img src={props.img} alt="" />
      <h4>{props.headline}</h4>
      <p>{props.text}</p>
      <h5>{props.price}</h5>
      <Button1 to="/" text="add to cart" />
    </div>
  );
};

export default SliderItem;
