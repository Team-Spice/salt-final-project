export const getProduct = async () => {
  const response = await fetch(
    "https://side-effect-resource.azurewebsites.net/api/product"
  );
  const data = await response.json();
  return data;
}