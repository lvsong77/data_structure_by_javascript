import {Queue} from './queue.js'

/**
 * 几个人围成一圈，开始数数，数到某个特定数字自动淘汰，最后剩下的人获胜
 * @param {Array} nameList 
 * @param {Number} num 
 */
function passGame(nameList, num) {
  // 1.创建队列
  const queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  // 2.循环出队入队
  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 数到num只出队，不再入队
    queue.dequeue()
  }

  console.log(queue.front())  
  return queue.front()
}

passGame(['Jane', 'Jhon', 'Lilei', 'Hanmeimei'], 3)