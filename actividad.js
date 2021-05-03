//se debe colocar npm install prompt-sync primero en consola
const prompt=require('prompt-sync')();
const number =Number(prompt('ingresa un número: '));

function Fibonacci(num,counter,added_values=[]) {
    if (counter==0) {
        if (counter==number) return 0;
        counter+=1;
        added_values.push(0);
        return (Fibonacci(num,counter,added_values));
    }
    if (counter==1) {
        if (counter==number) return 1;
        counter+=1;
        added_values.push(1);
        if (counter==num) {
            return (added_values[counter-2]+added_values[counter-1]);
        }
        return (Fibonacci(num,counter,added_values));
    }
    var add= added_values[counter-2]+added_values[counter-1]
    added_values.push(add);
    counter+=1;
    if (counter==num) {
        return (added_values[counter-2]+added_values[counter-1]);
    }
    return (Fibonacci(num,counter,added_values));
} 

const result=Fibonacci(number,0,);
console.log(` F(${number}) = ${result}`);
