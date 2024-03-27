import { Product } from "./types";

export const getProductList = async () => {
  const response = await fetch(
    "https://side-effect-resource.azurewebsites.net/api/product"
  );
  const data: Product[] = await response.json();
  return data;
}