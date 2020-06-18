import {PriorityQueue} from './priorityQueue.js'

const queue = new PriorityQueue()
queue.enqueue('Jane', 1)
queue.enqueue('John', 5)
queue.enqueue('Lilei', 10)
queue.enqueue('Hanmeimei', 5)

console.log(queue);