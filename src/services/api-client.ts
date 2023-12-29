import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68a6334bd9c241348a69274226a3b132",
  },
});
