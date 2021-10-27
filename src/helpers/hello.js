function mulStr(string, val) {
    const upper = string.slice(0, 1).toUpperCase() + string.slice(1)
    const repeat = [];
    for (let i = 0; i < val; i++) {
        repeat.push(string);
    }
    return upper + repeat.join('');
}
console.log(mulStr("hello", 5))
export {
    mulStr
};