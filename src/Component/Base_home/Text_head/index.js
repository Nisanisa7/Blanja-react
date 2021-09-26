import React from "react";
import style from "./text.module.css"

const TextHead = (props) => {
  return (
    <div className={style.textHead}>
      <h1 className={style.text_category}>{props.category}</h1>
      <p className={style.text_smol}>{props.text}</p>
    </div>
  );
};

export default TextHead;
