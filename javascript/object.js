// let obj = {
//     nam: "mihir",
//     age: 19
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log(Object.entries(obj));


// Object.freeze(obj);
// obj.nam = 'hadavani mihir '; /// not work after frezze
// obj.count = 12;
// console.log(obj);


// ES 6orECHMA script6or ES2015


//1.new Syntax
//2. destructuring
//3. ES module
//4. arrow functions
//5. iterators and generators
// 6. promises


// function greet(name) {
//     if (!name) name = "default";
//     console.log("hello", name);
// }
// before es 6

// greet("mihir");
// greet();

// function greet(name = "default") {
//     console.log("hello", name);
// }

// greet();
// greet("mihir");








// let a = "javascript";
// b = "is";
// c = "amazing";

// let re = a + " " + b + " " + c;
// console.log(`
// ${a}
// ${b}
// ${c}
// `);


// console.log(`javascript is ${c}`);



//destructuring
//array

// const arr = ['js', 13, "ddd", 29];
// // nmae = arr[0];
// // age = arr[1];

// let [nmae, age, dj] = arr;

// console.log(nmae, age, dj);
// console.log({ nmae, age, dj });
// console.table({ nmae, age, dj });


// const obj2 = {
//     nam: "js",
//     age: 15
// }


// const { nam, age } = obj2;


// console.table({ nam, age });





// arrow function

// // greet();
// const greet = () => {
//         console.log("hello");
//     } // normal function are hoisage  before create funtion you call function  

// greet();



// this keyword
// const obj = {
//     greet: function() {
//         console.log(this.nma, this.agew);
//     }
// }


// const obj2 = {
//     nma: "fdfd",
//     agew: 219,
// }


// obj.greet.call(obj2);
// obj.greet();



// var local  /// let block scope


// function outerfunction() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log(i); //  you can access i in var but not in let
// }
// outerfunction();