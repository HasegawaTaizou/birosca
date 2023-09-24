"use strict";

import axios from "axios";
import router from "../../router";

axios.interceptors.request.use(
  (config) => {
    const token = this.$store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push("/login");
    }
    return Promise.reject(error);
  }
);
