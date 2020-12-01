for(let i = 10; i <= 20; i++) {
    console.log(i)
}

for(let i = 40; i <= 0; i--) {
    console.log(i);
}

for(let i = 0; i <= 20; i+=2) {
    console.log(i);
}

for(let i = -15; i <= 15; i++) {
    console.log(i);
}

let answer = '';
for(let i = 20; i <= 30; i+=2) {
    console.log(answer);
}

for(let i = 0; i <= 30; i++) {
    if(i % 2 === 0){
        console.log( `${i}: even number` );
    } else{
        console.log( `${i}: odd number` );
    }
}

for(let i = 0; i <= 10; i++) {
    console.log(i * 9);
}

let i = 0;
do{
    console.log(i += 2);
}while(i < 20)
//prompt 9 sir almost there
let i = 5;
while (i <= 20) {

  console.log(i++);
}
//prompt 10
let i = 20;
while (i >= 0) {

  console.log(i--);
}

let i = '';
let fact = parseInt(i)
while(fact != 8){
    prompt('Enter the Magic Number !');
}

let i = 0;
    do{
        console.log(i++)
    }
    while(i<=5);