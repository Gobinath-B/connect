/** @format */

import React from "react";
import "./index.scss";

export default function Button({ title, onClick, style }) {
     return (
          <button
               style={style}
               className="common-btn"
               onClick={onClick}>
               {title}
          </button>
     );
}
