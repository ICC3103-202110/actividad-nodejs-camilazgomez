const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Fibonacci(number,counter,added_values=[]) {
    const num=number;
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

rl.question('Ingrese su numero: ', number => {
    console.log(`F(${number}) = ${Fibonacci(Number(number),0,)}`);
    rl.close();
  });
