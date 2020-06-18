import {Stack} from './stack.js'

/**
 * 十进制转二进制
 * @param {Number} num 
 */
function dec2bin(num) {
  // 1.创建stack
  const stack = new Stack()

  // 2.循环取余数
  while (num > 0) {
    let remainder = num % 2
    num = Math.floor(num / 2)
    stack.push(remainder)
  }

  // 3.拼接字符串
  let binString = ''
  while (!stack.isEmpty()) {
    binString += stack.pop()
  }

  console.log(binString)
  return binString
}

dec2bin(100)