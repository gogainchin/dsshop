import request from '@/utils/request'
import Qs from 'qs'
export function getList(query) {
  return request({
    url: 'power',
    method: 'get',
    params: query
  })
}

export function create(data) {
  data = Qs.parse(data)
  return request({
    url: 'power',
    method: 'post',
    data
  })
}

export function edit(data) {
  data = Qs.parse(data)
  return request({
    url: 'power/' + data.id,
    method: 'post',
    data
  })
}

export function destroy(id) {
  return request({
    url: 'power/destroy/' + id,
    method: 'post'
  })
}
