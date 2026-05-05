import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

const AUTH_PATHS = ["/auth/refresh", "/auth/login", "/auth/register", "/auth/google"];

API.interceptors.response.use(
  (res) => res,
  async (error) => {
    const url = error.config?.url || "";
    const isAuthEndpoint = AUTH_PATHS.some((p) => url.includes(p));
    if (error.response?.status === 401 && !error.config._retry && !isAuthEndpoint) {
      error.config._retry = true;
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/auth/refresh`,
          {},
          { withCredentials: true },
        );
        if (data.token) {
          error.config.headers.Authorization = `Bearer ${data.token}`;
          return API(error.config);
        }
      } catch {
        // Let page handle auth state
      }
    }
    return Promise.reject(error);
  },
);

export function postFormData(path, formData) {
  return API.post(path, formData, {
    transformRequest: [
      (data, headers) => {
        delete headers["Content-Type"];
        return data;
      },
    ],
  });
}

export function formatApiError(detail) {
  if (detail == null) return "Something went wrong.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((e) => e?.msg || JSON.stringify(e)).join(" ");
  if (detail?.msg) return detail.msg;
  return String(detail);
}

export default API;
