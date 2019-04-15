function $(id){
    return document.getElementById(id);
}
function js_hide(id){
    id.style.display = "none";
}
function js_show(id){
    id.style.display = "block";
}

// $("jd_arrleft").onclick || $("jd_arrright").onclick = function(){
//     // alert(11);
//     $("jd_arrleft").style.backgroundColor = "rgba(0,0,0,.5)";   
// }

function bgc_change(id,value){
    id.style.backgroundColor = "rgba(0,0,0,"+value+")";  
}

function scroll(){
    // ie9+和其他浏览器
    if(window.pageYOffset != null){
        return  {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    // 申明头文件
    else if(document.compatMode = "CSS1Compat"){
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    // 怪异模式
    else{
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}

function animate(obj,target){
    clearInterval(obj.timer);
    var speed = target > obj.offsetLeft ? 5 : -5;
    obj.timer = setInterval(function(){
        obj.style.left = obj.offsetLeft + speed + "px";
        var result = target - obj.offsetLeft;
        if(Math.abs(result) <= 5){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    },5);
}