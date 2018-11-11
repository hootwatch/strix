import axios from "react-native-axios";

import config from "./config";

const ui = axios.create({ baseURL: config.atheneURL });

const read = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { data } = await ui.get("/user");

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });

export default { read };
