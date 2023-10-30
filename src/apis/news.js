import { client } from ".";

export const deleteNewsApi = async (payload) => {
  const response = await client.delete(`/api/v1/notification?id=${payload}`);
  return response;
};
