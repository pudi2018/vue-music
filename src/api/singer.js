import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  let data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}
/*
singerid:4558
g_tk:5381
uin:0
format:json
inCharset:utf-8
outCharset:utf-8
notice:0
platform:h5page
needNewCode:1
order:listen
from:h5
num:15
begin:0
*/
export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 1,
    order: 'listen',
    from: 'h5',
    num: 100,
    begin: 0,
    songstatus: 1,
    singermid: singerId
  })
  return jsonp(url, data, options)
}