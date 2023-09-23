import { client } from "./index";

export const makeGiwaHouseApi = async (payload) => {
  const response = await client.post("/broads", payload);
  return response;
};

export const getGiwaHouseApi = async (payload) => {
  const response = await client.get(`/broads/${payload}`);
  return response;
};
