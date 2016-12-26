function t(){
    var seq = [];
    var cnt = 0;
    var flag = false;
    while (seq.push(Math.random()>=0.5?1:0),flag==false){
        cnt++;
        if(seq.length>2 &
            (seq[seq.length-2]==1) &
            (seq[seq.length-1]==1)
        )return cnt;
    }
}
var cntList=[];
for (var i=0;i<1142857;i++){
    cntList.push(t());
}

console.log(cntList.reduce(
    function(a,b){
        return a+b;
    }, 
    0)/1142857);