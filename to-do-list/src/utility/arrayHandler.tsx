export function AddItem<T>(array: T[], itemToAdd: T): T[] {
  return [...array, itemToAdd];
}

export function RemoveItem<T>(array: T[], index: number): T[] {
  return array.filter((item: T, indexofItem: number) => indexofItem != index);
}

export function EditItem<T>(array: T[], index: number, newContent: T) {
  return [
    ...array.filter((item: T, indexofItem: number) => indexofItem < index),
    newContent,
    ...array.filter((item: T, indexofItem: number) => indexofItem > index),
  ];
}
