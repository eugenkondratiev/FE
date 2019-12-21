function* guessGame(MAX_NUM) {
    MAX_NUM = MAX_NUM || 100;
    let data = {
        limits: [0, MAX_NUM]
    };
    const theNumber = Math.floor(Math.random() * MAX_NUM);
    let attempts = 0;
    userChoise = -1;
    const makeMove = (d) => {
        attempts++;
        if (userChoise === theNumber) {
            d.success = true;
            d.attempts = attempts;
        } else {
            d.limits = (userChoise > theNumber) ? [data.limits[0], userChoise] : [userChoise, data.limits[1]];
        }
        return d;
    };
    // const getData = () => { data };
    // const askUser = (data)
    for (; userChoise !== theNumber;) {
        const askUser = parseInt(yield data);
        userChoise = askUser && askUser > data.limits[0] ? askUser : data.limits[0];
        data = makeMove(data);
        console.log("data -" + data, "userChoise -" + userChoise);
    }
    // return getData;
};


let g = guessGame(100);
let currentData = { limits: [0, 100] };
console.log("currentData.limits " + currentData.limits, currentData.success);

while (currentData.success == undefined) {
    currentData = g.next(prompt(`выберите число от ${currentData.limits[0]} до ${currentData.limits[1]}`, currentData.limits[1])).value;
    console.log("currentData.limits -", currentData);
}
console.log(`Угадано за ${currentData.attempts} попыток!`);



