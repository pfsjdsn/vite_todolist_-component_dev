import { filter } from 'lodash-es'

const users = [{ name: 'ximing', age: 20 }, { name: 'peter', age: 40 }]
const filterUsers = filter(users, user => user.age > 20)
console.log('main')
console.log(filterUsers)