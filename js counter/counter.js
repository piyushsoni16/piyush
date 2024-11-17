let count = 0;
function increment(){
    count +=1;
    document.getElementById("count").value=count;
}
function decrement(){
    if(count>0){
    count -=1;
    document.getElementById("count").value=count;
}
}
function Reset(){
    count =0;
    document.getElementById("count").value=count;
}
