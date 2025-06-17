import React, { useState } from "react";
import { useContext } from "react";
import arrayContext from "../utility/array-Context";
export default function Item() {
  const [Item, setItem] = useState("");

  const arrCon = useContext(arrayContext);

  const Itemset = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setItem(e.target.value);
    }
  };

  const addtoList = () => {
    arrCon.add(Item);
    setItem("");
  };

  return (
    <header className="">
      <input placeholder="enter text.." value={Item} onChange={Itemset} />
      <button
        className="border-2 rounded-4 shadow-2xs bg-amber-900"
        onClick={addtoList}
      >
        Add item
      </button>
    </header>
  );
}
