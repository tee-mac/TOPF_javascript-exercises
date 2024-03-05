const fibonacci = function(num) {
    num = +num;
    let first = 1, second = 1;
    if(num === 0) return 0;
    if(num < 0) return "OOPS";
    else if(num === 1 || num === 2) return 1;
    else {
        for(let i = 2; i < num; i++){
            const next = first + second;
            first = second;
            second = next;
        }
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
