import React from "react";
import style from "./text.module.css"

const TextHead = (props) => {
  return (
    <div class={style.textHead}>
      <h1 class={style.text_category}>{props.category}</h1>
      <p class={style.text_smol}>{props.text}</p>
    </div>
  );
};

export default TextHead;
