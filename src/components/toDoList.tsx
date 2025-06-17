import React from "react";
import Card from "./toDoCard";
import { useContext } from "react";
import arrayContext from "../utility/array-Context";

// Item prop

export default function List() {
  const arrCon = useContext(arrayContext);
  let items = arrCon.arrObject;
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <Card itemName={item} itemNum={items.indexOf(item)} />
          </div>
        );
      })}
    </div>
  );
}
