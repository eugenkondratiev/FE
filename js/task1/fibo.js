function* fiboGenerator() {
    let i=nextFibo=0;
    let i1 = 1;
    let sign;
    while (true) {
        console.log("i="+i, "i1="+i1);
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
    for(let i=0;i<n;i++) console.log(i, fibo.next(sign).value);
}

function getFiboString(n, sign) {
    const resp =[];
    for(let i=0;i<n;i++)  resp.push(fibo.next(sign).value);
    return resp.join(",")
}

// console.log(/**========= */);
// getSomeFibo(5, true);

// console.log(fibo.next(true));
// console.log(fibo.next(true));
// console.log(fibo.next(true));
// console.log(fibo.next(true));
// console.log(fibo.next(false));
// console.log(fibo.next(false));
// getSomeFibo(5, false);
const textFrame = document.getElementsByClassName("text-frame")[0];


document.getElementById("more").addEventListener("click",function() {
    const newDiv = document.createElement("div");
    newDiv.textContent = getFiboString(parseInt(prompt("Сколько числе желаете сгенерировать", 3)),true); 
    textFrame.appendChild(newDiv)    
})



document.getElementById("less").addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.textContent = getFiboString(parseInt(prompt("Сколько числе желаете сгенерировать", 3)),false); 
    textFrame.appendChild(newDiv)    
})
