import axios from "./axiosConfig";

export const createDriver = (data) => axios.post("/drivers/create-driver", data);

export const getDrivers = (params) =>
  axios.get("/drivers/get-drivers", { params });

export const getDriverById = (id) =>
  axios.get(`/drivers/get-driver/${id}`);

export const updateDriver = (id, data) =>
  axios.put(`/drivers/update-driver/${id}`, data);

export const deleteDriver = (id) =>
  axios.delete(`/drivers/delete-driver/${id}`);
