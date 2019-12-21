function guessGame(MAX_NUM) {
    MAX_NUM = MAX_NUM || 100;
    // let data = {
    //     limits: [0, MAX_NUM]
    // };
    const theNumber = Math.floor(Math.random() * MAX_NUM);
    let attempts = 0;
    userChoise = -1;
    const makeMove = (data) => {
        
        userChoise = data.userChoise !== undefined ?  parseInt(data.userChoise) : userChoise;
        const d = {attempts : ++attempts};

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
    // for (; userChoise !== theNumber;) {
    //     const amswer = parseInt(yield data);
    //     userChoise = askUser && askUser > data.limits[0] ? askUser : data.limits[0];
    //     data = makeMove(data);
    //     console.log("data -" + data, "userChoise -" + userChoise);
    // }
    // return getData;
    return makeMove;
};


const MAX = 100;
let g = guessGame(MAX);
let currentData = { limits: [0, MAX] };
console.log("currentData.limits " + currentData.limits, "currentData.success - "+currentData.success);


while (currentData.success == undefined) {
    // currentData = g.next(prompt(`выберите число от ${currentData.limits[0]} до ${currentData.limits[1]}`, currentData.limits[1])).value;
    currentData.userChoise = prompt(`выберите число от ${currentData.limits[0]} до ${currentData.limits[1]}`, currentData.limits[1]);
    currentData = g(currentData);
    console.log("currentData.limits -", currentData);
}
console.log(`Угадано за ${currentData.attempts} попыток!`);



