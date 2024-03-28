import { Product, ReportType } from "./types";

// const baseUrl = "https://side-effect-resource.azurewebsites.net/api"; //change to environment variables

// const { VITE_API_BASE_URL } = import.meta.env;

const baseUrl = "https://side-effect-resource.azurewebsites.net/api";

export const getProductList = async () => {
  const response = await fetch(baseUrl + "/product");
  const data: Product[] = await response.json();
  return data;
};

export const getSideEffectCount = async (
  productId: number,
  sideEffectId: number
) => {
  const response = await fetch(
    `${baseUrl}/side-effect/${productId}/${sideEffectId}`
  );
  const data = await response.text();
  console.log(data);
  return data;
};

export const postReport = async (productId: number, sideEffectId: number) => {
  const response = await fetch(
    `${baseUrl}/reports/${productId}/${sideEffectId}`,
    {
      method: "POST",
    }
  );
  const data: ReportType = await response.json();
  console.log("data " + data.id);
  const reportId = data.id;
  return reportId;
};

export const updateReport = async (reportId: number, newAge: string) => {
  await fetch(`${baseUrl}/reports/${reportId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ age: newAge }),
  });
};
