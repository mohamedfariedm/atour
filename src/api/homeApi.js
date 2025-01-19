import axiosInstance from "./axiosInstance";

const HomeAPI = {
  getHomeData: async () => {
    const response = await axiosInstance.get("/home");
    return response.data;
  },
};

export default HomeAPI;
