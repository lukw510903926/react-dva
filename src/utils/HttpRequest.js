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

  static postForm(params, url) {
    return axios({
      url: url,
      method: 'post',
      data: {
        ...params,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: [data => {
        let formData = new FormData();
        for (let key in params) {
          formData.append(key, params[key]);
        }
        return formData;
      }],
    });
  }

  static postFormV2(params, url) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    let formData = new FormData();
    for (let key in params) {
      formData.append(key, params[key]);
    }

    return axios.post(url, formData, config)
      .then(response => response.data)
      .catch(error => Promise.reject(error))
    // return new Promise((resolve, reject) => {
    //   axios.post(url, formData, config).then(
    //     response => resolve(response.data)
    //   ).catch(error => reject(error));
    // })

  }
}
