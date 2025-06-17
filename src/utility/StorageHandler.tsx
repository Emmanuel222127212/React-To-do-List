export function StoreToLocal<T>(array: T[]) {
  localStorage.setItem("itemContainer", JSON.stringify(array));
}
