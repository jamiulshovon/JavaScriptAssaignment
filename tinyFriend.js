let numbers = ["shihab","shovon","shumi","piiiiiiiiiiiiiii"];

let max=numbers[0];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element<max) {
        max=element;
    }
}
 console.log(max);