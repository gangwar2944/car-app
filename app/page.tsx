import { getAllCars } from "@/actions/cars";
import Home from "./components/Home";

export default async function Page() {

  const carData = await getAllCars();
  // console.log("carData",carData.json());
  return <Home carData={carData.cars}/>;
}
