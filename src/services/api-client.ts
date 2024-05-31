import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "05629b3dc14e4624a55cea5c3148867f",
  },
});
