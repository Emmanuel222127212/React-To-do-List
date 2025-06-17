import React, { useContext, useState } from "react";
import arrayContext from "../utility/array-Context";

interface CardName {
  itemName: string;
  itemNum: number;
}

export default function Card({ itemName, itemNum }: CardName) {
  const arrCon = useContext(arrayContext);

  //hooks to handle change
  const [MustEdit, setEdit] = useState(false);
  const [changedValue, setChange] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setChange(e.target.value);
    }
  };

  const logChange = () => {
    arrCon.edit(itemNum, changedValue);
    setEdit(false);
  };
  return (
    <div>
      {/*this will be the item name container */}
      {MustEdit ? (
        <>
          <input placeholder={itemName} onChange={handleChange} />
          <button onClick={logChange}> Log Change</button>
        </>
      ) : (
        <p>{itemName}</p>
      )}

      {/*this will be the actions container */}
      <div>
        <button>
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          <i className="fa-solid fa-pen-nib"></i>
        </button>
        <button
          onClick={() => {
            arrCon.remove(itemNum);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
