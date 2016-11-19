function flip(){
    return Math.random()>=0.5?1:0;
}
function t(){
    var seq = [];
    var cnt = 0;
    var flag = false;
    while (flag==false){
        cnt++;
        seq.push(flip());
        if(seq.length>2){
        if((seq[seq.length-2]==1)&(seq[seq.length-1]==1)){return cnt;}}
    }
}
var cntList=[];
for (var i=0;i<9999999;i++){
    cntList.push(t());
}
sum = cntList.reduce(
    function(a,b){
        return a+b;
    }, 
    0);
console.log(sum/9999999);