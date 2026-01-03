import axios from "./axiosConfig";

export const createCompany = (data) => axios.post("/companies/create-company", data);

export const getCompanies = (params) => axios.get("/companies/get-companies", { params });

export const getCompanyById = (id) => axios.get(`/companies/get-company/${id}`);

export const updateCompany = (id, data) => axios.put(`/companies/update-company/${id}`, data);

export const deleteCompany = (id) => axios.delete(`/companies/delete-company/${id}`);
