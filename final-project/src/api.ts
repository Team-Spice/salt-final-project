import { Product } from "./types";

const baseUrl = "https://side-effect-resource.azurewebsites.net/api";

export const getProductList = async () => {
  const response = await fetch(
    baseUrl + "/product"
  );
  const data: Product[] = await response.json();
  return data;
}

export const getSideEffectCount = async (productId: number, sideEffectId: number) => {
  const response = await fetch(`${baseUrl}/side-effect/${productId}/${sideEffectId}`);
  const data = await response.text();
  console.log(data);
  return data;
}