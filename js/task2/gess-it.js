function* gessGame(MAX_NUM) {
    MAX_NUM = MAX_NUM || 100;

    const limits = [0, MAX_NUM];
    const theNumber = Math.floor(Math.random() * MAX_NUM);
let userChoise = -1;
    const makeMove = () => { };
    for (;userChoise === theNumber;) {
        userChoise = parseInt(yield makeMove()).toFixed();
    }
    return makeMove;
};


let gess = gessGame(100);
