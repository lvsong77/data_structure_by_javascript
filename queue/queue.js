/**
 * 队列
 */
class Queue {
  constructor() {
    this.items = []
  }

  // 入队
  enqueue(element) {
    this.items.push(element)
  }

  // 出队
  dequeue() {
    return this.items.shift()
  }

  // 返回队列第一个元素
  front() {
    if (this.isEmpty()) return null
    return this.items[0]
  }

  // 判断是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 返回队列大小
  size() {
    return this.items.length
  }
}

export {Queue}