const positive = true;

function* fiboGenerator() {
    let i1 = nextFibo = 1;
    let i = 0;
    let sign = positive;
    let oldSign = positive;
    let fiboNumber = 1;

    while (true) {
        if (sign) {
        fiboNumber++;
            if (!oldSign) {
                nextFibo = i;
                i = i1;
                i1 = nextFibo;
                ;
            } else {
                nextFibo = i + i1;
                i = i1;
                i1 = nextFibo;
            }


        } else { /**negative direction */
            fiboNumber--;
            if (oldSign) {
                nextFibo = i;
                i = i1;
                i1 = nextFibo;
            } else {
                nextFibo = i - i1;
                i = i1;
                i1 = nextFibo;
            }
        }

        console.log("i=" + i, "i1=" + i1, "nextFibo=" + nextFibo, "sign="+sign, "oldSign="+oldSign, "fiboNumber="+fiboNumber);
        oldSign = sign;
        sign = yield nextFibo;
    }
}

const fibo = fiboGenerator();





function getSomeFibo(n, sign) {
    for (let i = 0; i < n; i++) {
        console.log(i, fibo.next(sign).value);
    }
}

function getNextFibo() {
    return fibo.next(true).value;
}

function getPrevFibo() {
    return fibo.next(false).value;
}

function getFiboString(n, sign) {
    const resp = [];
    for (let i = 0; i < n; i++)  resp.push(fibo.next(sign).value);
    return resp.join(",")
}

const textFrame = document.getElementsByClassName("text-frame")[0];

document.getElementById("more").addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.textContent = getFiboString(parseInt(prompt("Сколько числе желаете сгенерировать", 3)), true);
    textFrame.appendChild(newDiv)
})



document.getElementById("less").addEventListener("click", function () {
    // alert("Пока не очень работает")
    const newDiv = document.createElement("div");
    newDiv.textContent = getFiboString(parseInt(prompt("Сколько числе желаете сгенерировать", 3)), false);
    textFrame.appendChild(newDiv)
})
// {
//     const newDiv = document.createElement("div");
// newDiv.textContent =getNextFibo();
// textFrame.appendChild(newDiv);
// }
// {
//     const newDiv = document.createElement("div");
// newDiv.textContent =getNextFibo();
// textFrame.appendChild(newDiv);
// }