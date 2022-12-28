function receivesAFunction(something){
    return something()
}

function returnsANamedFunction(){
    return function named(){
        console.log("something")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("nothing")
    }
}