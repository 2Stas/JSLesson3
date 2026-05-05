//Imperative

// const arr= [1,2,3,4,5,6,7,8,9];
// let max = arr[0]
// for(let i = 0; i <arr.length; i++){
//     if(arr[i]> max){
//         arr[i]= max;
//     }
// }
// console.log(max)

// //Declerative

// const arr1 = arr.forEach((el1)=>console.log(el1))

// const words = ["spray", "elite", "exuberant", "destruction", "present"]
// const filterWords = words.filter(el=>el.length>6)
// console.log(filterWords)

// const arr2 = [1,2,3,4,5,6,7,8,9,10]
// const arrPow = arr2.map(el=>el**2);
// console.log(arrPow);


// let users = [
//     {id:1, name: "Petya", salary: 40000},
//     {id:2, name: "John", salary: 20000},
//     {id:3, name: "Mary", salary: 5000},
//     {id:4, name: "Ivam", salary: 100000}
// ]

// const filterUsers = users.filter(el=>el.salary>=20000)
// console.log(filterUsers)

// const findUser = users.find(el=>el.id===3)
// console.log(findUser)

// const arr3 = [2,4,56,321,3,2,1,32,5,56,26]
// const odd = number=>number%2!==0
// console.log(arr3.every(odd))
// console.log(arr3.some(odd))

// const numbers=[1,15,3,8,3,0,4765,438,97]
// console.log(numbers.sort((a,b)=>a-b))

const users = [
  { id: 'user-1', name: 'Iван', age: 25, isActive: true, balance: 3200 },
  { id: 'user-2', name: 'Олена', age: 30, isActive: false, balance: 5400 },
  { id: 'user-3', name: 'Андрiй', age: 19, isActive: true, balance: 1200 },
  { id: 'user-4', name: 'Марія', age: 27, isActive: false, balance: 4100 },
  { id: 'user-5', name: 'Дмитро', age: 35, isActive: true, balance: 8900 },

  { id: 'user-6', name: 'Сергій', age: 22, isActive: true, balance: 2700 },
  { id: 'user-7', name: 'Наталія', age: 28, isActive: false, balance: 3600 },
  { id: 'user-8', name: 'Віктор', age: 40, isActive: true, balance: 10200 },
  { id: 'user-9', name: 'Ірина', age: 31, isActive: true, balance: 4800 },
  { id: 'user-10', name: 'Олег', age: 26, isActive: false, balance: 1500 },

  { id: 'user-11', name: 'Тетяна', age: 33, isActive: true, balance: 6200 },
  { id: 'user-12', name: 'Юрій', age: 29, isActive: false, balance: 2900 },
  { id: 'user-13', name: 'Світлана', age: 24, isActive: true, balance: 3400 },
  { id: 'user-14', name: 'Роман', age: 38, isActive: false, balance: 7100 },
  { id: 'user-15', name: 'Катерина', age: 21, isActive: true, balance: 2100 },
];

const usersName = users.map(el=>el.name)

// const usersNameNewArr;
// for(let i = 0; i< users.length; i++){
//     usersNameNewArr += usersNameNewArr + users[i].name;
// }

const usersBalanceUp = users.map(el=>el.balance+(el.balance*0.15))

// for(let i = 0; i < users.length; i++){
//     users[i].balance * 0.15;
// }

const usersBalanceBiggerThan3000 = users.filter(el=>el.balance>3000)
const findUserById = users.find(el=>el.id==='user-3')
const isEveryoneActive = users.every(el=>el.isActive===true)
const usersBalance = users.map(el=>el.balance)
const usersHighestBalance = users.reduce((max, user) => user.balance > max ? user.balance : max, users[0].balance)
const sortUsersByBalance = users.sort((a,b)=>a.balance-b.balance)
console.log(usersName)
console.log(usersBalanceUp)
console.log(usersBalanceBiggerThan3000)
console.log(findUserById)
console.log(isEveryoneActive)
console.log(usersBalance)
console.log(usersHighestBalance)
console.log(sortUsersByBalance)