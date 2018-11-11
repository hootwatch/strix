import axios from "react-native-axios";

import config from "./config";

const vi = axios.create({ baseURL: config.atheneURL });

const read = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await vi.get("/vital");
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

const record = () =>
  new Promise((resolve, reject) => {
    try {
      const { data } = await vi.get("/vitals");
    } catch (e) {
      reject(e);
    }
  });
export default { read };
