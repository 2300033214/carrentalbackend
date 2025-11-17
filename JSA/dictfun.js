var d = {
    "a" : 10,
    "b" : funtion (){return 10}
    get geta(){return this.a},
    set seta(a){this.a = a}
}
console.log(d.b())
console.log(d.geta())
d.seta(100)
console.log(d.geta())