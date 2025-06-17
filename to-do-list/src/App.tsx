import List from "./components/toDoList";
import Item from "./components/toDoItem";
import arrayContext from "./utility/array-Context";
import { useEffect, useState } from "react";
import { AddItem, RemoveItem, EditItem } from "./utility/arrayHandler";
import React from "react";
import { StoreToLocal } from "./utility/StorageHandler";

function App() {
  let newList: string[] = [];

  const [itemContainer, setContainer] = useState<string[]>([]);
  const addfunction = (itemtoAdd: string) => {
    setContainer((old) => {
      newList = AddItem<string>(old, itemtoAdd);
      StoreToLocal(newList);
      return newList;
    });
  };

  const removefunction = (itemtoRemove: number) => {
    setContainer((old) => {
      newList = RemoveItem<string>(old, itemtoRemove);
      StoreToLocal(newList);
      return newList;
    });
  };

  const editfunction = (itemIndex: number, content: string) => {
    setContainer((old) => {
      newList = EditItem<string>(old, itemIndex, content);
      StoreToLocal(newList);
      return newList;
    });
  };

  //storing the array
  useEffect(() => {
    if (!localStorage) return;

    const raw = localStorage.getItem("itemContainer");
    if (raw) {
      console.log("in here");
      const parseList = JSON.parse(raw);
      if (Array.isArray(parseList)) {
        setContainer(parseList);
      }
    }
  }, []);
  return (
    <React.Fragment>
      <arrayContext.Provider
        value={{
          arrObject: itemContainer,
          add: addfunction,
          remove: removefunction,
          edit: editfunction,
        }}
      >
        <Item />
        <List />
      </arrayContext.Provider>
    </React.Fragment>
  );
}

export default App;
