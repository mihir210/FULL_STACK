for (let i = 0; i < 5; i++) {
    //  console.log("hi");
}
// while loop
let j = 0;
while (j < 10) {
    if (j === 4) { // === also check data type same
        break;
    }
    console.log(j);
    j++;
}


for (let index = 0; index < 10; index++) {
    if (index === 4 || index === 7) {
        continue;
    }
    console.log(index);

}