import axios from 'axios'
import { development_IP } from './baseUrl.js'

  // 请求超时
  axios.defaults.timeout = 1000 * 60 * 2 // 2分钟
  // 后台接口地址
  axios.defaults.baseURL = development_IP.baseURL

  // 加载动画相关
  // let pageLoading = null;
  // global.loaddingText='数据加载中...'

  // request拦截
  axios.interceptors.request.use(config => {
      // // 如需对加载等待做特殊处理
      // pageLoading = Loading.service({
      //     fullscreen: true,
      //     text: global.loaddingText,
      //     background: 'rgba(0, 0, 0, 0.7)'
      // })
      // 获取token
      const token = 'test-token-sfdhiojfdiojfnjvbhsfghasfdgha'
      token && (config.headers['token'] = token)
      config.headers['Accept'] = 'application/json'
      return config
  }, err => {
      return Promise.reject(err)
  })
  
  // 状态码管理
  let stateCode = {
      200: '成功',
      301: '资源已被转移到其他URL',
      306: '已被废弃的HTTP状态码',
      401: '用户信息失效',
      404: '找不到',
      414: 'URL过长',
      405: '请求方式有误',
      500: '业务失败',
      600: '系统级别异常, 请联系开发'
  }

  // response拦截
  axios.interceptors.response.use(response => {
      // pageLoading && (pageLoading.close()); //关闭loading
      if (response.status === 200) {
          return Promise.resolve(response)
      } else {
          return Promise.reject(response)
      }
  }, error => {
      // pageLoading && (pageLoading.close()); //关闭loading
      if (error.response) {
          // 状态码统一管理
          Notification.error({
              duration: 3000,
              message: stateCode[error.response.status] || '服务器正在维护'
          })
          return Promise.reject(error) // 返回接口返回的错误信息
      }
  })

  export function http_axios(url, params = {}, method = 'get', type = 0, responseType) {
      let options = {
          url,
          method,
          responseType, // 响应数据类型
          headers: {
              "Content-Type": ['application/json;charset=UTF-8', 'multipart/form-data'][type]
          }
      }
      options.data = (method === 'get' ? { params } : params)
      return new Promise((resolve, reject) => {
          axios(options).then(res => {
              resolve(res.data)
          }).catch(err => {
              reject(err)
          })
      })
  }