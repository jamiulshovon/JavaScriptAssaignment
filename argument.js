function addition(number) {
    let sum =0;
    for (let i = 0; i < arguments.length; i++) {
        let  number = arguments[i];
           sum=sum+number;
           
        }
     return sum;
}

let array =addition(50,50,50);
console.log(array);