let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); //4
/* frits and shoppingCart links to the same array. so 
* changing one of them will change another one */

/* ********************************************** */

let i = 1;
let styles = ["Jazz", "Blues"];
console.log(`${i++}.  ${styles}`);
styles.push("Rock-n-roll");
console.log(`${i++}.  ${styles}`);
styles[Math.floor(styles.length / 2)] = "Classic";
console.log(`${i++}.  ${styles}`);
console.log(styles.shift());
console.log(`${i++}.  ${styles}`);
styles.unshift("Rap", "Raggae");
console.log(`${i++}.  ${styles}`);

/* ********************************************** */

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); 
/* function anonymous because the function is 
* last element of an array and doesn't return anything */


/* ********************************************** */

function sumInput() {

    this.begining = function() {
        this.a = 0;
        this.arr = [];
        this.arr.length = 0;
        this.sum = 0;
        this.read();
    }

    this.read = function() {
        this.a = prompt('a = ', 0); 
        this.checkingForValid();
    },

    this.checkingForValid = function() {
        
        if (isFinite(this.a)) {
            //console.log(typeof this.a + this.a);
            this.arr.push(+this.a);
            this.read();
        } else  this.summing();
    }

    this.summing = function() {
        for (let key = 0; key < this.arr.length; key++) {
            //console.log(this.arr[key]);
            this.sum += this.arr[key];
        }
        alert (`sum = ${this.sum}`);
    }

}

let inputs = new sumInput();
inputs.begining();