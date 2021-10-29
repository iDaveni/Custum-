function split(str) {
    return str.split(" ");
};

function reverse(array) {
    const num = [];
    for (let i = array.length - 1; i >= 0; i--) {
        num.push(array[i]);
    };
    return num;
};

function getEven() {
    const add = []
    const even = [];
    const arr = [3, 2, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 ? even.push(arr[i]) : add.push(arr[i])
    }
    return add;
}



function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};


export {
    split,
    arraySum,
    reverse,
    getEven
};