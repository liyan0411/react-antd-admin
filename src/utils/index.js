/**
 * 公共方法封装
 */
// 获取url的参数
export const queryString = () => {
  let _queryString = {}
  const _query = window.location.search.substr(1)
  const _vars = _query.split('&')
  _vars.forEach((v, i) => {
    const _pair = v.split('=')
    if (!_queryString.hasOwnProperty(_pair[0])) {
      _queryString[_pair[0]] = decodeURIComponent(_pair[1])
    } else if (typeof _queryString[_pair[0]] === 'string') {
      const _arr = [_queryString[_pair[0]], decodeURIComponent(_pair[1])]
      _queryString[_pair[0]] = _arr
    } else {
      _queryString[_pair[0]].push(decodeURIComponent(_pair[1]))
    }
  })
  return _queryString
}
// session 增 删 查
export const sSetObject=(k, v)=>{
  try {
    sessionStorage.setItem(k, JSON.stringify(v));
  } catch (e) {
  }
}
export const sGetObject=(k)=>{
  try {
    var v = sessionStorage.getItem(k);
    return v == null ? null : JSON.parse(v);
  } catch (e) {
  }
}
export const sRemove=(k)=>{
  try {
    sessionStorage.removeItem(k)
  } catch (e) {}
}

