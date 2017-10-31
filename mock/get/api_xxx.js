var a = 5

module.exports = function (req) {
  return {
    'code': a,
    'data|5-10': [{
      'id': '@id',
      'name': '@cname'
    }],
    'msg': 'ok'
  }
}
