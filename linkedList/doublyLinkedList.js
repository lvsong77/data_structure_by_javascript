/**
 * 双向链表
 */
import {LinkedList, Node} from './linkedList.js'

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

class DoublylinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  // 尾部追加node
  append(element) {
    // 1.创建元素
    const newNode = new DoublyNode(element)

    // 2.追加元素
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
  }

  // 中间插入node
  insert(position, element) {
  }

  // 获取指定位置元素
  get(position) {
  }

  // 返回元素的索引
  indexOf(element) {
  }

  // 从特定位置移除一项
  removeAt(position) {
  }

  // 移除某一项
  remove(element) {
  }

  // 修改某个位置的元素
  update(position, element) {
  }

  // 判断是否为空
  isEmpty() {
  }

  // 返回链表大小
  size() {
  }



}

export {DoublylinkedList}