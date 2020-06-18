/**
 * 栈
 */
class Stack {
  constructor() {
    this.items = []
  }

  // 入栈
  push(item) {
    this.items.push(item)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 返回栈顶元素
  peek() {
    if (this.isEmpty()) return null
    return this.items[this.items.length - 1]
  }
  
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 返回栈大小
  size() {
    return this.items.length
  }
}

export {Stack}