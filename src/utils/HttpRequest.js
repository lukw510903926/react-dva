import axios from 'axios'

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 6000;
axios.defaults.headers["CLOUD_HEADER"] = "application/x-www-form-urlencoded";
axios.interceptors.request.use(
  (config) => {
    console.info(config);
    return config;
  }, error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.info("response interceptors-------------");
    return response;
  }, (error) => {
    return Promise.reject(error);
  }
);

export default class HttpRequest {

  static getRequest = (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then(
        response => resolve(response.data)
      ).catch(error => reject(error));
    });
  };

  static postRequest(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(
        response => resolve(response.data)
      ).catch(
        error => reject(error));
    });
  }


  static deleteRequest(url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(url, params).then(
        response => resolve(response.data)
      ).catch(
        error => reject(error));
    });
  }

  static putRequest(url, params) {
    return new Promise((resolve, reject) => {
      axios.put(url, params).then(
        response => resolve(response.data)
      ).catch(
        error => reject(error));
    });
  }


  static exportRequest(url, params) {
    let config = {
      responseType: "arraybuffer"
    };
    return new Promise((resolve, reject) => {
      axios.post(url, params, config).then(
        response => resolve(response.data)
      ).catch(
        error => reject(error));
    });
  }

}
