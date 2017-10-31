import request from '@/common/request'


export function apiXxx () {
  return request('get', '/api/xxx')
}

export function apiGetLog () {
  return request('get', '/api/getLog')
}

/*
// post
export function postApiXxx (data = {}) {
  return request('post', '/api/xxx', data)
}

// json
export function testJsonp (data = {}) {
  return request('jsonp', 'http://suggest.58.com.cn/home_hotword.do', data)
}
*/
