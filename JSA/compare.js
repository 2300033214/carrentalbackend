var d1 = {
    "a" : 10,
    "b" : 20
}
var d2 = {
    "a" : 10,
    "b" : 20
}
var d3 = d1
console.log(d3 == d1)
console.log(d1 == d2)
console.log(JSON.stringify(d1)===JSON.stringify(d2))