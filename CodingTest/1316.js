var input = require('fs').readFileSync("CodingTest/input.txt").toString().trim().split('\n')
word =[]
check ={}
let cnt= 0
n = parseInt(input[0]);
for(let i=0;i<n;i++){
    d= {}
    word= input[i+1].replace("\r","");
    for(let j=0;j<word.length;j++){
        if(d[word[j]]==undefined)d[word[j]]=j;
        else if(d[word[j]]==j-1) d[word[j]]=j;
        else {
            cnt = cnt+1;
            break;}
    }
}
console.log(n-cnt);