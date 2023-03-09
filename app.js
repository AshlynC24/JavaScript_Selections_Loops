console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//create a for loop that evaluates numbers from 1-100 
//inside the body of the loop write if/else section 
for (let i = 0; i < 100; i ++){
    if(i % 2 == 0 ){
        continue;
    }
    else{
        console.log(i)
    }
}
console.log("EXERCISE 3.1:\n==========\n");
//Exercise 3
let i = 1; 
while(i <=100){
    if(i % 2 != 0){
    console.log(i);

    }
    i++;
}
let t = 1;
do{
    if(t % 2 != 0){
        console.log(t);
    }
    t++;
}while(t < 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i =0; i <100; i++)
{
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0) {
        console.log("Buzz");
    }
    else{ 
        if (i % 3 ==0 && i % 5 ==0) {
        console.log("FizzBuzz");}
    }
}
console.log("EXERCISE 3.2:\n==========\n");
//Exercise 3 
let g = 1;
while(g <= 100){
    let output = "";

    if(g % 3 == 0){
        output = "Fizz";
    }

    if(g % 5 == 0){
        output = "Buzz";
    }
    
    if(g % 3 ==0 && g % 5 ==0){
        output = "FizzBuzz";
    }

    console.log(`${g} and ${output}`);
}

let x = 1;
do{
    let output = "";
    if(x % 3 ==0){
        output += "Fizz";
    }

    if(x % 5 == 0){
        output += "Buzz";
    }

    if(x% 3 ==0 && x % 5 ==0 ){
        output += "FizzBuzz";
    }

} 
while(x <= 100);
console.log("EXERCISE 4:\n==========\n");
//Exercise 4 
let value = Math.round((Math.random() * 500)); //creates a random number between 0 and 500 
let n = Math.round(Math.random()* (500-100) + 100) // creates a random number between 100 and 500 

for (let i =1; i <= n; i++){
    if(i == numberToFind){
        console.log(`Found ${numberToFind}!`);
        break;
    }
    if(i == n){
        console.log(`Did not find ${numberToFind} within 1 - ${n}`);

    }
}
console.log("EXERCISE 5:\n==========\n");
//Exercise 5 
let fizzDivisor = Math.round(Math.random() * (10-1) + 1);
let buzzDivisor = Math.round(Math.random() * (10-1)+ 1);
let start = Math.round(Math.random()* (10-1)-1);
let end = Math.round(Math.random()* (1000 -100) + 100);

for(let i = start; i <= end; i ++){
    let output= "";
    if(i % fizzDivisor == 0){
        output = "Fizz";
    }
    if(i % buzzDivisor == 0){
        output = "Buzz";
    }
    console.log({i}, {output});
}
console.log(fizzDivisor, buzzDivisor);
