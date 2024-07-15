function reverse(x: number): number {
    let rev=0
    let number :number=Math.abs(x)

while(number!==0){
    rev=(number%10)+rev *10
    number=Math.floor(number/10)

    if (rev > 2147483647) {
        return 0;
    }
}

if(x<0){
    rev=-rev
}

    return rev
};


console.log(reverse(153423))