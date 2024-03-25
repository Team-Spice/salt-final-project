import { Product } from "../types";

export const mockedProduct: Product = {
  id: 1,
  name: 'Alvedon, 500mg',
  brand: 'Alvedon',
  description: 'Paracetamol',
  sideEffects: ['Headache', 'Nausea']
}

export const mockedChartData = {
    medicament: 'Alvedon',
    sideEffects: [ { name: 'nausea', amount: 3 }, { name: 'Headache', amount: 5 } ]
}
