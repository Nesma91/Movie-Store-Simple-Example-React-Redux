import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    //   SHOW LOADER
    console.log("INTERCEPTOR", config);
    // Do something before request is sent
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjJiNzgyMmExYzc1ZGEwNzkwNjE4YTkzODdjZjJiZiIsInN1YiI6IjYyNDQ0YzhjZGZlMzFkMDA0NzVlNzU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X_sk-H4yh5jaRsd3I3SBVCD71m1jmL8u8LCLDSxdtyI";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
