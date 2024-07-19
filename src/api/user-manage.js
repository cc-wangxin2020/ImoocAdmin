import request from '@/utils/request'

export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'post',
    data
  })
}
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
