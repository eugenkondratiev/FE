function guessGame(MAX_NUM) {
    MAX_NUM = MAX_NUM || 100;
    const theNumber = Math.floor(Math.random() * MAX_NUM);
    let attempts = 0;
    userChoise = -1;
    const makeMove = (data) => {

        userChoise = data.userChoise !== undefined ? parseInt(data.userChoise) : userChoise;
        const d = { attempts: ++attempts };

        if (userChoise === theNumber) {
            d.success = true;
            d.attempts = attempts;
            d.answer = theNumber;
        } else {
            d.limits = (userChoise > theNumber) ? [data.limits[0], userChoise - 1] : [userChoise + 1, data.limits[1]];
        }
        return d;
    };
    return makeMove;
};


document.getElementById("new").addEventListener('click', function (e) {
    location.reload(true);
});



document.getElementById("start").addEventListener('click', function (e) {

    const MAX = 100;
    let g = guessGame(MAX);
    let currentData = { limits: [0, MAX] };
    console.log("currentData.limits " + currentData.limits, "currentData.success - " + currentData.success);

    function addToTextLog(message) {
        const newDiv = document.createElement("div");
        newDiv.textContent = message;
        document.getElementsByClassName("text-frame")[0].appendChild(newDiv);
        console.log(message);
    }

    function moveNext() {
        if (currentData.limits) addToTextLog(`Попытка ${(currentData.attempts ? currentData.attempts : 0) + 1}. Пределы { ${currentData.limits.join(" .. ")} }`);

        currentData.userChoise = prompt(`выберите число от ${currentData.limits[0]} до ${currentData.limits[1]}`, currentData.limits[1]);
        currentData = g(currentData);
        console.log("currentData.limits -", currentData);

        if (!currentData.success) {
            setTimeout(() => {
                moveNext();
            }, 0);
        } else {
            addToTextLog(`Ответ : ${currentData.answer}. Угадано за ${currentData.attempts} попыток!`);
        }
    }
    moveNext();
})
