import React from "react";

interface ArraytType<T> {
  arrObject: T[];
  add: (item: T) => void;
  remove: (item: number) => void;
  edit: (item: number, content: T) => void;
}

const arrayContext = React.createContext<ArraytType<string>>({
  arrObject: [],
  add: () => {},
  remove: () => {},
  edit: () => {},
});

export default arrayContext;
