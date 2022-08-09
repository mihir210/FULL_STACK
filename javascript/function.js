function printname(name) {
    console.log("my name is", name);
}
printname("dbndh");


function add(a, b) {
    return a + b;
}


console.log(add(9, 2));


function fac(n) {
    if (n <= 1) {
        return 1;
    } else {
        return (n * fac(n - 1));
    }
}
console.log(fac(5));