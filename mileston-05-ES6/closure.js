function count(){
    let count= 0
    function increment(){
        console.log('value of count', count);
        count++
    }
    return increment

}

let counter= count()
counter()
counter()
counter()
counter()
