import axios from "axios";

export default axios.create({
  baseURL: "https://furniture-api-production.up.railway.app/api/",
});
