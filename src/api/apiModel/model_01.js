import {http_axios} from '../httpAxios'

// console.log(sVue)

export const API_MODEL1_testData = parmas => http_axios('/testData.json').then((res) => {
  console.log(res)
  if(res.status) {
      return res.data
  }
})