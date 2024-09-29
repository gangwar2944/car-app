import { getMockCarDataURL } from "@/services/general/constants";
import { CarsData } from "./type";

export async function getAllCars() {
  const response = await fetch(getMockCarDataURL());
  const data = (await response.json()) as CarsData;
  return data!==undefined?data:{} as CarsData;
}