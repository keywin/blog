var development_IP = {}

if (process.env.NODE_ENV == 'development') {
  development_IP = {
    baseURL: 'http://q4ujnj8md.bkt.clouddn.com/'
  }
}

if (process.env.NODE_ENV == 'production') {
  development_IP.baseURL = "http://yyy.com"
}

export { development_IP }