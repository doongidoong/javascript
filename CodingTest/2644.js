let input = require('fs').readFileSync("CodingTest/input.txt").toString().trim().split('\n');
var n,m, x,y;
let k; 
n = parseInt(input[0]);
G = []
for(let i=0;i<n+1;i++){G.push([])}

input.map((item,index)=> {
    if(index==0) return;
    else if(index==1) {
        k = item.split(' ');
        x = parseInt(k[0]);
        y = parseInt(k[1]);
    }
    else if(index==2) {
        m = parseInt(item);
    }
    
    else{
        k = item.split(' ').map((item)=>{
            return parseInt(item);
        });
        G[k[0]].push(k[1]);
        G[k[1]].push(k[0]);
    }
})


let q = [[x,0]];
let visited = []
for(let i=0;i<n+1;i++) visited.push(0);

let check=0; 
while(q.length>0){
    now = q.shift();
    p = now[0];
    time = now[1];
    if(p==y){
        console.log(time);
        check =1;
        break;}    
    for(let i=0;i<G[p].length;i++){
        if(visited[G[p][i]]==0){
            visited[G[p][i]]=1
            q.push([G[p][i],time+1]);
        }
    }
}
if(check==0) console.log(-1);