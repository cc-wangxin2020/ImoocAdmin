export const validatePassword = () => {
  return (rule, value, cb) => {
    if (value.length < 6) {
      cb(new Error('密码不能小于6位'))
    } else {
      cb()
    }
  }
}
