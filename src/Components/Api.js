import axios from "axios";

const baseURL = "https://blood-save-life-bakend.onrender.com";

export default axios.create({ baseURL: baseURL });
