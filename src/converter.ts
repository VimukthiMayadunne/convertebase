export function numberConverter(num: any,  inbase: any, outbase: any) {
  const reg = /^[a-zA-Z0-9]+$/i
  if (inbase <= 10) {
    if (num != Math.floor(num)) {
      return new Error('No number Found')
    }
  } else if (!(reg.test(num))) {
    return new Error('No number Found')
  }
  if (num < 0) {
    return new Error('Number Sohld be positive')
  }
  if (outbase < 2 || outbase > 36) {
    return new Error('Output base should be between 2 and 36')
  }
  if (inbase < 2 || inbase > 36) {
    return new Error('Input base should be between 2 and 36')
  }
  num = parseInt(num, inbase)
  return (num.toString(outbase))
}

