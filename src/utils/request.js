import axios from "axios";
import config from "../config/base.config";
/**
 * 创建axios实例
 */
const instance = axios.create({
  baseURL: config.host
});

/**
 * axios 拦截器
 * 拦截并设置token
 */
instance.interceptors.request.use(
  config => {
    //todo:token 没有token或者token过期或者token无效，用户有没有权限，都要跳转到登录页面
    config.headers.Authorization = ``;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * Http服务类
 * get
 * post
 * delete
 * put
 * patch
 */
export default class Request {
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: { ...params } })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }

  static delete(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .delete(url, { params: { ...params } })
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }

  static post(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, { ...params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }

  static put(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, { ...params })
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }

  static patch(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .patch(url, { ...params })
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }
}
