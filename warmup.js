const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

//1-
console.log(1);
const FilteredAge = users.filter((user)=>{return user.age>30});
console.log(FilteredAge);

//2-
console.log(2);
const OnlyNames = users.map((user)=>{return user.name});
console.log(OnlyNames);

//3-
console.log(3);
const FirstAdmin = users.find((user)=>{return user.role=="admin"});
console.log(FirstAdmin);

//4-
console.log(4);
const LastAdmin = users.reverse().find((user)=>{return user.role=="admin"});
console.log(LastAdmin);

//5-
console.log(5);
const DeepCopy = (obj) => {return JSON.parse(JSON.stringify(obj))};
console.log(DeepCopy(users));
