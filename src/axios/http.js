
import axios from 'axios'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
 const Service = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: 'http://www.untilu.top/',
    withCredentials: false,
  headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }

  })
  // 添加请求拦截器
  // 添加请求拦截器
  
  Service.interceptors.request.use(function (config) {
   
   // 在发送请求之前做些什么
    if (config.url == "/user/info") {
      config.headers.Authorization ='Koala ' +window.localStorage.getItem('token')
  }
  return config
    
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default Service