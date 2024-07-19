import request from '@/utils/request'
export const getfeature = () => {
  return request({
    url: '/user/feature'
  })
}

export const getChapter = () => {
  return request({
    url: 'user/chapter'
  })
}
