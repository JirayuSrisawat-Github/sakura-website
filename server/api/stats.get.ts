import { CLIENT_API } from "../config";

export default defineEventHandler(async (event) => {
  const response = await fetch(`${CLIENT_API}/api/stats`).then((_) => _.json());

  return response;
});
