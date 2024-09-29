
export const BASE_URL: string = "http://localhost:3000";

const apiPath = {
  root: "/",
  carData:"data.json",
}

export const getMockCarDataURL = (): string =>
  `${BASE_URL}${apiPath.root}${apiPath.carData}`;
