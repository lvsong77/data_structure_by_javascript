/**
 * 优先级队列
 */
import {Queue} from './queue.js'

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  // 入队s
  enqueue(element, priority) {
    // 1.创建QueueElement对象
    const queueElement = new QueueElement(element, priority)

    // 2.考虑如何插入新的元素
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}

export {PriorityQueue}