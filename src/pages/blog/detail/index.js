// 将当前文件夹下组件发送出去,以动态加载详情页组件
const resultComps = {}
let requireComponent = require.context(
  './', // 在当前目录下查找
  true, // 遍历子文件夹
  /\.vue$/ // 正则匹配 以 .vue结尾的文件
)


requireComponent.keys().forEach(fileName => {
  // let comp = requireComponent(fileName)
  // console.log(resultComps)
  // resultComps[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default

  const comp = requireComponents(fileName)
  // 截取文件名作为组件名
  resultComps = fileName.split('.vue')[0].split('/')
  // 考虑到可能存在文件夹/文件名的情况, 取最底级的文件名作为组件名
  // resultComps = resultComps[resultComps.length - 1]
  resultComps[resultComps.length - 1] = comp.default
})
console.log(resultComps)
export default resultComps