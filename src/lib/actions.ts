"use server";

import axios from "axios";
import { SAKURA_API_URL } from "./config";

export const getLavalinkStats = async () => {
  const { data } = await axios.get(SAKURA_API_URL! + "/api/stats");

  return data?.lavalink;
};

export const getClientStats = async () => {
  const { data } = await axios.get(SAKURA_API_URL! + "/api/stats");

  return data?.client;
};
