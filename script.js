//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
    let element=document.getElementById("level")
    let val=0;
    while(element!=document.documentElement){
        val++;
        element=element.parentNode;
    }
    alert("The level of the element is:"+val)
})