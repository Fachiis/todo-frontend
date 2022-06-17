import axios from "axios";
import config from "../../src/constants/config.json";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedError) {
		toast.error("An unexpected error occurred.");
	}
	return Promise.reject(error);
});

const axiosInstance = axios.create({
	baseURL: config.apiEndpoint,
	timeout: 5000,
	headers: {
		Authorization: "Bearer " + localStorage.getItem("access_token"),
		"Content-Type": "application/json",
		accept: "application/json",
	},
});

const http = {
	get: axiosInstance.get,
	post: axiosInstance.post,
	put: axiosInstance.put,
	delete: axiosInstance.delete,
	patch: axiosInstance.patch,
};

export default http;
