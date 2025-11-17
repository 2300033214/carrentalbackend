var ar = [20,10,50,25]
console.log(ar.find(fun1))
console.log(ar.every(fun2))
console.log(ar.filter(fun3))
console.log(ar.sort())
console.log(ar.map(fun4))
console.log(ar.reverse())
function fun1(val){
    return val > 5
}
function fun2(val){
    return val > 8
}
function fun3(val){
    return val > 10
}
function fun4(val){
    return val = val + 1
}
function fun5(val){
    return val >10
}