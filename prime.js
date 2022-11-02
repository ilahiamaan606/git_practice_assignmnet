function checkprime(N) {
let count=0;
for(let i=1; i<N; i++){
if(N%i===0){
count++}
}
if(count==2){
return true}
else{
return false}
}

if(checkprime(N)==true){
console.log("Prime")}
else{console.log("Not Prime")}