function* fiboGenerator() {
    let i=nextFibo=0;
    let i1 = 1;
    let sign;
    while (true) {
        console.log(i, i1);
       if (sign) {
        nextFibo = i+i1;
       } else {
           nextFibo = i1 - i
       }
    //    i1 = (sign? i1 + i : i1 - i);       
        sign = yield nextFibo;
        i= i1;
        i1 = nextFibo;
    }
}

const fibo = fiboGenerator(); 





function getSomeFibo(n, sign) {
    for(let i=0;i<n;i++) console.log(i, fibo.next(sign));
}

console.log(/**========= */);
getSomeFibo(5, true);

console.log(fibo.next(true));
console.log(fibo.next(true));
console.log(fibo.next(true));
console.log(fibo.next(true));
console.log(fibo.next(false));
console.log(fibo.next(false));


