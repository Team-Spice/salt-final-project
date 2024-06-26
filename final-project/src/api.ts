import { Product, ReportType, ReportTypeAll } from "./types";

type ResponseType<T> = {
  error: string | null;
  data: T | null;
}

const { VITE_API_BASE_URL } = import.meta.env;

export const getProduct = async (barcode: string): Promise<ResponseType<Product>> => {
  try {
    const response = await fetch(`${VITE_API_BASE_URL}/product/${barcode}`);
    const data: Product = await response.json();
    return { error: null, data: data };
  } catch (e: unknown) {
    let message = "something unexpected happened";

    if (e instanceof Error) {
      message = e.message;
    }
    return { error: message, data: null }
  }
}

export const getProductList = async () => {
  const response = await fetch(VITE_API_BASE_URL + "/product");
  const data: Product[] = await response.json();
  return data.sort((a,b) => a.name>b.name ? 1 : (a.name<b.name ? -1 : 0));
};

export const getSideEffectCount = async (
  productId: number,
  sideEffectId: number
) => {
  const response = await fetch(
    `${VITE_API_BASE_URL}/side-effect/${productId}/${sideEffectId}`
  );
  const data = await response.text();
  return data;
};

export const postReport = async (productId: number, sideEffectId: number) => {
  const response = await fetch(
    `${VITE_API_BASE_URL}/reports/${productId}/${sideEffectId}`,
    {
      method: "POST",
    }
  );
  const data: ReportType = await response.json();
  return data.id;
};

export const updateReport = async (
  reportId: number,
  newAge: string,
  newGender: string
) => {
  await fetch(`${VITE_API_BASE_URL}/reports/${reportId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ age: newAge, gender: newGender }),
  });
};

export const getAllReportsBySideEffect = async (productId: number) => {
  const response = await fetch(
    `${VITE_API_BASE_URL}/reports/product-chart/${productId}`
  );
  const data: ReportTypeAll[] = await response.json();

  return data.sort((a,b) => {
    const aName = a.sideEffectName;
    const bName = b.sideEffectName;
    if (aName > bName) {
      return 1;
    }
    if (aName < bName) {
      return -1;
    }
    return 0;
  });
};

export const getChartDataByAgeRange = async (productId: number, ageGroup: string, gender: string) => {
  if (productId === 0) {
    return;
  }
  const range = ageGroup.split('-');

  const response = await fetch(`${VITE_API_BASE_URL}/reports/demographic-chart/${productId}?`
      + new URLSearchParams({ gender: gender, ageFrom: range[0], ageTo: range[1] }))
  const data = await response.json();
  return data;
}
