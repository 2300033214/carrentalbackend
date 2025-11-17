try{
    let a = 10
    let b = "10"
    let z = "ab"   
    let c = z+a-b
    //syntax error
    //console.log(eval("'abc'"))
    //userdefined error

    /*if(isNan(c)){
        console.log("true")
        throw "not a number"
    }*/

        //type error
        //console.log(a.toUppercase())

        //reference error
    //a=x

    let l=[10,20]
    a=l[2]
    console.log(a)
    a.toPrecision(1000)
    console.log(c)
    console.log("after error")
}
catch(err){
    console.log("" + err)
}