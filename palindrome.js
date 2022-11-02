let str= abcde;
function reverse (str) {
let bag="";
for(let i=str.length-1; i>=0; i++){
bag+=str[i];
}
return(bag)
}
if(str==reverse(str)){
console.log("palindrome")}
else{console.log("Not Palindrome")}

