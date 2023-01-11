import { filter } from './node_modules/lodash-es/lodash.js'

const users = [{ name: 'ximing', age: 20 }, { name: 'peter', age: 40 }]
const filterUsers = filter(users, user => user.age > 20)
console.log('main')
console.log(filterUsers)