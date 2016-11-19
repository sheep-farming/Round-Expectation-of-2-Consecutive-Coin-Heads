function t(){
    var seq = [];
    var cnt = 0;
    var flag = false;
    while (seq.push(Math.random()>=0.5?1:0),cnt++,flag==false){
        if(seq.length>2 &
            (seq[seq.length-2]==1) &
            (seq[seq.length-1]==1)
        )return cnt;
    }
}
var cntList=[];
for (var i=0;i<142857;i++){
    cntList.push(t());
}
sum = cntList.reduce(
    function(a,b){
        return a+b;
    }, 
    0);
console.log(sum/142857);