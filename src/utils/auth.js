import { setItem, getItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'

export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}
export function isCheckTimeout() {
  const currentTime = Date.now()
  const timestamp = getTimeStamp()
  return currentTime - timestamp > TOKEN_TIMEOUT_VALUE
}
