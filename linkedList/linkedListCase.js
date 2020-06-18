import {LinkedList} from './linkedList.js'

const linkedList = new LinkedList()

linkedList.append('Jane')
linkedList.append('John')
linkedList.append('Lilei')
linkedList.append('Hanmeimei')

console.log(linkedList);

linkedList.insert(0, 'Apple')
linkedList.insert(2, 'Berry')

console.log(linkedList);

console.log(linkedList.get(2))

console.log(linkedList.indexOf('Lilei'), linkedList.indexOf('Jake'))

console.log(linkedList.removeAt(3))
console.log(linkedList.removeAt(1))
console.log(linkedList);

linkedList.insert(2, 'Author')
console.log(linkedList);

linkedList.remove('Apple')
console.log(linkedList);

console.log(linkedList.isEmpty());
console.log(linkedList.size());

