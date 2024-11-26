import type { AxiosInstance } from 'axios';
import axios, { InternalAxiosRequestConfig, RawAxiosRequestConfig } from 'axios';

const getBaseUrl = () => 'http://localhost:3000/api';

export const authInterceptor = (client: AxiosInstance): AxiosInstance => {
  client.interceptors.request.use(async (cfg) => {
    const BASE_URL = getBaseUrl();
    const updatedCfg: RawAxiosRequestConfig = {
      ...cfg,
      url: `${BASE_URL}${cfg.url}`,
    };
    delete updatedCfg.customHost;
    return updatedCfg as InternalAxiosRequestConfig;
  });
  return client;
};

const apiRequest = authInterceptor(axios.create());

const apiRequestCache: { [baseURL: string]: AxiosInstance } = {};

export function getAPIRequest(baseURL: string) {
  if (!apiRequestCache[baseURL]) {
    const apiRequest = authInterceptor(axios.create());
    apiRequest.defaults.baseURL = baseURL;
    apiRequestCache[baseURL] = apiRequest;
  }
  return apiRequestCache[baseURL];
}

export type APIRequest = typeof apiRequest;
export default apiRequest;
