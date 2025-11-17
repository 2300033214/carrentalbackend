import Demo1 from './co31.js'

var obj1 = new Demo1()
var obj2 = new Demo1()

console.log(obj1.fun1);

obj11.a=10
console.log(obj2.a)

var obj3 = obj1;

console.log(obj3.a)
console.log(obj3.b)

obj3.a=20;
obj3.b=[100,200]
console.log(obj1.a)
console.log(obj1.b)

var obj4={
    ...obj1
}

obj4.a=30
obj4.b=[1000,2000]
console.log(obj1.a)
console.log(obj1.b)