var input= require('fs').readFileSync('CodingTest/input.txt').toString().trim().split('\n');
let max = -1000000000, min = 1000000000;

// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n =input[0];
const arr = input[1].split(" ").map((v)=>parseInt(v));
let op = input[2].split(" ").map((v)=>parseInt(v));
// let n, arr, op; 
// data.map((item,index)=>{
//     if(index==0){ n= parseInt(item)};
//     if(index==1){ arr= item.split(' ').map((item)=>{
//         item=parseInt(item);
//         return item;
//     }   )};
//     if(index==2){ op= item.split(' ').map((item)=>{
//         item=parseInt(item);
//         return item;
//     }   )};
// })

function DFS(L,val,a,b,c,d){
    if(L==n) {
        if(max<val) max= val;
        if(min>val) min= val;
        return;}
    if(a>=1) DFS(L+1,val+arr[L],a-1,b,c,d);
    if(b>=1) DFS(L+1,val-arr[L],a,b-1,c,d);
    if(c>=1) DFS(L+1,val*arr[L],a,b,c-1,d);
    if(d>=1) DFS(L+1,parseInt(val/arr[L]),a,b,c,d-1);
}
DFS(1,arr[0],op[0],op[1],op[2],op[3])

console.log(max);
console.log(min);   