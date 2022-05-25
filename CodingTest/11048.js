let input = require('fs').readFileSync('CodingTest/input.txt').toString().trim().split('\n')

let n,m;
let g =[];
let dp = [];
input.map((item,index)=>{
    if(index==0){
        [n,m] = item.split(' ').map((item)=>{
            return parseInt(item);
        })
    }
    else{
        g.push(item.split(' ').map((item)=>{
            return parseInt(item);
        }))
        let temp =[]
        for(let i =0 ;i<g[0].length;i++){
        temp.push(0)}
        dp.push(temp)
    }
})
dp[0][0]= g[0][0]

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(j===0&& i>0){
           dp[i][j]= dp[i-1][j] +g[i][j] 
        }
        else if(i===0&& j>0){
           dp[i][j]= dp[i][j-1] +g[i][j] 
        }
        else if(i>0 && j>0){
            if(dp[i][j-1]>dp[i-1][j]){
                dp[i][j] = dp[i][j-1]
            }
            else{
                dp[i][j] = dp[i-1][j]    
            }
            if(dp[i-1][j-1]>dp[i][j]){
                dp[i][j] = dp[i-1][j-1]
            }
            dp[i][j] += g[i][j]
        }
    }        
}
console.log(dp[n-1][m-1]);