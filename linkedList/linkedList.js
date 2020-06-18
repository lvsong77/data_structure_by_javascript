/**
 * 单向链表
 */
class Node {
  constructor(element) {
    // 保存元素
    this.element = element
    // 指向下一个节点
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 尾部追加node
  append(element) {
    // 1.创建新节点
    const newNode = new Node(element)

    // 2.追加元素
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }
    this.length++
  }

  // 中间插入node
  insert(position, element) {
    // 1.判断越界问题
    if (position < 0 || position > this.length) return false

    // 2.创建新节点
    const newNode = new Node(element)

    // 3.插入元素
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = newNode
      newNode.next = current
    }

    this.length++
  }

  // 获取指定位置元素
  get(position) {
    // 1.判断越界问题
    if (position < 0 || position > this.length - 1) return null

    // 2.查找该位置元素
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }

    return current.element
  }

  // 返回元素的索引
  indexOf(element) {
    // 1.获取第一个元素
    let current = this.head
    let index = 0

    // 2.依次查找
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }

    return -1
  }

  // 从特定位置移除一项
  removeAt(position) {
    // 1.判断越界问题
    if (position < 0 || position > this.length - 1) return null

    // 2.删除元素
    let current = this.head
    let previous = null
    let index = 0
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.length--

    return current.element
  }

  // 移除某一项
  remove(element) {
    // 1.获取元素位置
    const index = this.indexOf(element)
    if (index === -1) return

    // 2.删除该位置的元素
    this.removeAt(index)
  }

  // 修改某个位置的元素
  update(position, element) {
    // 1.删除position位置的元素
    const result = this.removeAt(position)

    // 2.在position位置插入element
    this.insert(position, element)

    return result
  }

  // 判断是否为空
  isEmpty() {
    return this.length === 0
  }

  // 返回链表大小
  size() {
    return this.length
  }
}

export {LinkedList, Node}