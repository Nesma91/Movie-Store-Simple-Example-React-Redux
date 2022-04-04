import { axiosInstance } from "./axiosConfig";

export const getMovieDetails = (id) => {
  return axiosInstance.get(`${id}?api_key=6f2b7822a1c75da0790618a9387cf2bf`);
};

export const getMovie = () => {
  return axiosInstance.get(`/Movies`);
};
