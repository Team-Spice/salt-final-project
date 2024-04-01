import { Product, ReportChartDTO, ReportType, ReportTypeAll } from "./types";

const { VITE_API_BASE_URL } = import.meta.env;

export const getProductList = async () => {
  const response = await fetch(VITE_API_BASE_URL + "/product");
  const data: Product[] = await response.json();
  return data;
};

export const getSideEffectCount = async (
  productId: number,
  sideEffectId: number
) => {
  const response = await fetch(
    `${VITE_API_BASE_URL}/side-effect/${productId}/${sideEffectId}`
  );
  const data = await response.text();
  console.log(data);
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
  console.log("data " + data.id);
  const reportId = data.id;
  return reportId;
};

export const updateReport = async (reportId: number, newAge: string) => {
  await fetch(`${VITE_API_BASE_URL}/reports/${reportId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ age: newAge }),
  });
};

export const getAllReportsBySideEffect = async (productId: number) => {
  const response = await fetch(
    `${VITE_API_BASE_URL}/reports/product-chart/${productId}`
  );
  const data: ReportTypeAll[] = await response.json();
  // const amount: number = data.reduce(
  //   (acc, report) => acc + (report.amount ?? 0),
  //   0
  // );

  return data;
};

export const getDemographicChartData = async (
  productId: number,
  newAge: number
) => {
  try {
    const response = await fetch(
      `${VITE_API_BASE_URL}/reports/demographic-chart/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ age: newAge }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch demographic chart data");
    }
    const data: ReportChartDTO[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching demographic chart data:", error);
    throw error;
  }
};
