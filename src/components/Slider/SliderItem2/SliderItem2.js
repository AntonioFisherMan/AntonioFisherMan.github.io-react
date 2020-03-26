import React from "react";
import styles from "../SliderItem/SliderItem.module.css";

const SliderItem2 = (props) => {
  return (
    <div  className={styles.item}>
      <img src={props.img} alt="" />
    </div>
  );
};

export default SliderItem2;
