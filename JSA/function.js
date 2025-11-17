var a= (n) => n*n
console.log(a(2))

var b= n => n*n
console.log(b(3))

var c = (x,y) => {
    return x+y
}
console.log(c(1,2))

const d = function (){
    return 10
}
console.log(d)
console.log(d())

export default function fun1(){
    console.log("this is fun1")
}

export {fun1}
